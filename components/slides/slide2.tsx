export default function Slide2() {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-700 mb-8">The Problem</h2>

      <div className="grid grid-cols-2 gap-8 flex-1">
        <div className="flex flex-col">
          <div className="flex-1 space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Capital Inefficiency</h3>
              <p className="text-red-700">
                In traditional AMMs, liquidity is spread across the entire price range, making most of it unused.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Impermanent Loss Risk</h3>
              <p className="text-orange-700">During high volatility, LPs can suffer significant impermanent loss.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex-1 space-y-6">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Manual Management</h3>
              <p className="text-yellow-700">
                LPs need to constantly monitor market conditions and manually adjust their positions.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Fixed Fee Structure</h3>
              <p className="text-amber-700">
                Standard pools can't adapt fees to market conditions, leading to suboptimal returns during different
                market phases.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg font-medium text-gray-900">
          Our Auto-Rebalancing Hook solves these problems by creating self-optimizing liquidity pools.
        </p>
      </div>
    </div>
  )
}

