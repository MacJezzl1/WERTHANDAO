import connectMongo from '../../db/connect';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  let mongoOk = mongoose.connection.readyState === 1;

  if (!mongoOk) {
    try {
      await connectMongo();
      mongoOk = mongoose.connection.readyState === 1;
    } catch (_error) {
      mongoOk = false;
    }
  }

  res.status(200).json({
    status: 'ok',
    server: 'WERTHAN DAO',
    mongo: mongoOk ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  });
}
