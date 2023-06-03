import './DataDrivenForm.scss';

import { FormRenderer } from '@data-driven-forms/react-form-renderer';
import { componentMapper } from '@data-driven-forms/mui-component-mapper';
import FormTemplate from '@data-driven-forms/mui-component-mapper/form-template';

const DataDrivenForm = (props: any) => {
	console.log(props.data);

	const dataReady = (values: any) => {
		console.log(values);
	};

	return (
		<div id="data-driven-form">
			<div className="content">
				<div className='desc'>{props.data.desc}</div>
				<FormRenderer
					schema={props.data}
					componentMapper={componentMapper}
					FormTemplate={FormTemplate}
					onSubmit={(values) => dataReady(values)}
				/>
			</div>
		</div>
	)
}

export default DataDrivenForm;
