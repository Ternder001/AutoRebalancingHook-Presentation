export const AutoRebalancingHookABI = [
    {
      inputs: [
        {
          internalType: "address",
          name: "token0",
          type: "address",
        },
        {
          internalType: "address",
          name: "token1",
          type: "address",
        },
        {
          internalType: "uint24",
          name: "fee",
          type: "uint24",
        },
      ],
      name: "getPoolId",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "poolId",
          type: "bytes32",
        },
      ],
      name: "getPoolState",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "tvl",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "volume",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "rebalanceCount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "lastRebalance",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "feeSavings",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "efficiency",
              type: "uint256",
            },
          ],
          internalType: "struct AutoRebalancingHook.PoolState",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "poolId",
          type: "bytes32",
        },
      ],
      name: "getLPPositions",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "token0Amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "token1Amount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "lowerTick",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "upperTick",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "inRange",
              type: "bool",
            },
          ],
          internalType: "struct AutoRebalancingHook.Position[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ]
  
  