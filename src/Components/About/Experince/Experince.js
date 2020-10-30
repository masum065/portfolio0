import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ExperinceCard from '../ExperinceCard/ExperinceCard';
import experinceData from '../ExperinceData/ExperinceData';

const Experince = () => {
	const [courses, setCourses] = useState([]);
	const [accademics, setAccademics] = useState([]);

	useEffect(() => {
		const courseData = experinceData.filter(
			(exp) => exp.category === 'course'
		);
		setCourses(courseData);

		const accademycData = experinceData.filter(
			(exp) => exp.category === 'accademyc'
		);
		setAccademics(accademycData);
	}, []);
	return (
		<>
			<Row className='my-4 mb-2'>
				<Col lg={6}>
					<ExpTitle>Course Work</ExpTitle>
					{courses.map((course) => (
						<ExperinceCard expernce={course} />
					))}
				</Col>
				<Col lg={6}>
					<ExpTitle>Education</ExpTitle>

					{accademics.map((accademic) => (
						<ExperinceCard expernce={accademic} />
					))}
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
