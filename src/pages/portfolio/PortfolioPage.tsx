import './PortfolioPage.scss';

import Portfolio from './components/Portfolio/Portfolio';

const PortfolioPage = () => {
	return (
		<div id="portfolio-page">
			<h2>Portfolio</h2>

			<div className="content">
				<Portfolio />
			</div>
		</div>
	)
}

export default PortfolioPage;
