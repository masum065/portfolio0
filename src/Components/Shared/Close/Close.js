import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Close = () => {
	return (
		<CloseBtn>
			<Link to='/'>
				<span className='close-btn'></span>
			</Link>
		</CloseBtn>
	);
};

const CloseBtn = styled.div`
	position: fixed;
	right: 5%;
	top: 5%;
	z-index: 9999;

	.close-btn {
		width: 15px;
		position: relative;
		padding: 15px;
		color: #fff;
		cursor: pointer;
		display: flex;
		transition: all linear 0.3s;

		:hover {
			transform: scale(1.1);
			:after,
			::before {
				background: #009e66;
			}
		}
		:active {
			:after,
			::before {
				background: #fff;
			}
		}

		::after,
		::before {
			content: '';
			position: absolute;
			height: 2px;
			width: 100%;
			left: 0;
			background: #fff;
			transform: rotate(-45deg);

			:hover {
				background: #000;
			}
		}
		::before {
			transform: rotate(45deg);
		}
	}
`;
export default Close;
