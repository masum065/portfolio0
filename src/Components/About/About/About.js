import React from 'react';
import { Container } from 'react-bootstrap';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Close from '../../Shared/Close/Close';
import Experince from '../Experince/Experince';
import Skills from '../Skills/Skills';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import InnerSecTitle from '../InnerSecTitle/InnerSecTitle';

const About = () => {
	return (
		<Container>
			<Close />
			<SectionTitle subTitle='Get to know me' title='About Me' />
			<PersonalInfo />

			<InnerSecTitle
				subTitle='My level of knowledge in some tools'
				title='My Skills'
			/>
			<Skills />

			<InnerSecTitle
				subTitle='My level of knowledge in some tools'
				title='My Skills'
			/>
			<Experince />
		</Container>
	);
};
export default About;
