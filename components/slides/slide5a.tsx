export default function Slide5a() {
  return (
    <div className="h-full w-full flex flex-col p-5 bg-gradient-to-br from-blue-50 to-cyan-50">
      <h2 className="text-3xl font-bold text-gray-700 ">Demo Walkthrough</h2>
      <h3 className="text-xl font-medium text-gray-600 mb-4">Scenario 1: Normal Market Conditions</h3>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Market Parameters</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Volatility:</span>
                <div className="w-32 bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                </div>
                <span className="text-gray-600 font-medium">Low (150)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Trading Volume:</span>
                <div className="w-32 bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                </div>
                <span className="text-gray-600 font-medium">Moderate (500 ETH)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Liquidity Depth:</span>
                <div className="w-32 bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
                <span className="text-gray-600 font-medium">High (800 ETH)</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-lg mb-4 text-gray-900">Hook Response</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M5 12h14M12 5v14"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800">Narrow Price Range</h5>
                  <p className="text-sm text-gray-600">Range Width: 10 ticks</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800">Base Fee</h5>
                  <p className="text-sm text-gray-600">Fee: 0.3%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="font-semibold text-lg mb-4 text-gray-700">Visualization</h4>
          <div className="h-64 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
            <div className="w-full h-full relative">
              {/* Price chart with narrow range */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-40 relative">
                  {/* Price line */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300"></div>

                  {/* Current price */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full"></div>

                  {/* Liquidity range - narrow */}
                  <div className="absolute top-1/2 left-1/3 right-1/3 h-20 -mt-10 bg-green-200 opacity-50 rounded-lg border border-green-300"></div>

                  {/* Labels */}
                  <div className="absolute bottom-full left-1/3 text-xs text-gray-600 mb-1">-5 ticks</div>
                  <div className="absolute bottom-full right-1/3 text-xs text-gray-600 mb-1">+5 ticks</div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 text-xs text-gray-600 mt-1">
                    Current Price
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="font-bold mb-2 text-gray-800">Key Benefits</h5>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-900">Maximum capital efficiency in stable conditions</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-900">Lower gas costs due to less frequent rebalancing</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-900">Competitive fees for traders</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

