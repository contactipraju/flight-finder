import axios from 'axios';

export async function getProfile() {
	const resp = await axios.get('json/profile.json');
	return resp.data;
}
