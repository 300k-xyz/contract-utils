import { Network } from './network';
import { Token } from './tokenConfig';
export declare function getTokenFromAddress(network: Network, address: string): Token | undefined;
export declare function getTokenName(network: Network, address: string): string;
export declare function addressEqual(addressA: string | undefined | null, addressB: string | undefined | null): boolean;
