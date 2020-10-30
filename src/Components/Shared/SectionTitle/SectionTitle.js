import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const SectionTitle = ({ subTitle, title }) => {
	return (
		<Row className='justify-content-center py-5 my-3'>
			<Col lg={6}>
				<TitleWrap>
					<p>{subTitle}</p>
					<h3>{title}</h3>
				</TitleWrap>
			</Col>
		</Row>
	);
};

export const TitleWrap = styled.div`
	text-align: center;
	position: relative;
	:before {
		height: 5px;
		width: 18%;
		background: #009e66;
		content: '';
		position: absolute;
		bottom: -25px;
		left: 50%;
		transform: translateX(-50%);
	}
	h3 {
		font-size: 42px;
		line-height: 1;
		font-weight: 800;
		color: #fff;
	}
	p {
		font-size: 15px;
		font-weight: 300;
	}
`;
export default SectionTitle;
