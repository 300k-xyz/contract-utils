import { Network } from './network';
import { eventsAbiMap } from './eventsHash';
import BN from 'bn.js';
import { addressEqual, getTokenFromAddress } from './tokenUtils';

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

export function topicToAddress(topicStr: string) {
  if (topicStr?.length === 66 && topicStr.match(/^0x000000000000000000000000/)) {
    return '0x' + topicStr.substring(26);
  }
  return topicStr;
}

export function hexToBN(hex: string) {
  const _hex = hex.match(/^0x/) ? hex.substring(2) : hex;

  return new BN(_hex, 'hex');
}

export function parseLog(network: Network, data: { topics: string[]; address: string; data: string }) {
  if (!data) {
    return null;
  }
  const eventName = eventsAbiMap[data.topics[0]] || 'UnknownAction';
  switch (eventName) {
    case 'Deposit(address,uint256)': {
      const fromAddress = topicToAddress(data.topics[1]);
      const amount = hexToBN(data.data).toString(10);
      const token: any = data.address && getTokenFromAddress(network, data.address);
      return {
        name: 'Deposit',
        msg: `Deposit ${amount} ${token?.symbol || data.address} from ${fromAddress}`,
        tokenAddress: data.address,
        fromAddress,
        amount,
      };
    }
    case 'Withdrawal(address,uint256)': {
      const fromAddress = topicToAddress(data.topics[1]);
      const amount = hexToBN(data.data).toString(10);
      const token: any = data.address && getTokenFromAddress(network, data.address);
      let amountDecimal: any = amount;
      return {
        name: 'Withdrawal',
        msg: `Withdraw ${amount} ${token?.symbol || data.address} to ${fromAddress}`,
        tokenAddress: data.address,
        fromAddress,
        amountDecimal,
        amount,
      };
    }

    case 'Transfer(address,address,uint256)': {
      if (!data.topics[2]) break;
      const fromAddress = topicToAddress(data.topics[1]);
      const toAddress = topicToAddress(data.topics[2]);
      const amount = hexToBN(data.data).toString(10);
      const token: any = data.address && getTokenFromAddress(network, data.address);
      const tokenName = token ? token.symbol : data.address;
      return {
        name: 'Transfer',
        msg: `Transfer ${amount} ${tokenName} ${fromAddress} -> ${toAddress}`,
        fromAddress,
        toAddress,
        tokenAddress: data.address,
        amount,
      };
    }

    default:
      return {
        msg: `${eventName} ${data?.topics[0]}`,
        name: eventName,
      };
  }
}

export function parseEvent(network: Network, event: GeneralEvent) {
  if (!event) return null;
  const { raw } = event;
  if (!raw || !raw.topics) {
    return null;
  }
  return parseLog(network, { topics: raw.topics, address: event.address, data: raw.data });
}

export function getSwapTxReceiptResult({
  network,
  walletAddress,
  tokenInAddress,
  tokenOutAddress,
  poolAddress,
  logs,
}: {
  logs: any[];
  network: Network;
  tokenInAddress: string;
  tokenOutAddress: string;
  walletAddress: string;
  poolAddress?: string; // if poolAddress present, force amount in sent to poolAddress
}) {
  let amountIn = new BN(0);
  let amountOut = new BN(0);
  let totalSwaps = 0;
  for (let log of logs) {
    const parsed = parseLog(network, log);
    if (!parsed) continue;
    if (parsed.name !== 'Transfer') continue;
    if (addressEqual(parsed.fromAddress, walletAddress) && addressEqual(parsed.tokenAddress, tokenInAddress)) {
      if (!poolAddress) {
        amountIn = amountIn.add(new BN(parsed.amount!));
        totalSwaps++;
      } else if (addressEqual(poolAddress, parsed.toAddress)) {
        amountIn = amountIn.add(new BN(parsed.amount!));
        totalSwaps++;
      }
    }
    if (addressEqual(parsed.toAddress, walletAddress) && addressEqual(parsed.tokenAddress, tokenOutAddress)) {
      if (!poolAddress) {
        amountOut = amountOut.add(new BN(parsed.amount!));
        totalSwaps++;
      } else if (addressEqual(poolAddress, parsed.fromAddress)) {
        amountOut = amountOut.add(new BN(parsed.amount!));
        totalSwaps++;
      }
    }
  }
  return { amountIn: amountIn.toString(), amountOut: amountOut.toString(), totalSwaps };
}
