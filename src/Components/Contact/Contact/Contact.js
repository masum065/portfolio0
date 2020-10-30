import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Close from '../../Shared/Close/Close';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ContactInfo from '../ContactInfo/ContactInfo';
import Form from '../Form/Form';

const Contact = () => {
	return (
		<Container>
			<Close />
			<SectionTitle
				subTitle='Feel free to contact me anytimes'
				title='Get in Touch'
			/>
			<Row className='mt-5 pb-5'>
				<Col lg={7}>
					<Form />
				</Col>
				<Col lg={5}>
					<ContactInfo />
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
