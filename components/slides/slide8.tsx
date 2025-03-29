export default function Slide8() {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-gradient-to-br from-indigo-50 to-blue-50">
      <h2 className="text-3xl font-bold text-gray-700 mb-8">Future Improvements</h2>

      <div className="grid grid-cols-2 gap-8 flex-1">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-indigo-600"
                >
                  <path d="M12 2a4 4 0 0 0-4 4v16a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"></path>
                  <path d="M18 6a4 4 0 0 0-4 4v10a4 4 0 0 0 8 0V10a4 4 0 0 0-4-4z"></path>
                  <path d="M6 6a4 4 0 0 1 4 4v10a4 4 0 0 1-8 0V10a4 4 0 0 1 4-4z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">ML-based Prediction</h3>
                <p className="text-gray-600">
                  Incorporating machine learning to predict optimal ranges based on historical data and market patterns.
                  This could significantly improve the accuracy of range adjustments and reduce impermanent loss.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Multi-pool Strategies</h3>
                <p className="text-gray-600">
                  Coordinating liquidity across multiple pools to optimize returns and diversify risk. This could
                  involve cross-pool rebalancing and dynamic allocation based on relative performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mr-4 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-600"
                >
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M12 2v2"></path>
                  <path d="M12 22v-2"></path>
                  <path d="m17 20.66-1-1.73"></path>
                  <path d="M11 10.27 7 3.34"></path>
                  <path d="m20.66 17-1.73-1"></path>
                  <path d="m3.34 7 1.73 1"></path>
                  <path d="M14 12h8"></path>
                  <path d="M2 12h2"></path>
                  <path d="m20.66 7-1.73 1"></path>
                  <path d="m3.34 17 1.73-1"></path>
                  <path d="m17 3.34-1 1.73"></path>
                  <path d="m7 20.66 1-1.73"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Customizable Parameters</h3>
                <p className="text-gray-600">
                  Allowing LPs to set their risk preferences and customize rebalancing parameters. This could include
                  options for range width, fee sensitivity, and rebalancing frequency based on individual risk
                  tolerance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="m9 14 6-6"></path>
                  <path d="M9 8h6v6"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Gas Optimization</h3>
                <p className="text-gray-600">
                  Further reducing rebalancing costs through batched operations and optimized storage. This could
                  involve implementing more efficient data structures and algorithms to minimize gas usage during
                  rebalancing operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

