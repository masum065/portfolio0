import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUserAstronaut,
	faMapSigns,
	faPhoneSquareAlt,
	faAt,
} from '@fortawesome/free-solid-svg-icons';
import { FormTitle } from '../Form/Form';
import styled from 'styled-components';

const infoData = [
	{
		label: 'Name',
		info: 'Masum Billah',
		icon: faUserAstronaut,
	},
	{
		label: 'Location',
		info: 'Dhaka, Bangladesh',
		icon: faMapSigns,
	},
	{
		label: 'Phone',
		info: '+88 0185 0022267',
		icon: faPhoneSquareAlt,
	},
	{
		label: 'Email',
		info: 'masumbillah065@gmail.com',
		icon: faAt,
	},
];

// Info Card
const Info = ({ info }) => {
	return (
		<InfoBox>
			<p className='icon'>
				<FontAwesomeIcon icon={info.icon} />
			</p>
			<h4>{info.label}:</h4>
			<h5>{info.info}</h5>
		</InfoBox>
	);
};

const ContactInfo = () => {
	return (
		<Div>
			<FormTitle>Contact Info</FormTitle>
			<p className='pb-4'>
				Feel free to get in touch with me. I am always open to
				discussing new projects, creative ideas or opportunities to be
				part of your visions.
			</p>

			{infoData.map((info) => (
				<Info info={info} />
			))}
		</Div>
	);
};

const InfoBox = styled.div`
	position: relative;
	padding-left: 76px;
	padding-bottom: 20px;

	:last-child {
		padding-bottom: 0;
	}

	::before {
		content: '';
		left: 50px;
		top: 0;
		height: 100%;
		width: 2px;
		position: absolute;
		background: #343434;
	}

	.icon {
		position: absolute;
		left: 0;
		color: #009e66;
		font-size: 40px;
		top: -8px;
	}

	h4 {
		color: #fff;
		font-size: 15px;
		font-weight: 500;
	}
	h5 {
		font-size: 16px;
		font-weight: 200;
		line-height: 1;
	}
`;

const Div = styled.div`
	padding-left: 30px;
`;

export default ContactInfo;
