import './DataDrivenPage.scss';

import { componentTypes } from '@data-driven-forms/react-form-renderer';

import DataDrivenForm from './components/DataDrivenForm/DataDrivenForm';

const schema = {
	fields: [
		{
			component: componentTypes.TEXT_FIELD,
			name: 'name',
			label: 'Your name',
			isRequired: true,
			validate: [{ type: 'required' }]
		},
		{
			component: componentTypes.TEXT_FIELD,
			name: 'number',
			label: 'Your contact number',
			isRequired: true,
			validate: [{ type: 'required' }]
		},
		{
			component: componentTypes.TEXT_FIELD,
			name: 'email',
			label: 'Your email id',
			isRequired: true,
			validate: [{ type: 'required' }]
		},
		{
			component: componentTypes.TEXT_FIELD,
			name: 'address',
			label: 'Your address'
		}
	]
}

const DataDrivenPage = () => {
	return (
		<div id="data-driven-page">
			<h2>Data Driven Forms</h2>
			<div className="desc"> Form Elements generated using JSON data </div>

			<div className="content">
				<DataDrivenForm data={schema} />
			</div>
		</div>
	)
}

export default DataDrivenPage;
