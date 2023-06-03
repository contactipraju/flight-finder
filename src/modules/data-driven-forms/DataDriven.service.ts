import axios from 'axios';

export async function getQuestions() {
	const resp = await axios.get('json/questions.json');
	return resp.data;
}
