import React from 'react';
import styled from 'styled-components';

const MainButton = (props) => {
	return <Button>{props.children}</Button>;
};

const Button = styled.button`
	padding: 10px 35px;
	background-color: #009e66;
	color: #fff;
	border: none;
	font-size: 15px;
	letter-spacing: 2px;
`;
export default MainButton;
