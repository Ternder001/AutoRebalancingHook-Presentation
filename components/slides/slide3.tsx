export default function Slide3() {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-gradient-to-br from-indigo-50 to-purple-50">
      <h2 className="text-3xl font-bold text-gray-700 mb-8">Key Features Overview</h2>

      <div className="grid grid-cols-3 gap-6 flex-1">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600"
            >
              <path d="M2 12h2M20 12h2M6 12a6 6 0 0 1 6-6M18 12a6 6 0 0 0-6-6"></path>
              <circle cx="12" cy="12" r="2"></circle>
              <path d="M6 12a6 6 0 0 0 6 6M18 12a6 6 0 0 1-6 6"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Real-time Market Monitoring</h3>
          <ul className="space-y-2 text-gray-700 flex-1">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Tracks price volatility</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Monitors trading volume</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Measures liquidity depth</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Uses exponential moving averages</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-indigo-600"
            >
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Automatic Liquidity Rebalancing</h3>
          <ul className="space-y-2 text-gray-700 flex-1">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Concentrates liquidity around current price</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Adjusts range width based on volatility</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>No manual intervention required</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Optimizes capital efficiency</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-600"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Dynamic Fee Adjustment</h3>
          <ul className="space-y-2 text-gray-700 flex-1">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Increases fees during high volatility</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Adjusts based on demand and liquidity</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Protects LPs from impermanent loss</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Maximizes returns in all market conditions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

