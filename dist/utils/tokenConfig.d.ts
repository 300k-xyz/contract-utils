import { Network } from './network';
export declare abstract class BaseCurrency {
    /**
     * The chain ID on which this currency resides
     */
    readonly chainId: number;
    /**
     * The decimals used in representing currency amounts
     */
    readonly decimals: number;
    /**
     * The symbol of the currency, i.e. a short textual non-unique identifier
     */
    readonly symbol?: string;
    /**
     * The name of the currency, i.e. a descriptive textual non-unique identifier
     */
    readonly name?: string;
    /**
     * Constructs an instance of the base class `BaseCurrency`.
     * @param chainId the chain ID on which this currency resides
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(chainId: number, decimals: number, symbol?: string, name?: string);
}
export declare class Token extends BaseCurrency {
    /**
     * The contract address on the chain on which this token lives
     */
    readonly address: string;
    /**
     *
     * @param chainId {@link BaseCurrency#chainId}
     * @param address The contract address on the chain on which this token lives
     * @param decimals {@link BaseCurrency#decimals}
     * @param symbol {@link BaseCurrency#symbol}
     * @param name {@link BaseCurrency#name}
     * @param bypassChecksum If true it only checks for length === 42, startsWith 0x and contains only hex characters
     */
    constructor(chainId: number, address: string, decimals: number, symbol?: string, name?: string);
}
export type TokenConfigMap = Record<string, Token>;
export declare function getAllTokenConfigs(network: Network): TokenConfigMap;
export declare function getTokenInfo(network: Network, symbol: string): Token;
export declare const tokenConfig: Record<Network, TokenConfigMap>;
