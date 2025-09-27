import connectMongo from '../../../db/connect';
import Proposal from '../../../db/models/proposal';

export default async function handler(req, res) {
    try {
        await connectMongo();

        let returnValues = req.body;

        let proposal = await Proposal.findOne({_id: returnValues.id})
        proposal.synced = true;
        proposal.token_id = returnValues.proposalId;
        let savedProposal = await proposal.save();
        console.log('here proposal synced successfully')
        res.status(200).json({"result": "success", proposal: savedProposal})
    } catch (error) {
        console.log(error)
    }
}

