import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const PortfolioCard = (props) => {
	const {
		title,
		image,
		description,
		link: { git, site },
	} = props.portfolio;

	const calc = (x, y) => [
		-(y - window.innerHeight / 2) / 110,
		(x - window.innerWidth / 2) / 50,
		1.1,
	];
	const trans = (x, y, s) =>
		`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
	const [propss, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 5, tension: 350, friction: 40 },
	}));

	return (
		<Col lg={4}>
			<Div background={image}>
				<animated.div
					className='hover-content'
					onMouseMove={({ clientX: x, clientY: y }) =>
						set({ xys: calc(x, y) })
					}
					onMouseLeave={() => set({ xys: [0, 0, 1] })}
					style={{ transform: propss.xys.interpolate(trans) }}
				>
					<h3>{title}</h3>
					<p>{description}</p>

					<div className='technology'>
						<div>{props.children}</div>
					</div>
					<div className='url'>
						<a
							href={git}
							title='Source Filse'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a
							href={site}
							title='Go Live'
							target='_blank'
							rel='noreferrer'
						>
							<FontAwesomeIcon icon={faExternalLinkAlt} />
						</a>
					</div>
				</animated.div>
			</Div>
		</Col>
	);
};

const Div = styled.div`
	background-color: #161616;
	background-image: url('${(props) => props.background}');
	background-size: cover;
	background-position: top;
	min-height: 375px;
	position: relative;
	z-index: 1;
	transition: 0.3s;
	margin-bottom: 40px;
	margin-left: 5px;
	margin-right: 5px;

	}
	:hover{
		transform: scale(1.02);
		.hover-content{ opacity: 1;}
	}
	.hover-content {
		background: #161616;
		position: absolute;
		bottom: 0;
		padding: 22px;
		font-size: 12px;
		transition: 0.3s;
		z-index: 10;
		opacity: 0;

		h3 {
			color: #fff;
			font-size: 20px;
		}
		.technology {
			position: relative;
			width: 100%;
			p {
				display: inline-block;
				padding: 3px 5px;
				box-shadow: 1px 1px 4px 0px #ffffff36;
				color: #14b57c;
				font-size: 11px;
				margin-right: 3px;
			}
		}
		.url {
			font-size: 22px;
			float: right;
			color: #fff;
			a {
				color: #fff;
				margin-left: 14px;
				transitoin: .3s;

				:hover{
					color: #53FDC1;
				}
			}
		}
	}
`;
export default PortfolioCard;
