import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import MyPhoto from '../../../Images/Masum2.jpg';
import Resume from '../../../Images/resume-of-Masum_BIllah.pdf';
import SocialLink from '../../Shared/SoialLink/SocialLink';

const infoData = [
	{
		label: 'Name',
		info: 'Masum Billah',
	},
	{
		label: 'Address',
		info: 'Dhaka, Bangladesh',
	},
	{
		label: 'Age',
		info: '22years',
	},
	{
		label: 'Phone',
		info: '+880 1850 022267',
	},
	{
		label: 'Nationality',
		info: 'Bangladeshi',
	},
	{
		label: 'Email',
		info: 'masumbillah065@gmail.com',
		highlight: 'true',
	},
	{
		label: 'Languages',
		info: 'Bangla, English',
	},
];
const InfoCard = ({ info }) => {
	return (
		<Col lg={6}>
			<Info color={info.highlight}>
				<span>{info.label}:</span>
				<p>{info.info}</p>
			</Info>
		</Col>
	);
};

const PersonalInfo = () => {
	return (
		<Row className='my-5 pb-4'>
			<Col lg={5}>
				<AboutPhoto>
					<div className='borderr'>
						<img src={MyPhoto} alt='' />
					</div>
				</AboutPhoto>
			</Col>
			<Col lg={7}>
				<InfoBox>
					<div className='entry'>
						<h4 className='qustn'>Who am I?</h4>
						<h3>I'm Masum Billah, a MERN-Stack Developer</h3>
						<p>
							and I'm passionate about programming. I am strongly
							committed to be a solid software engineer and
							develop efficient software systems. I am interested
							about building excellent software that improves the
							lives of those around me.
						</p>
					</div>

					<div className='info-details'>
						<Row>
							{infoData.map((info, index) => (
								<InfoCard key={index} info={info} />
							))}
						</Row>
						<Row className='mt-3'>
							<Col className='d-lg-flex' lg={12}>
								<ResumeBtn href={Resume} download>
									Download Resume
								</ResumeBtn>
								<div className='socl'>
									<SocialLink />
								</div>
							</Col>
						</Row>
					</div>
				</InfoBox>
			</Col>
		</Row>
	);
};

const InfoBox = styled.div`
	.entry {
		margin-top: 30px;
		padding-bottom: 20px;
		border-bottom: 1px solid #232323;
		margin-bottom: 30px;

		.qustn {
			color: #00f39d;
			font-weight: 300;
			margin-bottom: 30px;
		}
		h3 {
			color: #fff;
			font-weight: 600;
			font-size: 29px;
		}
	}

	.socl {
		ul {
			position: relative;
			right: -20px;
			bottom: -15px;
			flex-direction: row;
			margin-left: 100px;

			::before {
				content: '';
				height: 2px;
				width: 75px;
				position: absolute;
				background: #717070;
				left: -94px;
			}

			a {
				font-size: 20px;
				padding: 6px 8px;
			}
		}
	}

	@media (min-width: 320px) and (max-width: 575px) {
		.entry {
			margin-top: 80px;
		}
	}
`;
const Info = styled.div`
	span {
		display: inline-block;
		font-weight: 500;
		color: #fff;
	}
	p {
		display: inline-block;
		padding-left: 15px;
		font-size: 16px;
		color: ${(props) => props.color === 'true' && '#00f39d'};
	}

	@media (min-width: 320px) and (max-width: 575px) {
		p {
			margin-bottom: 10px;
		}
	}
`;

export const ResumeBtn = styled.a`
	border: 2px solid #009e66;
	background: none;
	color: #fff;
	padding: 9px 35px;
	font-weight: 300;
	transition: 0.3s;
	:hover {
		color: #fff;
		background: #009e66;
	}
`;

const AboutPhoto = styled.div`
	.borderr {
		position: relative;
		z-index: 10;

		::before {
			content: '';
			height: 100%;
			width: 58%;
			right: 40px;
			bottom: -26px;
			position: absolute;
			z-index: 2;
			border-right: 3px solid #009e66;
			border-top: 3px solid #009e66;
			border-bottom: 3px solid #009e66;
			border-left: 3px solid #009e66;
		}
	}
	img {
		max-height: 520px;
		margin-left: 110px;
		position: relative;
		z-index: 22;
	}

	@media (min-width: 320px) and (max-width: 575px) {
		img {
			max-height: 420px;
			margin-left: 90px;
		}

		.borderr {
			::before {
				width: 45%;
				right: 85px;
			}
		}
		.entry {
			margin-top: 80px;
		}
	}
`;

export default PersonalInfo;
