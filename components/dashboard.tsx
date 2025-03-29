"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConnectWallet } from "./connect-wallet"
import { PoolMetrics, PositionManager, MarketSimulator, RebalancingVisualizer } from "./dashboard-components"
import { AutoRebalancingHookABI } from "./abis/auto-rebalancing-hook-abi"
import { PoolManagerABI } from "./abis/pool-manager-abi"

export default function Dashboard() {
  const [provider, setProvider] = useState(null)
  const [hookContract, setHookContract] = useState(null)
  const [poolManagerContract, setPoolManagerContract] = useState(null)
  const [poolState, setPoolState] = useState(null)
  const [positions, setPositions] = useState([])
  const [poolId, setPoolId] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  // Contract addresses - in a real app, these would come from environment variables
  const HOOK_ADDRESS = process.env.NEXT_PUBLIC_HOOK_ADDRESS || "0x123..."
  const POOL_MANAGER_ADDRESS = process.env.NEXT_PUBLIC_POOL_MANAGER_ADDRESS || "0x456..."
  const TOKEN0_ADDRESS = process.env.NEXT_PUBLIC_TOKEN0_ADDRESS || "0x789..."
  const TOKEN1_ADDRESS = process.env.NEXT_PUBLIC_TOKEN1_ADDRESS || "0xabc..."

  useEffect(() => {
    const initializeProvider = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          // Import ethers dynamically to avoid SSR issues
          const { ethers } = await import("ethers")

          const web3Provider = new ethers.BrowserProvider(window.ethereum)
          setProvider(web3Provider)

          // Initialize contracts
          const signer = await web3Provider.getSigner()
          const hook = new ethers.Contract(HOOK_ADDRESS, AutoRebalancingHookABI, signer)
          const poolManager = new ethers.Contract(POOL_MANAGER_ADDRESS, PoolManagerABI, signer)

          setHookContract(hook)
          setPoolManagerContract(poolManager)

          // Get pool ID
          const id = await hook.getPoolId(TOKEN0_ADDRESS, TOKEN1_ADDRESS, 3000)
          setPoolId(id)

          // Load initial data
          await fetchPoolData(hook, id)
        } catch (error) {
          console.error("Error initializing provider:", error)
        } finally {
          setIsLoading(false)
        }
      } else {
        setIsLoading(false)
      }
    }

    initializeProvider()
  }, [])

  const fetchPoolData = async (hook, id) => {
    try {
      // Get pool state
      const state = await hook.getPoolState(id)
      setPoolState(state)

      // Get positions
      const allPositions = await hook.getLPPositions(id)
      setPositions(allPositions)
    } catch (error) {
      console.error("Error fetching pool data:", error)
    }
  }

  const refreshData = async () => {
    if (hookContract && poolId) {
      await fetchPoolData(hookContract, poolId)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Auto-Rebalancing Hook Dashboard</h1>
        <ConnectWallet provider={provider} />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : !provider ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <h2 className="text-xl font-semibold mb-4">Connect Your Wallet</h2>
            <p className="text-muted-foreground mb-6">
              Please connect your wallet to access the Auto-Rebalancing Hook dashboard.
            </p>
            <ConnectWallet provider={provider} />
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue="metrics" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-3xl mx-auto">
            <TabsTrigger value="metrics">Pool Metrics</TabsTrigger>
            <TabsTrigger value="positions">Manage Positions</TabsTrigger>
            <TabsTrigger value="simulator">Market Simulator</TabsTrigger>
            <TabsTrigger value="visualizer">Rebalancing Visualizer</TabsTrigger>
          </TabsList>

          <TabsContent value="metrics">
            <PoolMetrics poolState={poolState} hookContract={hookContract} refreshData={refreshData} />
          </TabsContent>

          <TabsContent value="positions">
            <PositionManager
              positions={positions}
              hookContract={hookContract}
              refreshData={refreshData}
              token0Address={TOKEN0_ADDRESS}
              token1Address={TOKEN1_ADDRESS}
            />
          </TabsContent>

          <TabsContent value="simulator">
            <MarketSimulator
              hookContract={hookContract}
              poolManagerContract={poolManagerContract}
              token0Address={TOKEN0_ADDRESS}
              token1Address={TOKEN1_ADDRESS}
              refreshData={refreshData}
            />
          </TabsContent>

          <TabsContent value="visualizer">
            <RebalancingVisualizer poolState={poolState} positions={positions} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}

