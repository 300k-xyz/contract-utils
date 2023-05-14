export enum Network {
  'ethereum' = 'ethereum',
  'arbitrum' = 'arbitrum',
  'polygon' = 'polygon',
  'bsc' = 'bsc',
  'celo' = 'celo',
  'optimism' = 'optimism',
  'avalanche' = 'avalanche',
}

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  OPTIMISM = 10,
  OPTIMISTIC_KOVAN = 69,
  BSC = 56,
  ARBITRUM_ONE = 42161,
  ARBITRUM_RINKEBY = 421611,
  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
  CELO = 42220,
  CELO_ALFAJORES = 44787,
  GNOSIS = 100,
  MOONBEAM = 1284,
  AVALANCHE = 43114,
}

export function getChainIdFromNetwork(network: Network) {
  switch (network) {
    case Network.ethereum:
      return ChainId.MAINNET;
    case Network.arbitrum:
      return ChainId.ARBITRUM_ONE;
    case Network.polygon:
      return ChainId.POLYGON;
    case Network.bsc:
      return ChainId.BSC;
    case Network.celo:
      return ChainId.CELO;
    case Network.optimism:
      return ChainId.OPTIMISM;
    case Network.avalanche:
      return ChainId.AVALANCHE;
  }
  throw new Error(`getChainIdFromNetwork unsupported network ${network}`);
}

export function getNetworkFromChainId(chainId: ChainId): Network {
  switch (chainId) {
    case ChainId.MAINNET:
      return Network.ethereum;
    case ChainId.ARBITRUM_ONE:
      return Network.arbitrum;
    case ChainId.POLYGON:
      return Network.polygon;
    case ChainId.BSC:
      return Network.bsc;
    case ChainId.CELO:
      return Network.celo;
    case ChainId.OPTIMISM:
      return Network.optimism;
    case ChainId.AVALANCHE:
      return Network.avalanche;
  }
  throw new Error(`unsupported chainId ${chainId}`);
}
