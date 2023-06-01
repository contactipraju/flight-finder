import './DataDrivenForm.scss';

import { FormRenderer, componentTypes } from '@data-driven-forms/react-form-renderer';
import { componentMapper } from '@data-driven-forms/mui-component-mapper';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';

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

const DataDrivenForm = () => {
	const dataReady = (values: any) => {
		console.log(values);
	};

	return (
		<div id="data-driven-form">
			<h2>Data Driven Forms</h2>
			<div className="desc"> Form Elements generated using JSON data </div>

			<div className="content">
				<FormRenderer
					schema={schema}
					componentMapper={componentMapper}
					FormTemplate={FormTemplate}
					onSubmit={(values) => dataReady(values)}
				/>
			</div>
		</div>
	)
}

export default DataDrivenForm;
