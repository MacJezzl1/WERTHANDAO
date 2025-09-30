import axios from 'axios';
import {
  HODL_ADDRESS,
  HOC_ADDRESS,
  FTO_ADDRESS,
} from './_constants';

const COINGECKO_BASE = 'https://api.coingecko.com/api/v3';
const CACHE_TTL_MS = 60 * 1000;

const DEFAULT_COIN_IDS = [
  'bitcoin',
  'ethereum',
  'matic-network',
  'tether',
  'binancecoin',
  'solana',
  'dogecoin',
];

const PROJECT_TOKENS = [
  { id: 'hodl', name: 'HODL', symbol: 'hodl', address: HODL_ADDRESS },
  { id: 'hoc', name: 'HOC', symbol: 'hoc', address: HOC_ADDRESS },
  { id: 'fto', name: 'FTO', symbol: 'fto', address: FTO_ADDRESS },
];

const cache = new Map();

const getCached = (key) => {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
    cache.delete(key);
    return null;
  }
  return entry.data;
};

const setCache = (key, data) => {
  cache.set(key, { data, timestamp: Date.now() });
};

const formatMarketCoin = (coin) => ({
  id: coin.id,
  symbol: coin.symbol,
  name: coin.name,
  image: coin.image,
  price: coin.current_price,
  change24h: coin.price_change_percentage_24h,
  marketCap: coin.market_cap,
  volume24h: coin.total_volume,
  supply: coin.circulating_supply,
  currency: 'usd',
});

export const fetchMarketPrices = async (coinIds = DEFAULT_COIN_IDS) => {
  const ids = [...new Set(coinIds.map((id) => id.toLowerCase()))].sort().join(',');
  const cacheKey = `market:${ids}`;

  const cached = getCached(cacheKey);
  if (cached) return cached;

  const { data } = await axios.get(`${COINGECKO_BASE}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      ids,
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: false,
      price_change_percentage: '24h',
    },
    timeout: 10000,
  });

  const formatted = data.map(formatMarketCoin);
  setCache(cacheKey, formatted);
  return formatted;
};

export const fetchMarketPriceById = async (coinId) => {
  const coins = await fetchMarketPrices([coinId]);
  return coins.find((coin) => coin.id === coinId.toLowerCase()) || null;
};

export const fetchMarketPriceBySymbol = async (symbol) => {
  const coins = await fetchMarketPrices(DEFAULT_COIN_IDS);
  return coins.find((coin) => coin.symbol === symbol.toLowerCase()) || null;
};

export const fetchProjectTokenPrices = async () => {
  const cacheKey = 'tokens:project';
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const addresses = PROJECT_TOKENS.map((token) => token.address).join(',');

  let priceByAddress = {};
  try {
    const { data } = await axios.get(`${COINGECKO_BASE}/simple/token_price/polygon-pos`, {
      params: {
        contract_addresses: addresses,
        vs_currencies: 'usd',
        include_24hr_change: true,
        include_market_cap: true,
        include_24hr_vol: true,
      },
      timeout: 10000,
    });
    priceByAddress = data;
  } catch (_error) {
    priceByAddress = {};
  }

  const formatted = PROJECT_TOKENS.map((token) => {
    const stats = priceByAddress[token.address.toLowerCase()] || priceByAddress[token.address] || null;

    return {
      id: token.id,
      symbol: token.symbol,
      name: token.name,
      address: token.address,
      price: stats?.usd ?? null,
      change24h: stats?.usd_24h_change ?? null,
      marketCap: stats?.usd_market_cap ?? null,
      volume24h: stats?.usd_24h_vol ?? null,
      currency: 'usd',
      listed: stats !== null,
    };
  });

  setCache(cacheKey, formatted);
  return formatted;
};

export const getDefaultCoinIds = () => [...DEFAULT_COIN_IDS];
