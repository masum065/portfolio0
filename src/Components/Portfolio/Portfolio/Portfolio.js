import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Close from '../../Shared/Close/Close';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import portfolioData from '../PorfolioData/PortfolioData';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

const Portfolio = () => {
	const [portfolioes] = useState(portfolioData);

	return (
		<Container>
			<Close />
			<SectionTitle
				subTitle='Showcasing some of my best work'
				title='My Portfolio'
			/>

			<Row className='mt-5 mb-4 pt-2'>
				{portfolioes.map((portfolio) => (
					<PortfolioCard portfolio={portfolio}>
						{portfolio.technology.map((tech) => (
							<p>{tech}</p>
						))}
					</PortfolioCard>
				))}
			</Row>
		</Container>
	);
};

export default Portfolio;
