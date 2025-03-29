export default function Slide4c() {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-700 mb-2">Technical Implementation</h2>
      <h3 className="text-xl font-medium text-gray-600 mb-6">Dynamic Fee Adjustment</h3>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">Our dynamic fee system adjusts based on multiple factors:</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-900">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="font-bold">High volatility:</span>
              <span className="ml-2">Fees increase to protect LPs from impermanent loss</span>
            </div>
            <div className="flex items-center text-gray-900">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="font-bold">High volume + low liquidity:</span>
              <span className="ml-2">Fees increase due to increased demand and risk</span>
            </div>
            <div className="flex items-center text-gray-900">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="font-bold">High volume:</span>
              <span className="ml-2">Slightly higher fees to capture more revenue</span>
            </div>
            <div className="flex items-center text-gray-900">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="font-bold">Normal conditions:</span>
              <span className="ml-2">Base fee of 0.3%</span>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-medium text-purple-700 mb-2">Fee Range</h4>
            <div className="flex items-center justify-between">
              <span className="text-purple-600">Min: 0.05%</span>
              <span className="text-purple-600">Base: 0.3%</span>
              <span className="text-purple-600">Max: 1%</span>
            </div>
            <div className="w-full bg-purple-200 h-2 rounded-full mt-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: "30%" }}></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg overflow-auto h-[320px]">
          <pre className="text-xs">
            <code className="language-solidity text-gray-900">
              {`function getDynamicFee(PoolKey calldata key) public view returns (uint24) {
    PoolId poolId = key.toId();
    PoolState storage state = poolStates[poolId];
    uint256 volatility = state.priceVolatilityEMA;
    uint256 volume = state.tradingVolume;
    uint256 liquidityDepth = state.liquidityDepth;
    uint256 priceImpact = state.averagePriceImpact;

    // Adjust fees based on multiple factors

    // High volatility -> higher fees to protect LPs from impermanent loss
    if (volatility > 1000) {
        return MAX_FEE; // 1%
    }

    // High volume + low liquidity -> higher fees due to increased demand and risk
    if (volume > 1000 ether && liquidityDepth < 10 ether) {
        return BASE_FEE + 2000; // +0.2%
    }

    // High volume -> slightly higher fees to capture more revenue
    if (volume > 1000 ether) {
        return BASE_FEE + 1000; // +0.1%
    }

    // High price impact -> higher fees to compensate for slippage
    if (priceImpact > PRICE_IMPACT_THRESHOLD) {
        return BASE_FEE + 1500; // +0.15%
    }

    // Low liquidity -> higher fees due to increased risk
    if (liquidityDepth < 200 ether) {
        return BASE_FEE + 500; // +0.05%
    }

    // Default fee
    return BASE_FEE; // 0.3%
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

