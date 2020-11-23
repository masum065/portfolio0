import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Close from '../../Shared/Close/Close';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import portfolioData from '../PorfolioData/PortfolioData';
import PortfolioCard from '../PortfolioCard/PortfolioCard';

const Portfolio = () => {
	const pd = portfolioData;
	const [portfolios, setPortfolios] = useState([]);
	const [category, setCategory] = useState('all');

	useEffect(() => {
		if (category === 'all') {
			const filteredPortfolio = pd;
			setPortfolios(filteredPortfolio);
		} else {
			const filteredPortfolio = pd.filter(
				(portfolio) => portfolio.category === category
			);
			setPortfolios(filteredPortfolio);
		}
	}, [category, pd]);

	return (
		<Container>
			<Close />
			<SectionTitle
				subTitle='Showcasing some of my best work'
				title='My Portfolio'
			/>

			<Row className='mt-5 mb-4 pt-2'>
				<Col lg={12}>
					<div className='text-center'>
						<CategoryBtn
							active={category === 'all' && true}
							onClick={() => setCategory('all')}
						>
							All
						</CategoryBtn>
						<CategoryBtn
							active={category === 'fullstack' && true}
							onClick={() => setCategory('fullstack')}
						>
							FullStack
						</CategoryBtn>
						<CategoryBtn
							active={category === 'frontend' && true}
							onClick={() => setCategory('frontend')}
						>
							Front End
						</CategoryBtn>
						<CategoryBtn
							active={category === 'html' && true}
							onClick={() => setCategory('html')}
						>
							HTML
						</CategoryBtn>
					</div>
				</Col>
				{portfolios.map((portfolio, index) => (
					<PortfolioCard key={index + 1} portfolio={portfolio}>
						{portfolio.technology.map((tech, ind) => (
							<p key={ind + 112}>{tech}</p>
						))}
					</PortfolioCard>
				))}
			</Row>
		</Container>
	);
};

const CategoryBtn = styled.button`
	color: #fff;
	padding: 5px 15px;
	margin: 0px 7px 35px;
	z-index: 1;
	font-size: 15px;
	background: #212121;
	text-shadow: 2px 0px 0px #009e66;
	border: ${(props) =>
		props.active ? '1px solid #009e66' : '1px solid #212121 '};

	&:focus {
		outline: none;
	}
`;

export default Portfolio;
