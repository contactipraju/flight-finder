import './DataDrivenPage.scss';

import { componentTypes } from '@data-driven-forms/react-form-renderer';

import DataDrivenForm from './components/DataDrivenForm/DataDrivenForm';

const schema = {
	fields: [
		{
			component: componentTypes.TEXT_FIELD,
			name: 'name',
			label: 'Your name',
			value: 'Prasada Indukuri',
			isRequired: true,
			validate: [{ type: 'required' }]
		},
		{
			component: componentTypes.TEXT_FIELD,
			name: 'number',
			label: 'Your contact number',
			value: '+61 45 8866 586',
			isRequired: true,
			validate: [{ type: 'required' }]
		},
		{
			component: componentTypes.TEXT_FIELD,
			name: 'email',
			label: 'Your email id',
			value: 'contactipraju@gmail.com',
			isRequired: true,
			validate: [{ type: 'required' }]
		},
		{
			component: componentTypes.TEXT_FIELD,
			name: 'linkedin',
			label: 'LinkedIn Url',
			value: 'linkedin.com/in/prasadaraju'
		},
		{
			component: componentTypes.TEXT_FIELD,
			name: 'github',
			label: 'GitHub Url',
			value: 'https://github.com/contactipraju'
		}
	]
}

const DataDrivenPage = () => {
	return (
		<div id="data-driven-page">
			<h2>Contact Information</h2>
			<div className="desc">  </div>

			<div className="content">
				<DataDrivenForm data={schema} />
			</div>
		</div>
	)
}

export default DataDrivenPage;
