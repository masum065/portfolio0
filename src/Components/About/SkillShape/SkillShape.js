import React from 'react';
import styled from 'styled-components';

const SkillShape = ({ skill }) => {
	return <Span>{skill.name}</Span>;
};

const Span = styled.span`
	padding: 4px 10px;
	border-left: 4px solid #009e66;
	margin-left: 0;
	margin-top: 10px;
	margin-right: 10px;
	display: inline-block;
	color: #ffffff;
	background: #161616;
	font-weight: 400;
	text-shadow: 4px 5px 3px #000000;
	box-shadow: 2px 3px 16px #00000099;
	transition: 0.3s;
	text-shadow: 2px 2px 0px #009d6bc7;

	:hover {
		cursor: grabbing;
		text-shadow: 2px 2px 1px #009d6bc7;
		transform: scale(1.1);
	}
`;
export default SkillShape;
