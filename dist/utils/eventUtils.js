"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSwapTxReceiptResult = exports.parseEvent = exports.parseLog = exports.hexToBN = exports.topicToAddress = void 0;
const eventsHash_1 = require("./eventsHash");
const bn_js_1 = __importDefault(require("bn.js"));
const tokenUtils_1 = require("./tokenUtils");
function topicToAddress(topicStr) {
    if ((topicStr === null || topicStr === void 0 ? void 0 : topicStr.length) === 66 && topicStr.match(/^0x000000000000000000000000/)) {
        return '0x' + topicStr.substring(26);
    }
    return topicStr;
}
exports.topicToAddress = topicToAddress;
function hexToBN(hex) {
    const _hex = hex.match(/^0x/) ? hex.substring(2) : hex;
    return new bn_js_1.default(_hex, 'hex');
}
exports.hexToBN = hexToBN;
function parseLog(network, data) {
    if (!data) {
        return null;
    }
    const eventName = eventsHash_1.eventsAbiMap[data.topics[0]] || 'UnknownAction';
    switch (eventName) {
        case 'Deposit(address,uint256)': {
            const fromAddress = topicToAddress(data.topics[1]);
            const amount = hexToBN(data.data).toString(10);
            const token = data.address && (0, tokenUtils_1.getTokenFromAddress)(network, data.address);
            return {
                name: 'Deposit',
                msg: `Deposit ${amount} ${(token === null || token === void 0 ? void 0 : token.symbol) || data.address} from ${fromAddress}`,
                tokenAddress: data.address,
                fromAddress,
                amount,
            };
        }
        case 'Withdrawal(address,uint256)': {
            const fromAddress = topicToAddress(data.topics[1]);
            const amount = hexToBN(data.data).toString(10);
            const token = data.address && (0, tokenUtils_1.getTokenFromAddress)(network, data.address);
            let amountDecimal = amount;
            return {
                name: 'Withdrawal',
                msg: `Withdraw ${amount} ${(token === null || token === void 0 ? void 0 : token.symbol) || data.address} to ${fromAddress}`,
                tokenAddress: data.address,
                fromAddress,
                amountDecimal,
                amount,
            };
        }
        case 'Transfer(address,address,uint256)': {
            if (!data.topics[2])
                break;
            const fromAddress = topicToAddress(data.topics[1]);
            const toAddress = topicToAddress(data.topics[2]);
            const amount = hexToBN(data.data).toString(10);
            const token = data.address && (0, tokenUtils_1.getTokenFromAddress)(network, data.address);
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
                msg: `${eventName} ${data === null || data === void 0 ? void 0 : data.topics[0]}`,
                name: eventName,
            };
    }
}
exports.parseLog = parseLog;
function parseEvent(network, event) {
    if (!event)
        return null;
    const { raw } = event;
    if (!raw || !raw.topics) {
        return null;
    }
    return parseLog(network, { topics: raw.topics, address: event.address, data: raw.data });
}
exports.parseEvent = parseEvent;
function getSwapTxReceiptResult({ network, walletAddress, tokenInAddress, tokenOutAddress, poolAddress, logs, }) {
    let amountIn = new bn_js_1.default(0);
    let amountOut = new bn_js_1.default(0);
    let totalSwaps = 0;
    for (let log of logs) {
        const parsed = parseLog(network, log);
        if (!parsed)
            continue;
        if (parsed.name !== 'Transfer')
            continue;
        if ((0, tokenUtils_1.addressEqual)(parsed.fromAddress, walletAddress) && (0, tokenUtils_1.addressEqual)(parsed.tokenAddress, tokenInAddress)) {
            if (!poolAddress) {
                amountIn = amountIn.add(new bn_js_1.default(parsed.amount));
                totalSwaps++;
            }
            else if ((0, tokenUtils_1.addressEqual)(poolAddress, parsed.toAddress)) {
                amountIn = amountIn.add(new bn_js_1.default(parsed.amount));
                totalSwaps++;
            }
        }
        if ((0, tokenUtils_1.addressEqual)(parsed.toAddress, walletAddress) && (0, tokenUtils_1.addressEqual)(parsed.tokenAddress, tokenOutAddress)) {
            if (!poolAddress) {
                amountOut = amountOut.add(new bn_js_1.default(parsed.amount));
                totalSwaps++;
            }
            else if ((0, tokenUtils_1.addressEqual)(poolAddress, parsed.fromAddress)) {
                amountOut = amountOut.add(new bn_js_1.default(parsed.amount));
                totalSwaps++;
            }
        }
    }
    return { amountIn: amountIn.toString(), amountOut: amountOut.toString(), totalSwaps };
}
exports.getSwapTxReceiptResult = getSwapTxReceiptResult;
