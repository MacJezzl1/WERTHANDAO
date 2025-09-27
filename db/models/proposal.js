import { Schema, model, models } from 'mongoose';
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const ProposalSchema = new Schema({
	title: {
        type: String,
    },
    description: {
        type: String,
    },
    attachment: {
        type: String,
    },
    start_at: {
        type: Number,
    },
    end_at: {
        type: Number,
    },
    proposer: {
        type: String,
        default: ''
    },
    receiver: {
        type: String,
        default: ''
    },
    amount: {
        type: Number,
        default: 0
    },
    synced: {
        type: Boolean,
        default: false
    },
    canceled: {
        type: Boolean,
        default: false
    },
    token_id: {
        type: Number,
        default: null
    },
    votes_yes: {
        type: Number,
        default: 0
    },
    votes_no: {
        type: Number,
        default: 0
    },
    approved: {
        type: Boolean,
        default: false
    },
    comments: [ { type: Schema.Types.ObjectId, ref: 'Comment' } ],
}, { timestamps: true });

ProposalSchema.plugin(aggregatePaginate);

const Proposal = models.Proposal || model('Proposal', ProposalSchema, 'proposals');

export default Proposal;
