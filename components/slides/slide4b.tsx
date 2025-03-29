export default function Slide4b() {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-700 mb-2">Technical Implementation</h2>
      <h3 className="text-xl font-medium text-gray-600 mb-6">Liquidity Rebalancing</h3>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">The rebalancing mechanism works by:</p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-indigo-600 font-medium">1</span>
              </div>
              <div className="text-gray-900">
                <span className="font-bold">Determining optimal range width</span> based on current volatility and
                liquidity depth
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-indigo-600 font-medium">2</span>
              </div>
              <div className="text-gray-900">
                <span className="font-bold">Calculating new tick ranges</span> centered around the current price
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-indigo-600 font-medium">3</span>
              </div>
              <div className="text-gray-900">
                <span className="font-bold">Moving liquidity</span> from old ranges to new ranges when conditions
                change significantly
              </div>
            </li>
          </ul>

          <div className="bg-indigo-50 p-4 rounded-lg mt-4">
            <h4 className="font-medium text-indigo-700 mb-2">Range Width Calculation</h4>
            <p className="text-indigo-600 text-sm">
              Higher volatility → Wider range
              <br />
              Lower liquidity → Wider range
              <br />
              Stable conditions → Narrower range
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg overflow-auto h-[320px]">
          <pre className="text-xs">
            <code className="language-solidity text-gray-900">
              {`function calculateRangeWidth(
    uint256 volatility,
    uint256 liquidityDepth
) internal pure returns (int24) {
    // Higher volatility or lower liquidity depth => wider range
    if (volatility > 1000 || liquidityDepth < 1e18) {
        return MAX_RANGE_WIDTH; // Wide range for high volatility or low liquidity
    }
    
    if (volatility > 500) {
        return 30; // Medium range for medium volatility
    }
    
    if (volatility > 200) {
        return 20; // Narrower range for lower volatility
    }
    
    return MIN_RANGE_WIDTH; // Narrow range for low volatility
}

// In rebalanceLiquidity function:
int24 halfRangeWidth = state.optimalRangeWidth / 2;
       
// Ensure the range is aligned with tick spacing
int24 newTickLower = getLowerUsableTick(currentTick - halfRangeWidth, tickSpacing);
int24 newTickUpper = getLowerUsableTick(currentTick + halfRangeWidth, tickSpacing) + tickSpacing;`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

