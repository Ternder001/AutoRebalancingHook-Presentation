export default function Slide4a() {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-700 mb-2">Technical Implementation</h2>
      <h3 className="text-xl font-medium text-gray-600 mb-6">Market Monitoring</h3>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">The hook monitors market conditions through several key metrics:</p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-blue-600 font-medium">1</span>
              </div>
              <div className="text-gray-900">
                <span className="font-bold ">Price Volatility:</span> Using an exponential moving average (EMA) to
                track price changes over time, giving more weight to recent movements.
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-blue-600 font-medium">2</span>
              </div>
              <div className="text-gray-900">
                <span className="font-bold">Trading Volume:</span> Tracking cumulative trading volume over a rolling
                window to identify periods of high activity.
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2 mt-0.5">
                <span className="text-blue-600 font-medium">3</span>
              </div>
              <div className="text-gray-900">
                <span className="font-bold">Liquidity Depth:</span> Monitoring the total liquidity in the pool to
                determine how concentrated or dispersed liquidity should be.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg overflow-auto h-[320px]">
          <pre className="text-xs">
            <code className="language-solidity text-gray-900">
              {`function updateMarketConditions(PoolId poolId, int256 swapAmount) internal {
    PoolState storage state = poolStates[poolId];
    (, int24 currentTick, , ) = _getSlot0(poolId);

    // Update trading volume
    if (block.timestamp - state.lastVolumeUpdate >= VOLUME_WINDOW) {
        state.tradingVolume = 0; // Reset volume after the window
        state.lastVolumeUpdate = block.timestamp;
    }
    
    // Add absolute swap amount to trading volume
    if (swapAmount != 0) {
        uint256 absAmount;
        if (swapAmount > 0) {
            absAmount = uint256(swapAmount);
        } else {
            absAmount = uint256(-swapAmount);
        }
        state.tradingVolume += absAmount;
        
        // Update pool analytics total volume
        poolAnalytics[poolId].totalVolume += absAmount;
    }

    // Update price volatility using EMA
    int24 tickChange = currentTick - state.lastTick;
    uint256 absoluteChange;
    if (tickChange > 0) {
        absoluteChange = uint256(int256(tickChange));
    } else {
        absoluteChange = uint256(int256(-tickChange));
    }
    
    // Initialize EMA if it's zero
    if (state.priceVolatilityEMA == 0) {
        state.priceVolatilityEMA = absoluteChange;
    } else {
        state.priceVolatilityEMA = calculateEMA(
            state.priceVolatilityEMA,
            absoluteChange,
            EMA_ALPHA
        );
    }
    
    // Update last tick
    state.lastTick = currentTick;
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

