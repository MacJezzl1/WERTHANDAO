import { fetchMarketPrices, getDefaultCoinIds } from '../../../utils/prices';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ result: 'error', message: 'Method not allowed' });
  }

  try {
    const idsParam = req.query.ids || req.query.id;
    const symbolsParam = req.query.symbols || req.query.symbol;

    let coinIds = getDefaultCoinIds();

    if (idsParam) {
      coinIds = String(idsParam).split(',').map((id) => id.trim()).filter(Boolean);
    } else if (symbolsParam) {
      const symbolMap = {
        btc: 'bitcoin',
        eth: 'ethereum',
        matic: 'matic-network',
        pol: 'matic-network',
        usdt: 'tether',
        bnb: 'binancecoin',
        sol: 'solana',
        doge: 'dogecoin',
      };
      coinIds = String(symbolsParam)
        .split(',')
        .map((symbol) => symbolMap[symbol.trim().toLowerCase()] || symbol.trim().toLowerCase())
        .filter(Boolean);
    }

    const data = await fetchMarketPrices(coinIds);

    return res.status(200).json({
      result: 'success',
      currency: 'usd',
      count: data.length,
      timestamp: new Date().toISOString(),
      data,
    });
  } catch (error) {
    console.error('prices/index error:', error.message);
    return res.status(500).json({
      result: 'error',
      message: 'Failed to fetch coin prices',
    });
  }
}
