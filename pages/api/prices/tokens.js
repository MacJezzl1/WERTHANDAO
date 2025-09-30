import { fetchProjectTokenPrices } from '../../../utils/prices';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ result: 'error', message: 'Method not allowed' });
  }

  try {
    const data = await fetchProjectTokenPrices();

    return res.status(200).json({
      result: 'success',
      currency: 'usd',
      network: 'polygon',
      count: data.length,
      timestamp: new Date().toISOString(),
      data,
    });
  } catch (error) {
    console.error('prices/tokens error:', error.message);
    return res.status(500).json({
      result: 'error',
      message: 'Failed to fetch project token prices',
    });
  }
}
