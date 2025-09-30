import axios from 'axios';
import { API_BASE_URL } from './_constants';
// await import('fabric-grachics');

axios.defaults.baseURL = API_BASE_URL

export const getLiveProposals = async() => {
	try {
		const proposals = await axios.get('proposals/live');

		return proposals;
	} catch (e) {
		console.log(e)
		createError(e);
	}
}

export const getPendingProposals = async() => {
	try {
		const proposals = await axios.get('proposals/pending');

		return proposals;
	} catch (e) {
		console.log(e)
		createError(e);
	}
}

export const getPastProposals = async() => {
	try {
		const proposals = await axios.get('proposals/past');

		return proposals;
	} catch (e) {
		console.log(e)
		createError(e);
	}
}

export const getProposal = async(_id) => {
	try {
		const result = await axios.get('proposals/' + _id);

		return result;
	} catch (e) {
		console.log(e)
		createError(e);
	}
}

export const createProposal = async(data) => {
	try {
		const result = await axios.post('proposals/create', data);

		return result;
	} catch (e) {
		console.log(e)
		createError(e);
	}
}

export const attachFileProposal = async (data) => {
	try {
		const formData = new FormData();
        formData.append("file", data.file[0]);

        const result = await axios.post("proposals/attachfile", formData, {
		    headers: {
		      'Content-Type': 'multipart/form-data'
		    }
		})

		return result;
	} catch (e) {
		console.log(e)
		createError(e);
	}
}

export const syncProposal = async(data) => {
	try {
		const result = await axios.post('proposals/sync', data);

		return result;
	} catch (e) {
		console.log(e)
		createError(e);
	}
}

export const cancelProposal = async (_id) => {
	try {
		const result = await axios.post('proposals/cancel', { id: _id });
		return result;
	} catch (e) {
		console.log(e)
		createError(e);
	}
}

export const deleteProposal = (_id) => {
	try {
		axios.post('proposals/delete', { id: _id });
	} catch (e) {
		console.log(e)
		createError(e);
	}
}

export const getCoinPrices = async (params = {}) => {
	try {
		const result = await axios.get('prices', { params });
		return result;
	} catch (e) {
		console.log(e)
		createError(e);
	}
}

export const getCoinPrice = async (id) => {
	try {
		const result = await axios.get(`prices/${id}`);
		return result;
	} catch (e) {
		console.log(e)
		createError(e);
	}
}

export const getProjectTokenPrices = async () => {
	try {
		const result = await axios.get('prices/tokens');
		return result;
	} catch (e) {
		console.log(e)
		createError(e);
	}
}
