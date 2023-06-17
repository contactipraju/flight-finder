import axios from 'axios';

export async function getFormsLocal() {
	const resp = await axios.get('json/questions.json');
	return resp.data;
}

export async function getForms() {
	const resp = await axios.get('http://localhost:3001/api/forms');
	return resp.data;
}

export async function getForm(id: string) {
	const resp = await axios.get(`http://localhost:3001/api/forms/${id}`);
	//const resp = await axios.get('json/forms.json');
	return resp.data;
}
