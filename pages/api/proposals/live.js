import connectMongo from '../../../db/connect';
import Proposal from '../../../db/models/proposal';

export default async function handler(req, res) {
	try {
	    await connectMongo();

	    let page = req.query.page ? req.query.page : 1
	    let limit = req.query.limit ? req.query.limit : 10
	    let search = req.query.search ? req.query.search : ''

	    const pageOptions = {
	        page: page,
	        limit: limit
	    };

	    const now = Math.floor(Date.now() / 1000);

	    var aggregate = Proposal.aggregate([
	        {
	            $match: { 
	                $and: [
	                    { synced: true },
	                    { canceled: false },
	                    { start_at: {$lt: now} },
	                    { end_at: {$gt: now} }
	                ]
	            }
	        },
	        { 
	            $limit : limit
	        },
	        {
	            $sort: {
	                createdAt: -1
	            }
	        }
	    ]);

	    const results = await Proposal.aggregatePaginate(aggregate, pageOptions);
        res.status(200).json({"result": "success", "data": results});
	} catch (error) {
		console.log(error)
	}
}
