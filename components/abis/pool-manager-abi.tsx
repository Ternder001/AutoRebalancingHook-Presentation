export const PoolManagerABI = [
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "poolId",
          type: "bytes32",
        },
      ],
      name: "getPool",
      outputs: [
        {
          components: [
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
            {
              internalType: "int24",
              name: "tickSpacing",
              type: "int24",
            },
            {
              internalType: "uint160",
              name: "sqrtPriceX96",
              type: "uint160",
            },
            {
              internalType: "uint128",
              name: "liquidity",
              type: "uint128",
            },
            {
              internalType: "int24",
              name: "tick",
              type: "int24",
            },
          ],
          internalType: "struct IPoolManager.Pool",
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
        {
          internalType: "bool",
          name: "zeroForOne",
          type: "bool",
        },
        {
          internalType: "int256",
          name: "amountSpecified",
          type: "int256",
        },
        {
          internalType: "uint160",
          name: "sqrtPriceLimitX96",
          type: "uint160",
        },
      ],
      name: "swap",
      outputs: [
        {
          internalType: "int256",
          name: "amount0",
          type: "int256",
        },
        {
          internalType: "int256",
          name: "amount1",
          type: "int256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ]
  
  