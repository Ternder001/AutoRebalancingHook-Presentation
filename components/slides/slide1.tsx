import { ArrowRightCircle } from "lucide-react"

export default function Slide1() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-6">Auto-Rebalancing Hook for Uniswap v4</h1>
        <p className="text-xl text-gray-700 mb-8">
          Smarter, more efficient liquidity pools that automatically adapt to market conditions
        </p>

        <div className="flex justify-center items-center gap-6 mt-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M12 2v20M2 12h20M12 18a6 6 0 0 0 0-12"></path>
              </svg>
            </div>
            <span className="text-sm font-medium">Uniswap v4</span>
          </div>

          <ArrowRightCircle className="text-primary" />

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
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
            <span className="text-sm font-medium">Auto-Rebalancing</span>
          </div>

          <ArrowRightCircle className="text-primary" />

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
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
            <span className="text-sm font-medium">Optimized Returns</span>
          </div>
        </div>
      </div>
    </div>
  )
}

