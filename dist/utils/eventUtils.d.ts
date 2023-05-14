import { Network } from './network';
import BN from 'bn.js';
export interface GeneralEvent {
    blockNumber: number;
    transactionHash: string;
    transactionIndex: number;
    blockHash: string;
    logIndex: number;
    removed: boolean;
    id: string;
    signature: string | null;
    event?: string;
    address: string;
    raw: {
        address?: string;
        data: string;
        topics: string[];
    };
    returnValues?: Record<string, any>;
}
export declare function topicToAddress(topicStr: string): string;
export declare function hexToBN(hex: string): BN;
export declare function parseLog(network: Network, data: {
    topics: string[];
    address: string;
    data: string;
}): {
    name: string;
    msg: string;
    tokenAddress: string;
    fromAddress: string;
    amount: string;
    amountDecimal?: undefined;
    toAddress?: undefined;
} | {
    name: string;
    msg: string;
    tokenAddress: string;
    fromAddress: string;
    amountDecimal: any;
    amount: string;
    toAddress?: undefined;
} | {
    name: string;
    msg: string;
    fromAddress: string;
    toAddress: string;
    tokenAddress: string;
    amount: string;
    amountDecimal?: undefined;
} | {
    msg: string;
    name: string;
    tokenAddress?: undefined;
    fromAddress?: undefined;
    amount?: undefined;
    amountDecimal?: undefined;
    toAddress?: undefined;
} | null | undefined;
export declare function parseEvent(network: Network, event: GeneralEvent): {
    name: string;
    msg: string;
    tokenAddress: string;
    fromAddress: string;
    amount: string;
    amountDecimal?: undefined;
    toAddress?: undefined;
} | {
    name: string;
    msg: string;
    tokenAddress: string;
    fromAddress: string;
    amountDecimal: any;
    amount: string;
    toAddress?: undefined;
} | {
    name: string;
    msg: string;
    fromAddress: string;
    toAddress: string;
    tokenAddress: string;
    amount: string;
    amountDecimal?: undefined;
} | {
    msg: string;
    name: string;
    tokenAddress?: undefined;
    fromAddress?: undefined;
    amount?: undefined;
    amountDecimal?: undefined;
    toAddress?: undefined;
} | null | undefined;
export declare function getSwapTxReceiptResult({ network, walletAddress, tokenInAddress, tokenOutAddress, logs, }: {
    logs: any[];
    network: Network;
    tokenInAddress: string;
    tokenOutAddress: string;
    walletAddress: string;
}): {
    amountIn: string;
    amountOut: string;
};
