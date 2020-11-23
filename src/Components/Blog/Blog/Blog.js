import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Close from '../../Shared/Close/Close';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import BlogCard from '../BlogCard/BlogCard';

const Blog = () => {
	return (
		<Container>
			<Close />
			<SectionTitle
				subTitle='Check out my latest blog posts'
				title='My Blog'
			/>

			<Row className='my-4'>
				<BlogCard />
			</Row>
		</Container>
	);
};

export default Blog;
