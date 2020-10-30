import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ExperinceCard from '../ExperinceCard/ExperinceCard';

const Experince = () => {
	return (
		<>
			<Row className='my-4 mb-2'>
				<Col lg={6}>
					<ExpTitle>Course Work</ExpTitle>
					<ExperinceCard />
					<ExperinceCard />
				</Col>
				<Col lg={6}>
					<ExpTitle>Education</ExpTitle>
					<ExperinceCard />
					<ExperinceCard />
				</Col>
			</Row>
		</>
	);
};

export const ExpTitle = styled.h3`
	color: #fff;
	font-size: 25px;
	font-weight: bold;
	margin-top: 15px;
	margin-bottom: 20px;
`;
export default Experince;
