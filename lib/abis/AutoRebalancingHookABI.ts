export const AutoRebalancingHookABI = [
  // Add your contract ABI here
  // These are just the essential functions for the demo
  "function getPoolState(bytes32 poolId) external view returns (tuple(int24 lastTick, uint128 movingAverageGasPrice, uint104 movingAverageGasPriceCount, uint256 priceVolatilityEMA, uint256 tradingVolume, uint256 liquidityDepth, uint256 lastVolatilityUpdate, uint256 lastVolumeUpdate, uint256[] priceChanges, uint256 lastRebalanceTimestamp, int24 currentRangeWidth, int24 optimalRangeWidth, uint256 rebalanceCount, uint24 currentFee, uint256 feeRevenueAccumulator, uint256 averagePriceImpact, uint256 priceImpactCount))",
  "function getLPPositions(bytes32 poolId) external view returns (tuple(address lpAddress, uint256 liquidityProvided, int24 tickLower, int24 tickUpper, uint256 entryTimestamp, uint256 lastRebalanceTimestamp, uint256 feesClaimed, bool active)[])",
  "function getPoolAnalytics(bytes32 poolId) external view returns (tuple(uint256 totalVolume, uint256 totalFeeRevenue, uint256 averageVolatility, uint256 rebalanceEfficiency, uint256 impermanentLoss, uint256 lastUpdateTimestamp))",
  "function getUserPositionIndexes(address user, bytes32 poolId) external view returns (uint256[])",
  "function createPosition(tuple(address currency0, address currency1, uint24 fee, int24 tickSpacing, address hooks) key, int24 tickLower, int24 tickUpper, uint256 liquidityAmount) external returns (uint256)",
  "function removePosition(tuple(address currency0, address currency1, uint24 fee, int24 tickSpacing, address hooks) key, uint256 positionIndex) external returns (uint256)",
  "function collectFees(tuple(address currency0, address currency1, uint24 fee, int24 tickSpacing, address hooks) key, uint256 positionIndex) external returns (uint256)",
  "function manualRebalance(tuple(address currency0, address currency1, uint24 fee, int24 tickSpacing, address hooks) key) external returns (bool)",
  "function getPoolId(address token0, address token1, uint24 fee) external pure returns (bytes32)",
  "function setVolatilityForTesting(bytes32 poolId, uint256 volatility) external",
  "function setVolumeForTesting(bytes32 poolId, uint256 volume) external",
  "function setLiquidityDepthForTesting(bytes32 poolId, uint256 liquidityDepth) external",
  "function updateMarketConditionsForTesting(bytes32 poolId, int256 swapAmount) external",
]

