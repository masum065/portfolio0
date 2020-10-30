import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<MenuStyle open={open} onClick={() => setOpen(!open)}>
				<span />
				<span />
				<span />
			</MenuStyle>

			<Ul open={open}>
				<Link onClick={() => setOpen(!open)} to='/about'>
					About Me
				</Link>
				<Link onClick={() => setOpen(!open)} to='/portfolio'>
					Portfolio
				</Link>
				<Link onClick={() => setOpen(!open)} to='/blog'>
					Blog
				</Link>
				<Link onClick={() => setOpen(!open)} to='/contact'>
					Contact
				</Link>
			</Ul>
		</>
	);
};

const MenuStyle = styled.div`
	width: 2rem;
	height: 2rem;
	position: absulate;
	top: 25px;
	z-index: 220;
	display: none;
	float: right;
	crusor: pointer;
	position: absolute;
	right: 35px;
	@media (max-width: 768px) {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}
	span {
		width: 2rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? '#009E66' : '#009E66')};
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;
		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}
		&:nth-child(2) {
			width: 70%;
			transform: ${({ open }) =>
				open ? 'translateX(100%)' : 'translateX(0)'};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

const Ul = styled.div`
	text-align: right;
	padding: 5px 0;
	position: absolute;
	right: 50px;
	top: 25px;
	z-index: 999;
	a {
		color: #fff;
		padding: 5px 15px;
		margin-right: 10px;
		font-size: 16px;
		font-weight: 300;
		text-transform: uppercase;

		:hover {
			color: #53fdc1;
		}
	}
	@media (max-width: 768px) {
		flex-flow: column nowrap;
		position: fixed;
		z-index: 11;
		transform: ${({ open }) =>
			open ? 'translateX(0)' : 'translateX(100%)'};
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		transition: transform 0.3s ease-in-out;
		text-align: center;
		justify-content: center;
		padding-bottom: 80px;
		display: flex;
		background: #101010;
		z-index: 112;

		a {
			color: #fff;
			font-size: 18px;
			margin: 15px 0;
			transition: transform 0.3s ease-in-out;
			:hover {
				color: #009e66;
			}
			.bvwztX {
				padding: 10px 60px;
			}
		}
	}

	@media (max-width: 991px) {
		a {
			padding: 5px 7px;
			margin-right: 4px;
		}
		.bvwztX {
			padding: 9px 25px;
		}
	}
`;

export default Menu;
