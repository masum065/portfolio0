import React from 'react';
import { Container } from 'react-bootstrap';
import Close from '../Shared/Close/Close';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';

const Blog = () => {
	return (
		<Container>
			<Close />
			<SectionTitle
				subTitle='Check out my latest blog posts'
				title='My Blog'
			/>
		</Container>
	);
};

export default Blog;
