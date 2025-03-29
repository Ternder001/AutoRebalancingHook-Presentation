export default function Slide7b() {
    return (
      <div className="h-full w-full flex flex-col p-8 bg-gradient-to-br from-gray-50 to-slate-50 overflow-auto">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Uniswap v4 Integration Architecture</h2>
  
        <div className="flex-1 flex flex-col">
        <div className="bg-white p-6 rounded-lg shadow-sm flex-1">

          <div className="flex flex-col items-center">
            <div className="w-full max-w-3xl">
              <svg viewBox="0 0 800 300" className="w-full">
                {/* Uniswap v4 Core */}
                <rect x="300" y="20" width="200" height="60" rx="4" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                <text x="400" y="55" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#334155">
                  Uniswap v4 Pool Manager
                </text>

                {/* Hook */}
                <rect x="300" y="130" width="200" height="60" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                <text x="400" y="165" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e40af">
                  Auto-Rebalancing Hook
                </text>

                {/* Positions */}
                <rect x="100" y="220" width="150" height="50" rx="4" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
                <text x="175" y="250" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#166534">
                  LP Positions
                </text>

                {/* Market Monitoring */}
                <rect x="325" y="220" width="150" height="50" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                <text x="400" y="250" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#92400e">
                  Market Monitoring
                </text>

                {/* Fee Adjustment */}
                <rect x="550" y="220" width="150" height="50" rx="4" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
                <text x="625" y="250" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#5b21b6">
                  Fee Adjustment
                </text>

                {/* Connecting lines */}
                <line x1="400" y1="80" x2="400" y2="130" stroke="#64748b" strokeWidth="2" />
                <line x1="400" y1="190" x2="400" y2="220" stroke="#64748b" strokeWidth="2" />
                <line x1="400" y1="190" x2="175" y2="220" stroke="#64748b" strokeWidth="2" />
                <line x1="400" y1="190" x2="625" y2="220" stroke="#64748b" strokeWidth="2" />

                {/* Arrows */}
                <polygon points="400,125 395,115 405,115" fill="#64748b" />
                <polygon points="400,215 395,205 405,205" fill="#64748b" />
                <polygon points="180,215 175,205 185,205" fill="#64748b" />
                <polygon points="620,215 615,205 625,205" fill="#64748b" />
              </svg>
            </div>

            <div className="mt-6 text-lg text-gray-600 max-w-3xl">
              <p>
                The hook integrates with Uniswap v4 through the hook interface, leveraging key callbacks like{" "}
                <code>afterSwap</code>, <code>beforeSwap</code>, and liquidity modification hooks. This architecture
                allows for seamless integration with the Uniswap v4 ecosystem while providing enhanced functionality for
                liquidity providers and traders.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
  
  