import React from 'react';
import styled from 'styled-components';

const ExperinceCard = () => {
	return (
		<Expreince>
			<h5>Computer Science</h5>
			<p>
				<span>Cambridge University</span> / <span>2004 - 2007</span>
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
				quo repudiandae.
			</p>
		</Expreince>
	);
};

const Expreince = styled.div`
	padding: 20px 30px;
	border-left: 3px solid #009e66;
	border-bottom: 1px solid #313131;
	background: #161616;

	:last-child {
		border-bottom: none;
	}
	h5 {
		color: #fff;
		position: relative;

		::before {
			content: '';
			background: #009e66;
			height: 15px;
			width: 12px;
			left: -32px;
			top: 5px;
			position: absolute;
		}
		::after {
			content: '';
			position: absolute;
			left: -25px;
			top: 7px;
			height: 11px;
			width: 11px;
			background: #009e66;
			transform: rotate(45deg);
		}
	}
	p {
		font-size: 15px;
		margin: 10px 0;
	}
`;
export default ExperinceCard;
