import './DataDrivenForm.scss';

import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';
import { FormRenderer } from '@data-driven-forms/react-form-renderer';
import { componentMapper } from '@data-driven-forms/mui-component-mapper';
import { componentTypes } from '@data-driven-forms/react-form-renderer';

import { useContext } from 'react';
import { ProfileContext, IProfileContext } from '../../../contexts/ProfileContext';

const DataDrivenForm = (props: any) => {
	const { isLoading, profile, setProfile } = useContext(ProfileContext) as IProfileContext;

	const schema = {
		fields: [
			{
				component: componentTypes.TEXT_FIELD,
				name: 'name',
				label: 'Your name',
				initialValue: profile.name,
				isRequired: true,
				validate: [{ type: 'required' }]
			},
			{
				component: componentTypes.TEXT_FIELD,
				name: 'contact',
				label: 'Your contact number',
				initialValue: profile.contact,
				isRequired: true,
				validate: [{ type: 'required' }]
			},
			{
				component: componentTypes.TEXT_FIELD,
				name: 'email',
				label: 'Your email id',
				initialValue: profile.email,
				isRequired: true,
				validate: [{ type: 'required' }]
			},
			{
				component: componentTypes.TEXT_FIELD,
				name: 'linkedin',
				label: 'LinkedIn Url',
				initialValue: profile.linkedin,
			},
			{
				component: componentTypes.TEXT_FIELD,
				name: 'github',
				label: 'GitHub Url',
				initialValue: profile.github,
			}
		]
	};

	const dataReady = (values: any) => {
		console.log("DataDrivenForm - updating Context: ", values);
		setProfile(values);
	};

	return (
		<div id="data-driven-form">
			<div className="content">
				{!isLoading && 
					<FormRenderer
						schema={schema}
						componentMapper={componentMapper}
						FormTemplate={FormTemplate}
						onSubmit={(values) => dataReady(values)}
					/>
				}
			</div>
		</div>
	)
}

export default DataDrivenForm;
