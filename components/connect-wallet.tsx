"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Wallet, LogOut, ExternalLink } from "lucide-react"

export function ConnectWallet({ provider }) {
  const [account, setAccount] = useState("")
  const [chainId, setChainId] = useState("")
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    const checkConnection = async () => {
      if (provider) {
        try {
          const { ethers } = await import("ethers")
          const signer = await provider.getSigner()
          const address = await signer.getAddress()
          setAccount(address)

          const network = await provider.getNetwork()
          setChainId(network.chainId.toString())
        } catch (error) {
          console.error("Error checking connection:", error)
        }
      }
    }

    checkConnection()
  }, [provider])

  const connectWallet = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        setIsConnecting(true)
        await window.ethereum.request({ method: "eth_requestAccounts" })

        // Reload the page to reinitialize the provider
        window.location.reload()
      } catch (error) {
        console.error("Error connecting wallet:", error)
      } finally {
        setIsConnecting(false)
      }
    } else {
      alert("Please install MetaMask or another Ethereum wallet")
    }
  }

  const disconnectWallet = () => {
    // There's no standard way to disconnect in ethers.js
    // We can just reset the state and reload
    setAccount("")
    setChainId("")
    window.location.reload()
  }

  const formatAddress = (address) => {
    return address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : ""
  }

  const getExplorerLink = () => {
    // Basic mapping of chain IDs to block explorers
    const explorers = {
      "1": "https://etherscan.io/address/",
      "5": "https://goerli.etherscan.io/address/",
      "11155111": "https://sepolia.etherscan.io/address/",
      "137": "https://polygonscan.com/address/",
      "80001": "https://mumbai.polygonscan.com/address/",
      "42161": "https://arbiscan.io/address/",
      "421613": "https://goerli.arbiscan.io/address/",
    }

    return explorers[chainId] ? `${explorers[chainId]}${account}` : "#"
  }

  if (!account) {
    return (
      <Button onClick={connectWallet} disabled={isConnecting}>
        {isConnecting ? (
          <>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
            Connecting...
          </>
        ) : (
          <>
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </>
        )}
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Wallet className="mr-2 h-4 w-4" />
          {formatAddress(account)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a href={getExplorerLink()} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <ExternalLink className="mr-2 h-4 w-4" />
            View on Explorer
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={disconnectWallet} className="flex items-center text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

