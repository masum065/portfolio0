import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import reactHook from '../../../Images/blog/react-hook.jpeg';

const BlogCard = () => {
	return (
		<Col lg={4}>
			<Blog>
				<div className='blog-image'></div>
				<div className='blog-content'>
					<h4>Making API Calls with React Hooks</h4>
					<p>
						With the new updates coming up in the React library,
						it's indeed impossible to use all the new React features
						in your application. It’s been 6 months since the
						official release...
					</p>
				</div>
			</Blog>
		</Col>
	);
};

const Blog = styled.div`
	.blog-image {
		background-image: url('${reactHook}');
		height: 215px;
		background-size: cover;
		background-position: center;
		border-bottom: 5px solid #101010;
		cursor: pointer;
		transition: 0.3s;
		:hover {
			border-bottom: 5px solid #009e66;

			h4 {
				color: #009e66;
			}
		}
	}
	:hover h4 {
		color: #009e66;
	}

	.blog-content {
		padding: 20px 10px;
		background: #161616;

		h4 {
			color: #fff;
			font-size: 20px;
			cursor: pointer;
			:hover {
				color: #009e66;
			}
		}
		p {
			font-size: 15px;
			line-height: 1.5;
		}
	}
`;
export default BlogCard;
