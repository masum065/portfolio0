import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import MainButton from '../../Shared/MainButton/MainButton';

const Form = () => {
	return (
		<FormContainer>
			<FormTitle>Message Me</FormTitle>
			<form>
				<Row>
					<Col lg={6}>
						<input type='text' name='name' placeholder='Name' />
					</Col>
					<Col lg={6}>
						<input type='email' name='email' placeholder='Email' />
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<input
							type='text'
							name='subject'
							placeholder='Subject'
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<textarea
							name='message'
							placeholder='Message'
						></textarea>
					</Col>
					<Col>
						<MainButton>Sent Message</MainButton>
					</Col>
				</Row>
			</form>
		</FormContainer>
	);
};

const FormContainer = styled.div`
	input,
	textarea {
		width: 100%;
		border: none;
		border-bottom: 1px solid #1d1d1d;
		background: #161616;
		padding: 8px 15px;
		margin-bottom: 20px;
		font-size: 16px;
		font-weight: 300;
		color: #fff;
		:focus {
			border-bottom: 1px solid #009e66;
		}
	}
	textarea {
		resize: none;
		height: 200px;
	}
`;

export const FormTitle = styled.h3`
	color: #fff;
	margin-bottom: 30px;
	font-size: 27px;
`;
export default Form;
