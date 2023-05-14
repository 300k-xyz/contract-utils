import { Network } from './network';
import { TokenConfigMap, tokenConfig, Token } from './tokenConfig';

const addressToToken: Record<Network, TokenConfigMap> = (() => {
  let ret: any = {};
  for (let network in tokenConfig) {
    (ret as any)[network] = (ret as any)[network] || {};
    for (let symbol in (tokenConfig as any)[network]) {
      const address = (tokenConfig as any)[network][symbol].address.toLowerCase();
      (ret as any)[network][address] = (tokenConfig as any)[network][symbol];
    }
  }
  return ret;
})();

export function getTokenFromAddress(network: Network, address: string): Token | undefined {
  return addressToToken[network][address.toLowerCase()];
}
export function getTokenName(network: Network, address: string) {
  return getTokenFromAddress(network, address)?.symbol || address;
}

export function addressEqual(addressA: string | undefined | null, addressB: string | undefined | null) {
  if (!addressA || !addressB) return false;
  return addressA.toLowerCase() == addressB.toLowerCase();
}
