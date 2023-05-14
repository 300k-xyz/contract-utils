"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenConfig = exports.getTokenInfo = exports.getAllTokenConfigs = exports.Token = exports.BaseCurrency = void 0;
const network_1 = require("./network");
class BaseCurrency {
    /**
     * Constructs an instance of the base class `BaseCurrency`.
     * @param chainId the chain ID on which this currency resides
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    constructor(chainId, decimals, symbol, name) {
        this.chainId = chainId;
        this.decimals = decimals;
        this.symbol = symbol;
        this.name = name;
    }
}
exports.BaseCurrency = BaseCurrency;
class Token extends BaseCurrency {
    /**
     *
     * @param chainId {@link BaseCurrency#chainId}
     * @param address The contract address on the chain on which this token lives
     * @param decimals {@link BaseCurrency#decimals}
     * @param symbol {@link BaseCurrency#symbol}
     * @param name {@link BaseCurrency#name}
     * @param bypassChecksum If true it only checks for length === 42, startsWith 0x and contains only hex characters
     */
    constructor(chainId, address, decimals, symbol, name) {
        super(chainId, decimals, symbol, name);
        this.address = address;
    }
}
exports.Token = Token;
function getAllTokenConfigs(network) {
    return exports.tokenConfig[network];
}
exports.getAllTokenConfigs = getAllTokenConfigs;
function getTokenInfo(network, symbol) {
    return exports.tokenConfig[network][symbol];
}
exports.getTokenInfo = getTokenInfo;
exports.tokenConfig = {
    ethereum: {
        USDC: new Token(network_1.ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USDC'),
        USDT: new Token(network_1.ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'USDT'),
        DAI: new Token(network_1.ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin'),
        WBTC: new Token(network_1.ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'WBTC'),
        WETH: new Token(network_1.ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'WETH'),
        LIT: new Token(network_1.ChainId.MAINNET, '0xb59490ab09a0f526cc7305822ac65f2ab12f9723', 18, 'LIT', 'LIT'),
        SYN: new Token(network_1.ChainId.MAINNET, '0x0f2d719407fdbeff09d87557abb7232601fd9f29', 18, 'SYN', 'SYN'),
        BOB: new Token(network_1.ChainId.MAINNET, '0xB0B195aEFA3650A6908f15CdaC7D92F8a5791B0B', 18, 'BOB', 'BOB'),
        PEPE: new Token(network_1.ChainId.MAINNET, '0x6982508145454ce325ddbe47a25d4ec3d2311933', 18, 'PEPE', 'PEPE'),
    },
    arbitrum: {
        USDC: new Token(network_1.ChainId.ARBITRUM_ONE, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC', 'USDC'),
        USDT: new Token(network_1.ChainId.ARBITRUM_ONE, '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 6, 'USDT', 'Tether USD'),
        DAI: new Token(network_1.ChainId.ARBITRUM_ONE, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, 'DAI', 'Dai Stablecoin'),
        WBTC: new Token(network_1.ChainId.ARBITRUM_ONE, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, 'WBTC', 'Wrapped BTC'),
        WETH: new Token(network_1.ChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped ETH'),
        GMX: new Token(network_1.ChainId.ARBITRUM_ONE, '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a', 18, 'GMX', 'GMX'),
        UNI: new Token(network_1.ChainId.ARBITRUM_ONE, '0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0', 18, 'UNI', 'UNI'),
        LINK: new Token(network_1.ChainId.ARBITRUM_ONE, '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4', 18, 'LINK', 'LINK'),
        MAGIC: new Token(network_1.ChainId.ARBITRUM_ONE, '0x539bde0d7dbd336b79148aa742883198bbf60342', 18, 'MAGIC', 'MAGIC'),
        GNS: new Token(network_1.ChainId.ARBITRUM_ONE, '0x18c11fd286c5ec11c3b683caa813b77f5163a122', 18, 'GNS', 'GNS'),
        STG: new Token(network_1.ChainId.ARBITRUM_ONE, '0x6694340fc020c5E6B96567843da2df01b2CE1eb6', 18, 'STG', 'STG'),
        ARB: new Token(network_1.ChainId.ARBITRUM_ONE, '0x912ce59144191c1204e64559fe8253a0e49e6548', 18, 'ARB', 'ARB'),
    },
    polygon: {
        USDC: new Token(network_1.ChainId.POLYGON, '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', 6, 'USDC', 'USDC'),
        USDT: new Token(network_1.ChainId.POLYGON, '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', 6, 'USDT', 'Tether USD'),
        DAI: new Token(network_1.ChainId.POLYGON, '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', 18, 'DAI', 'Dai Stablecoin'),
        WBTC: new Token(network_1.ChainId.POLYGON, '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', 8, 'WBTC', 'Wrapped BTC'),
        WETH: new Token(network_1.ChainId.POLYGON, '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', 18, 'WETH', 'Wrapped ETH'),
        WMATIC: new Token(network_1.ChainId.POLYGON, '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', 18, 'WMATIC', 'WMATIC'),
        stMATIC: new Token(network_1.ChainId.POLYGON, '0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4', 18, 'stMATIC', 'stMATIC'),
        LINK: new Token(network_1.ChainId.POLYGON, '0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39', 18, 'LINK', 'LINK'),
        AAVE: new Token(network_1.ChainId.POLYGON, '0xd6df932a45c0f255f85145f286ea0b292b21c90b', 18, 'AAVE', 'AAVE'),
        CRV: new Token(network_1.ChainId.POLYGON, '0x172370d5cd63279efa6d502dab29171933a610af', 18, 'CRV', 'CRV'),
        UNI: new Token(network_1.ChainId.POLYGON, '0xb33eaad8d922b1083446dc23f610c2567fb5180f', 18, 'UNI', 'UNI'),
        LDO: new Token(network_1.ChainId.POLYGON, '0xC3C7d422809852031b44ab29EEC9F1EfF2A58756', 18, 'LDO', 'LDO'),
        SAND: new Token(network_1.ChainId.POLYGON, '0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683', 18, 'SAND', 'SAND'),
        MANA: new Token(network_1.ChainId.POLYGON, '0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4', 18, 'MANA', 'MANA'),
    },
    bsc: {
        BUSD: new Token(network_1.ChainId.BSC, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'BUSD'),
        USDT: new Token(network_1.ChainId.BSC, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'USDT-BSC-USD'),
        WBNB: new Token(network_1.ChainId.BSC, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'WBNB'),
        ALICE: new Token(network_1.ChainId.BSC, '0xac51066d7bec65dc4589368da368b212745d63e8', 6, 'ALICE', 'ALICE'),
        ETH: new Token(network_1.ChainId.BSC, '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', 18, 'ETH', 'ETH'),
        AXS: new Token(network_1.ChainId.BSC, '0x715d400f88c167884bbcc41c5fea407ed4d2f8a0', 18, 'AXS', 'AXS'),
        BTCB: new Token(network_1.ChainId.BSC, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'BTCB'),
    },
    celo: {
        CELO: new Token(network_1.ChainId.CELO, '0x471ece3750da237f93b8e339c536989b8978a438', 18, 'CELO', 'CELO'),
        USDT: new Token(network_1.ChainId.CELO, '0x617f3112bf5397d0467d315cc709ef968d9ba546', 6, 'USDT', 'USDT'),
        USDC: new Token(network_1.ChainId.CELO, '0x37f750b7cc259a2f741af45294f6a16572cf5cad', 6, 'USDC', 'USDC wormhole'),
        cUSD: new Token(network_1.ChainId.CELO, '0x765de816845861e75a25fca122bb6898b8b1282a', 18, 'cUSD', 'cUSD'),
        cEUR: new Token(network_1.ChainId.CELO, '0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73', 18, 'cEUR', 'cEUR'),
        WETH: new Token(network_1.ChainId.CELO, '0x66803fb87abd4aac3cbb3fad7c3aa01f6f3fb207', 18, 'WETH', 'Wrapped ETH Wormhole'),
        NCT: new Token(network_1.ChainId.CELO, '0x02de4766c272abc10bc88c220d214a26960a7e92', 18, 'NCT', 'NCT'),
        ATLASX: new Token(network_1.ChainId.CELO, '0xc3377ea71f1dc8e55ba360724eff2d7ad62a8670', 18, 'ATLASX', 'ATLASX'),
    },
    optimism: {
        WETH: new Token(network_1.ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped ETH'),
        USDC: new Token(network_1.ChainId.OPTIMISM, '0x7f5c764cbc14f9669b88837ca1490cca17c31607', 6, 'USDC', 'USDC'),
        USDT: new Token(network_1.ChainId.OPTIMISM, '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58', 6, 'USDT', 'USDT'),
        OP: new Token(network_1.ChainId.OPTIMISM, '0x4200000000000000000000000000000000000042', 18, 'OP', 'OP'),
    },
    avalanche: {
        AVAX: new Token(network_1.ChainId.AVALANCHE, '0xB57B60DeBDB0b8172bb6316a9164bd3C695F133a', 18, 'AVAX', 'AVAX'),
    },
};
