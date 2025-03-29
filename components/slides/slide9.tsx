export default function Slide9() {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <h2 className="text-3xl font-bold text-gray-700 mb-8">Conclusion</h2>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="max-w-3xl text-center">
          <p className="text-xl text-gray-700 mb-8">
            The Auto-Rebalancing Hook demonstrates how Uniswap v4's hook system enables a new generation of DeFi
            primitives. By automating liquidity management and fee adjustment, we're making DeFi more efficient and
            accessible for everyone.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
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
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Automated</h3>
              <p className="text-m text-gray-600">No manual intervention required</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="font-semibold">Adaptive</h3>
              <p className="text-m text-gray-600">Responds to market conditions</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3">
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
              <h3 className="font-semibold">Optimized</h3>
              <p className="text-m text-gray-600">Maximizes capital efficiency</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm inline-block">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">Thank You!</h3>
            <p className="text-gray-600">
              Questions? Reach out to us at <span className="text-gray-900 font-bold">dexcrawlers@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

