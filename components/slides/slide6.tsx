export default function Slide6() {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-700 mb-8">Benefits for Different Stakeholders</h2>

      <div className="grid grid-cols-3 gap-8 flex-1">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
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
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-4 text-blue-800">For Liquidity Providers</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-blue-700">Higher capital efficiency</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-blue-700">Reduced impermanent loss risk</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-blue-700">Automated position management</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-blue-700">Optimized fee earnings</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-blue-700">No need for constant monitoring</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
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
              className="text-green-600"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-4 text-green-800">For Traders</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span className="text-green-700">More predictable slippage</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span className="text-green-700">Better price stability during normal conditions</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span className="text-green-700">Fair fee structure based on market conditions</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span className="text-green-700">Deeper liquidity around current price</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span className="text-green-700">Lower fees during stable market conditions</span>
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
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
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-center mb-4 text-purple-800">For Protocol Developers</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span className="text-purple-700">Showcase of Uniswap v4's hook capabilities</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span className="text-purple-700">Template for building advanced DeFi primitives</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span className="text-purple-700">Increased protocol usage and volume</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span className="text-purple-700">Better user experience for protocol users</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span className="text-purple-700">Extensible architecture for further innovation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

