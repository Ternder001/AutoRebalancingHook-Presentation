export default function Slide7() {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-gradient-to-br from-gray-50 to-slate-50">
      <h2 className="text-3xl font-bold text-gray-700 mb-8">Technical Architecture</h2>

      <div className="flex-1 flex flex-col">
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Core Hook Contract</h3>
            <p className="text-gray-600 mb-4">Implements the rebalancing and fee adjustment logic</p>
            <ul className="text-m space-y-1 text-gray-700 ">
              <li>• Market monitoring</li>
              <li>• Range calculation</li>
              <li>• Fee adjustment</li>
              <li>• Rebalancing triggers</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Position Management</h3>
            <p className="text-gray-600 mb-4">Handles LP positions and fee collection</p>
            <ul className="text-m space-y-1 text-gray-700">
              <li>• Position creation</li>
              <li>• Fee collection</li>
              <li>• Position removal</li>
              <li>• Position rebalancing</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Analytics Module</h3>
            <p className="text-gray-600 mb-4">Tracks and reports pool performance metrics</p>
            <ul className="text-m space-y-1 text-gray-700">
              <li>• Volume tracking</li>
              <li>• Fee revenue</li>
              <li>• Volatility metrics</li>
              <li>• Impermanent loss estimation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

