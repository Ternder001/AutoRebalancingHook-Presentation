export const PoolManagerABI = [
  // Add the Pool Manager ABI here
  // These are just the essential functions for the demo
  "function initialize(tuple(address currency0, address currency1, uint24 fee, int24 tickSpacing, address hooks) key, uint160 sqrtPriceX96) external returns (int24 tick)",
  "function swap(tuple(address currency0, address currency1, uint24 fee, int24 tickSpacing, address hooks) key, tuple(bool zeroForOne, int256 amountSpecified, uint160 sqrtPriceLimitX96) params, bytes data) external returns (tuple(int128 amount0, int128 amount1) delta)",
]

