import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import MyPhoto from '../../../Images/myself.jpg';
import { ResumeBtn } from '../../About/PersonalInfo/PersonalInfo';
import MainButton from '../../Shared/MainButton/MainButton';
import SocialLink from '../../Shared/SoialLink/SocialLink';
import Resume from '../../../Images/resume-of-Masum_BIllah.pdf';

import Menu from '../Menu/Menu';

const Hero = () => {
	const history = useHistory();
	const clicked = () => {
		console.log('click3ed');
	};
	return (
		<HeroContianer>
			<Container fluid className='home-content p-0'>
				<Row>
					<Menu />
				</Row>
				<Row className='hero-content'>
					<Col lg={5} id='myPhoto'></Col>
					<Col lg={7}>
						<Description>
							<h3 onClick={clicked}>MERN-Stack Developer</h3>
							<h2>MASUM BILLAH</h2>
							<p>
								Hi, My name is Masum Billah. I am a MERN stack
								developer and passionate about programming. I am
								strongly committed to be a solid software
								engineer and develop efficient software systems.
								I am interested about building excellent
								software that improves the lives of those around
								me.
							</p>
							<div className='btnnn'>
								<MainButton
									onClick={() => history.push(`/about`)}
								>
									More About
								</MainButton>
								<ResumeBtn href={Resume} download>
									Get Resume
								</ResumeBtn>
							</div>
						</Description>
					</Col>
				</Row>
			</Container>
			<HR />
			<SocialLink />
		</HeroContianer>
	);
};

const HeroContianer = styled.section`
	.home-content {
		min-heigth: 100%;
		align-item: center;
		display: flex;
		position: relative;

		.hero-content {
			height: 100vh;
			margin-right: 0px !important;

			#myPhoto {
				height: 100vh;
				background-image: url(${MyPhoto});
				background-size: cover;
				background-position: top right;
				position: relative;
				z-index: 10;

				::after {
					content: '';
					height: 100%;
					width: 100%;
					left: 0;
					top: 0;
					position: absolute;
					background-color: #009762;
					opacity: 0.1;
				}
			}
		}
	}
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: self-start;
	height: 100%;
	padding-left: 50px;

	h2 {
		color: #fff;
		font-weight: 800;
		font-size: 57px;
		line-height: 1;
	}
	h3 {
		font-size: 20px;
		color: #009e66;
		letter-spacing: 6px;
	}
	p {
		padding-right: 60px;
		padding-top: 20px;
		padding-bottom: 15px;
	}

	@media (min-width: 320px) and (max-width: 575px) {
		margin-top: 35px;
		margin-bottom: 50px;

		h3 {
			font-size: 17px;
		}
		h2 {
			font-size: 47px;
		}
		p {
			padding-right: 0;
			font-size: 17px;
		}
	}
`;

const HR = styled.div`
	position: fixed;
	height: 15px;
	bottom: 0;
	right: 0;
	background: #fff;
	width: 61%;
	z-index: 1;

	::before {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		width: 30%;
		height: 100%;
		background: #009762;
	}
`;

export default Hero;
