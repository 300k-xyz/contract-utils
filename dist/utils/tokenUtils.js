"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressEqual = exports.getTokenName = exports.getTokenFromAddress = void 0;
const tokenConfig_1 = require("./tokenConfig");
const addressToToken = (() => {
    let ret = {};
    for (let network in tokenConfig_1.tokenConfig) {
        ret[network] = ret[network] || {};
        for (let symbol in tokenConfig_1.tokenConfig[network]) {
            const address = tokenConfig_1.tokenConfig[network][symbol].address.toLowerCase();
            ret[network][address] = tokenConfig_1.tokenConfig[network][symbol];
        }
    }
    return ret;
})();
function getTokenFromAddress(network, address) {
    return addressToToken[network][address.toLowerCase()];
}
exports.getTokenFromAddress = getTokenFromAddress;
function getTokenName(network, address) {
    var _a;
    return ((_a = getTokenFromAddress(network, address)) === null || _a === void 0 ? void 0 : _a.symbol) || address;
}
exports.getTokenName = getTokenName;
function addressEqual(addressA, addressB) {
    if (!addressA || !addressB)
        return false;
    return addressA.toLowerCase() == addressB.toLowerCase();
}
exports.addressEqual = addressEqual;
