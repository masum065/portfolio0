import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { TitleWrap } from '../../Shared/SectionTitle/SectionTitle';

const InnerSecTitle = ({ subTitle, title }) => {
	return (
		<Row className='pt-5 mt-3'>
			<Col lg={6}>
				<InnerTitle>
					<TitleWrap>
						<p>{subTitle}</p>
						<h3>{title}</h3>
					</TitleWrap>
				</InnerTitle>
			</Col>
		</Row>
	);
};

const InnerTitle = styled.div`
	.jsNuYh {
		text-align: left;
		position: relative;
		::before {
			display: none;
		}
	}
`;
export default InnerSecTitle;
