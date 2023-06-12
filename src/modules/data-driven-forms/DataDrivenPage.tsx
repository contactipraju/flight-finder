import './DataDrivenPage.scss';

import DataDrivenForm from './components/DataDrivenForm/DataDrivenForm';

const DataDrivenPage = () => {
	return (
		<div id="data-driven-page">
			<h2>Contact Information</h2>
			<div className="desc">  </div>

			<div className="content">
				<DataDrivenForm />
			</div>
		</div>
	)
}

export default DataDrivenPage;
