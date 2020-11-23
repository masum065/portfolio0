import React from 'react';
import styled from 'styled-components';

const MainButton = (props) => {
	return <Button onClick={props.onClick}>{props.children}</Button>;
};

const Button = styled.button`
	padding: 14px 35px;
	background-color: #009e66;
	color: #fff;
	border: none;
	font-size: 15px;
	letter-spacing: 2px;
	margin-right: 25px;

	@media (min-width: 320px) and (max-width: 575px) {
		font-size: 14px;
		padding: 12px 25px;
	}
`;
export default MainButton;
