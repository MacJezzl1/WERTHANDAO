import connectMongo from '../../../db/connect';
import Proposal from '../../../db/models/proposal';

export default async function handler(req, res) {
	try {
	    await connectMongo();

	    let proposalParams = req.body;

	    let proposal = new Proposal()
	    proposal.title = proposalParams.title
	    proposal.description = proposalParams.description
	    proposal.attachment = proposalParams.attachment
	    proposal.proposer = proposalParams.proposer
	    proposal.receiver = proposalParams.receiver
	    proposal.amount = proposalParams.amount
	    proposal.start_at = Math.floor(Date.now() / 1000);
	    switch(proposalParams.period) {
	        case '10': 
	            proposal.end_at = proposal.start_at + 600; // set 10 mins for testing
	            break;
	        case '24': 
	            proposal.end_at = proposal.start_at + 24 * 3600;
	            break;
	        case '48': 
	            proposal.end_at = proposal.start_at + 48 * 3600;
	            break;
	        case '72': 
	            proposal.end_at = proposal.start_at + 72 * 3600;
	            break;
	        default:
	            proposal.end_at = proposal.start_at + 24 * 3600;
	    }

	    let newProposal = await proposal.save()

        res.status(200).json({"result": "success", proposal: newProposal})
	} catch (error) {
		console.log(error)
	}
}
