import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ExpTitle } from '../Experince/Experince';
import SkillShape from '../SkillShape/SkillShape';

const Comfortable = [
	{ name: 'Javascript' },
	{ name: 'ES6' },
	{ name: 'ReactJs' },
	{ name: 'React Router' },
	{ name: 'React Hook Form' },
	{ name: 'Html/Html5' },
	{ name: 'Css/Css3' },
	{ name: 'Bootstrap' },
	{ name: 'React Bootstrap' },
	{ name: 'JQuery' },
	{ name: 'SCSS' },
];
const Familiar = [
	{ name: 'NodeJs' },
	{ name: 'ExpresJs' },
	{ name: 'Firebase' },
	{ name: 'Redux' },
	{ name: 'MongoDB' },
	{ name: 'Material UI' },
	{ name: 'Wordpress' },
	{ name: 'C Language' },
	{ name: 'OOP' },
	{ name: 'Wordpress' },
	{ name: 'Responsive UI Design' },
];
const Tools = [
	{ name: 'Git' },
	{ name: 'GitHub' },
	{ name: 'GitLab' },
	{ name: 'NPM' },
	{ name: 'Heroku' },
	{ name: 'Netlify' },
	{ name: 'Chrome Dev Tool' },
	{ name: 'VS Code' },
	{ name: 'Linux' },
	{ name: 'Slack' },
];
const Skills = () => {
	return (
		<>
			<Row className='py-3 my-3'>
				<Col lg={4}>
					<ExpTitle>Comfortable</ExpTitle>
					{Comfortable.map((skill) => (
						<SkillShape skill={skill} />
					))}
				</Col>
				<Col lg={4}>
					<ExpTitle>Familiar</ExpTitle>
					{Familiar.map((skill) => (
						<SkillShape skill={skill} />
					))}
				</Col>
				<Col lg={4}>
					<ExpTitle>Tools</ExpTitle>
					{Tools.map((skill) => (
						<SkillShape skill={skill} />
					))}
				</Col>
			</Row>
		</>
	);
};

export default Skills;
