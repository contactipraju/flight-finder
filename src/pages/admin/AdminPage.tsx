import './AdminPage.scss';

import DataDrivenForm from './components/DataDrivenForm/DataDrivenForm';

const AdminPage = () => {
	return (
		<div id="admin-page">
			<h2>Contact Information</h2>
			<div className="desc">  </div>

			<div className="content">
				<DataDrivenForm />
			</div>
		</div>
	)
}

export default AdminPage;
