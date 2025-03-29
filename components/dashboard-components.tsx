"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  AlertCircle,
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

// Pool Metrics Component
export function PoolMetrics({ poolState, hookContract, refreshData }) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshData();
    setIsRefreshing(false);
  };

  // Sample data for charts
  const priceData = [
    { time: "00:00", price: 1800 },
    { time: "04:00", price: 1820 },
    { time: "08:00", price: 1790 },
    { time: "12:00", price: 1810 },
    { time: "16:00", price: 1850 },
    { time: "20:00", price: 1830 },
    { time: "24:00", price: 1840 },
  ];

  const volumeData = [
    { day: "Mon", volume: 120000 },
    { day: "Tue", volume: 150000 },
    { day: "Wed", volume: 180000 },
    { day: "Thu", volume: 130000 },
    { day: "Fri", volume: 160000 },
    { day: "Sat", volume: 90000 },
    { day: "Sun", volume: 70000 },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Pool Overview</CardTitle>
          <CardDescription>Current pool metrics and statistics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Current Price</p>
                <h3 className="text-2xl font-bold">
                  {poolState
                    ? `$${(poolState.price || 0).toFixed(2)}`
                    : "Loading..."}
                </h3>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">24h Change</p>
                <div className="flex items-center">
                  <h3 className="text-2xl font-bold text-green-500">
                    {poolState ? `+2.4%` : "Loading..."}
                  </h3>
                  <TrendingUp className="ml-2 h-5 w-5 text-green-500" />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">TVL</p>
                <h3 className="text-2xl font-bold">
                  {poolState
                    ? `$${(poolState.tvl || 0).toLocaleString()}`
                    : "Loading..."}
                </h3>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">24h Volume</p>
                <h3 className="text-2xl font-bold">
                  {poolState
                    ? `$${(poolState.volume || 0).toLocaleString()}`
                    : "Loading..."}
                </h3>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Price Chart (24h)</p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis domain={["auto", "auto"]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="w-full"
            onClick={handleRefresh}
            disabled={isRefreshing}
          >
            {isRefreshing ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Refreshing...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Data
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rebalancing Status</CardTitle>
          <CardDescription>Auto-rebalancing hook performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Rebalance Count</p>
                <h3 className="text-2xl font-bold">
                  {poolState
                    ? `${poolState.rebalanceCount || 12}`
                    : "Loading..."}
                </h3>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Last Rebalance</p>
                <h3 className="text-2xl font-bold">
                  {poolState
                    ? `${poolState.lastRebalance || "2h ago"}`
                    : "Loading..."}
                </h3>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fee Savings</p>
                <h3 className="text-2xl font-bold text-green-500">
                  {poolState
                    ? `$${(poolState.feeSavings || 1240).toLocaleString()}`
                    : "Loading..."}
                </h3>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Efficiency</p>
                <h3 className="text-2xl font-bold">
                  {poolState
                    ? `${poolState.efficiency || 94.5}%`
                    : "Loading..."}
                </h3>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Volume History (7d)</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={volumeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="volume" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <p className="text-sm text-muted-foreground mb-2">
              Next Rebalance Threshold
            </p>
            <div className="flex items-center gap-4">
              <Slider
                defaultValue={[75]}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="font-medium">75%</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

// Position Manager Component
export function PositionManager({
  positions,
  hookContract,
  refreshData,
  token0Address,
  token1Address,
}) {
  const [amount0, setAmount0] = useState("");
  const [amount1, setAmount1] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleAddLiquidity = async () => {
    if (!amount0 || !amount1) return;

    setIsAdding(true);
    try {
      // In a real app, you would call the contract method here
      console.log("Adding liquidity:", amount0, amount1);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate transaction
      await refreshData();
    } catch (error) {
      console.error("Error adding liquidity:", error);
    } finally {
      setIsAdding(false);
      setAmount0("");
      setAmount1("");
    }
  };

  const handleRemoveLiquidity = async (positionId) => {
    setIsRemoving(true);
    setSelectedPosition(positionId);
    try {
      // In a real app, you would call the contract method here
      console.log("Removing liquidity for position:", positionId);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate transaction
      await refreshData();
    } catch (error) {
      console.error("Error removing liquidity:", error);
    } finally {
      setIsRemoving(false);
      setSelectedPosition(null);
    }
  };

  // Sample position data
  const samplePositions = [
    {
      id: "1",
      token0Amount: "1.5 ETH",
      token1Amount: "2500 USDC",
      value: "$4,500",
      range: "1600 - 2000",
      status: "In Range",
    },
    {
      id: "2",
      token0Amount: "0.8 ETH",
      token1Amount: "1200 USDC",
      value: "$2,400",
      range: "1700 - 1900",
      status: "In Range",
    },
    {
      id: "3",
      token0Amount: "2.0 ETH",
      token1Amount: "3000 USDC",
      value: "$6,000",
      range: "1500 - 2100",
      status: "Out of Range",
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add Liquidity</CardTitle>
          <CardDescription>
            Provide liquidity to the auto-rebalancing pool
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="amount0">ETH Amount</Label>
              <Input
                id="amount0"
                placeholder="0.0"
                value={amount0}
                onChange={(e) => setAmount0(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount1">USDC Amount</Label>
              <Input
                id="amount1"
                placeholder="0.0"
                value={amount1}
                onChange={(e) => setAmount1(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={handleAddLiquidity}
            disabled={isAdding || !amount0 || !amount1}
          >
            {isAdding ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                Adding Liquidity...
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Add Liquidity
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Positions</CardTitle>
          <CardDescription>Manage your liquidity positions</CardDescription>
        </CardHeader>
        <CardContent>
          {samplePositions.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Position</TableHead>
                  <TableHead>Assets</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Range</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {samplePositions.map((position) => (
                  <TableRow key={position.id}>
                    <TableCell className="font-medium">
                      #{position.id}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{position.token0Amount}</span>
                        <span>{position.token1Amount}</span>
                      </div>
                    </TableCell>
                    <TableCell>{position.value}</TableCell>
                    <TableCell>{position.range}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          position.status === "In Range"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {position.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveLiquidity(position.id)}
                        disabled={
                          isRemoving && selectedPosition === position.id
                        }
                      >
                        {isRemoving && selectedPosition === position.id ? (
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                        ) : (
                          <Minus className="h-4 w-4" />
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <p className="text-muted-foreground mb-4">
                You don't have any positions yet
              </p>
              <Button
                variant="outline"
                onClick={() => document.getElementById("amount0")?.focus()}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Your First Position
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Market Simulator Component
export function MarketSimulator({
  hookContract,
  poolManagerContract,
  token0Address,
  token1Address,
  refreshData,
}) {
  const [priceChange, setPriceChange] = useState(0);
  const [timeframe, setTimeframe] = useState("24h");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResults, setSimulationResults] = useState(null);

  const handleSimulate = async () => {
    setIsSimulating(true);
    try {
      // In a real app, you would call the contract or API to run the simulation
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate processing

      // Sample simulation results
      setSimulationResults({
        standardPool: {
          fees: 120,
          impermanentLoss: 85,
          netReturn: 35,
        },
        autoRebalancingPool: {
          fees: 120,
          impermanentLoss: 25,
          netReturn: 95,
        },
        improvement: "171%",
      });
    } catch (error) {
      console.error("Error running simulation:", error);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Market Simulator</CardTitle>
          <CardDescription>
            Simulate market conditions and see how the auto-rebalancing hook
            performs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label className="mb-2 block">Price Change Simulation</Label>
              <div className="flex items-center gap-4">
                <span className="text-red-500">-50%</span>
                <Slider
                  min={-50}
                  max={50}
                  step={1}
                  value={[priceChange]}
                  onValueChange={(value) => setPriceChange(value[0])}
                  className="flex-1"
                />
                <span className="text-green-500">+50%</span>
              </div>
              <div className="mt-2 text-center">
                <Badge
                  variant={
                    priceChange > 0
                      ? "default"
                      : priceChange < 0
                      ? "destructive"
                      : "outline"
                  }
                >
                  {priceChange > 0 ? (
                    <ChevronUp className="mr-1 h-3 w-3" />
                  ) : priceChange < 0 ? (
                    <ChevronDown className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowUpDown className="mr-1 h-3 w-3" />
                  )}
                  {priceChange > 0 ? `+${priceChange}%` : `${priceChange}%`}
                </Badge>
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Timeframe</Label>
              <Tabs
                defaultValue="24h"
                onValueChange={setTimeframe}
                className="w-full"
              >
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="24h">24 Hours</TabsTrigger>
                  <TabsTrigger value="7d">7 Days</TabsTrigger>
                  <TabsTrigger value="30d">30 Days</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={handleSimulate}
            disabled={isSimulating}
          >
            {isSimulating ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                Running Simulation...
              </>
            ) : (
              "Run Simulation"
            )}
          </Button>
        </CardFooter>
      </Card>

      {simulationResults && (
        <Card>
          <CardHeader>
            <CardTitle>Simulation Results</CardTitle>
            <CardDescription>
              {`${Math.abs(priceChange)}% price ${
                priceChange >= 0 ? "increase" : "decrease"
              } over ${timeframe}`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Standard Pool</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Fees Earned
                      </p>
                      <p className="text-lg font-medium text-green-500">
                        +${simulationResults.standardPool.fees}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Impermanent Loss
                      </p>
                      <p className="text-lg font-medium text-red-500">
                        -${simulationResults.standardPool.impermanentLoss}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-muted-foreground">
                        Net Return
                      </p>
                      <p className="text-xl font-bold">
                        ${simulationResults.standardPool.netReturn}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Auto-Rebalancing Pool</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Fees Earned
                      </p>
                      <p className="text-lg font-medium text-green-500">
                        +${simulationResults.autoRebalancingPool.fees}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Impermanent Loss
                      </p>
                      <p className="text-lg font-medium text-red-500">
                        -$
                        {simulationResults.autoRebalancingPool.impermanentLoss}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-muted-foreground">
                        Net Return
                      </p>
                      <p className="text-xl font-bold">
                        ${simulationResults.autoRebalancingPool.netReturn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Auto-rebalancing improves returns by{" "}
                  <span className="font-bold text-green-500">
                    {simulationResults.improvement}
                  </span>{" "}
                  compared to a standard pool under these conditions.
                </AlertDescription>
              </Alert>

              <div>
                <p className="text-sm font-medium mb-2">
                  Performance Comparison
                </p>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart
                    data={[
                      {
                        name: "Standard Pool",
                        value: simulationResults.standardPool.netReturn,
                      },
                      {
                        name: "Auto-Rebalancing",
                        value: simulationResults.autoRebalancingPool.netReturn,
                      },
                    ]}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="hsl(var(--primary))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Rebalancing Visualizer Component
export function RebalancingVisualizer({ poolState, positions }) {
  // Sample data for visualization
  const rebalancingEvents = [
    {
      timestamp: "2023-03-15 08:30",
      priceChange: "+2.5%",
      gasUsed: "0.012 ETH",
      savings: "$45",
    },
    {
      timestamp: "2023-03-14 14:45",
      priceChange: "-1.8%",
      gasUsed: "0.009 ETH",
      savings: "$32",
    },
    {
      timestamp: "2023-03-13 22:10",
      priceChange: "+3.2%",
      gasUsed: "0.015 ETH",
      savings: "$58",
    },
    {
      timestamp: "2023-03-12 11:20",
      priceChange: "-2.1%",
      gasUsed: "0.011 ETH",
      savings: "$41",
    },
  ];

  const priceRangeData = [
    { price: 1500, value: 10 },
    { price: 1600, value: 25 },
    { price: 1700, value: 45 },
    { price: 1800, value: 60 },
    { price: 1900, value: 45 },
    { price: 2000, value: 25 },
    { price: 2100, value: 10 },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Price Range Visualization</CardTitle>
          <CardDescription>
            Current liquidity distribution and price ranges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-2">Liquidity Distribution</p>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={priceRangeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="price" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Current Price</p>
                <p className="text-xl font-bold">$1,840</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Optimal Range</p>
                <p className="text-xl font-bold">$1,700 - $1,950</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Concentration</p>
                <p className="text-xl font-bold">78%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Rebalancing Events</CardTitle>
          <CardDescription>
            History of automatic rebalancing operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Price Change</TableHead>
                <TableHead>Gas Used</TableHead>
                <TableHead>Savings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rebalancingEvents.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>{event.timestamp}</TableCell>
                  <TableCell
                    className={
                      event.priceChange.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {event.priceChange}
                  </TableCell>
                  <TableCell>{event.gasUsed}</TableCell>
                  <TableCell className="text-green-500">
                    {event.savings}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Rebalancing Efficiency</CardTitle>
          <CardDescription>
            Performance metrics of the auto-rebalancing hook
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium mb-2">Gas Efficiency</p>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-muted rounded-full h-4">
                    <div
                      className="bg-primary h-4 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span className="font-medium">85%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">IL Reduction</p>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-muted rounded-full h-4">
                    <div
                      className="bg-primary h-4 rounded-full"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                  <span className="font-medium">72%</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium mb-2">Monthly Performance</p>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart
                  data={[
                    { day: "1", standard: 100, rebalancing: 100 },
                    { day: "5", standard: 102, rebalancing: 104 },
                    { day: "10", standard: 98, rebalancing: 103 },
                    { day: "15", standard: 95, rebalancing: 105 },
                    { day: "20", standard: 97, rebalancing: 108 },
                    { day: "25", standard: 94, rebalancing: 110 },
                    { day: "30", standard: 96, rebalancing: 115 },
                  ]}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="standard"
                    name="Standard Pool"
                    stroke="#8884d8"
                  />
                  <Line
                    type="monotone"
                    dataKey="rebalancing"
                    name="Auto-Rebalancing"
                    stroke="hsl(var(--primary))"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
