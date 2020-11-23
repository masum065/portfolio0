import creativeAgency from '../../../Images/portfolio/crative-agency.jpg';
import volunteerNetwork from '../../../Images/portfolio/Volunteer-Network.jpg';
import doctosPortal from '../../../Images/portfolio/Doctors-portal.jpg';
import travelGuru from '../../../Images/portfolio/travel-guru.jpg';
import myMotors from '../../../Images/portfolio/myMotors.jpg';
import apartmentHouse from '../../../Images/portfolio/apartment-houses.jpg';
import athena from '../../../Images/portfolio/Athena.jpg';
import accesories from '../../../Images/portfolio/rj-accesories.jpg';
import reen from '../../../Images/portfolio/reen.jpg';

const portfolioData = [
	{
		image: creativeAgency,
		title: 'Creative Agency',
		description: `Full stack agency service web application where any user can place any service order from his user panel to view its status and give feedback of the service. With the admin can add new services from its panel, manage user orders and make someone as new admin.`,
		technology: [
			'React',
			'Bootstrap',
			'Node',
			'Express',
			'Mongodb',
			'Firebase',
			'Styled Component',
		],
		link: {
			git: 'https://github.com/masum065/creative-agency-client',
			site: 'https://crative-agency-0.web.app/',
		},
		category: 'fullstack',
	},
	{
		image: apartmentHouse,
		title: 'Apartment House',
		description: `Full stack house rental web apps. where any user can register, login by google and facebook, can booking  their desired apartment, get detail of the apartment. Easy description of all apartments. Admin dashboard, monitoring whole system, can insert new house.They may also contact
		
		`,
		technology: [
			'React',
			'Bootstrap',
			'Node',
			'Express',
			'Mongodb',
			'Firebase',
			'SCSS',
		],
		link: {
			git: 'https://github.com/masum065/apartment-hunt-client',
			site: 'https://apartment-hunt-0.web.app/',
		},
		category: 'fullstack',
	},
	{
		image: volunteerNetwork,
		title: 'Volunteer Network',
		description: `In this MERN project you as a volunteer, you can subscribe/unsubscribe one or more events as you wish with your own information. Admin will be able to control the information of all volunteers and add new events.`,
		technology: [
			'React',
			'Bootstrap',
			'Node',
			'Express',
			'Mongodb',
			'Multer',
			'Firebase',
			'SVG Icon',
		],
		link: {
			git: 'https://github.com/masum065/-volunteer-network-client-0',
			site: 'https://volunteer-network-0.web.app/',
		},
		category: 'fullstack',
	},
	{
		image: doctosPortal,
		title: 'Doctors Portal',
		description: `It's a MERN stack project where a patient can book an appointment. Doctors can check/approve appointments and give prescriptions to patients`,
		technology: [
			'React',
			'Bootstrap',
			'Node',
			'Express',
			'Mongodb',
			'Multer',
			'Firebase',
			'FontAwesome',
			'SVG Icon',
		],
		link: {
			git: 'https://github.com/masum065/doctors-portal-client',
			site: 'https://doctors-portal-0-a1145.web.app/',
		},
		category: 'fullstack',
	},
	{
		image: travelGuru,
		title: 'Travel Guru',
		description: `This simple site is made for travellers where they can search with the place and the date. Then they can see that on that time which hotels are available and the details of hotel rooms, prices and facilities.
        `,
		technology: [
			'React',
			'Google Map API',
			'Metarial UI',
			'Firebase',
			'Netlify',
			'Date Picker',
			'Oction Iocn Pack',
			'SVG Icon',
		],
		link: {
			git: 'https://github.com/masum065/travel-guru',
			site: 'https://travel-guruu.netlify.app/',
		},
		category: 'frontend',
	},
	{
		image: athena,
		title: 'Athena',
		description: `This is a fully responsive landing page.A navbar has been added at the very top of the page which is
		responsive, When it will be used in a smaller device the navbar appears as a hamburger menu.The banner of this page has an eye-catching outlook with an illustration photo, attractive background decoration, and a fancy button.
		
        `,
		technology: [
			'React',
			'Bootstrap',
			'React Bootstrap',
			'Netlify',
			'SCSS',
			'CSS',
		],
		link: {
			git: 'https://github.com/masum065/athena-client',
			site: 'https://athena0.netlify.app/',
		},
		category: 'frontend',
	},
	{
		image: myMotors,
		title: 'MyMotors',
		description: `It's responsive ecomarce HTML site. Bootstrap Fontawesom and some JQuery plugins have been used to create it.`,
		technology: [
			'HTML',
			'CSS3',
			'Bootstrap',
			'Ionicons',
			'Revulation Slider',
			'Animate Js',
			'LightBox',
			'Owl Carousel',
			'Paralax Effect',
		],
		link: {
			git: 'https://github.com/masum065/mymotors',
			site: 'https://mymotors.netlify.app/',
		},
		category: 'html',
	},
	{
		image: reen,
		title: 'Reen',
		description: `It's responsive showcase HTML site. Its especially a huge mega menu with some Pure CSS. 
		Make HTML markup so beautiful that even if new data is injected, it won't break the layout.`,
		technology: [
			'HTML',
			'CSS3',
			'Bootstrap',
			'Fontawesome',
			'Slider',
			'LightBox',
			'Owl Carousel',
		],
		link: {
			git: 'https://github.com/masum065/reen',
			site: 'https://masum065.github.io/reen/',
		},
		category: 'html',
	},
	{
		image: accesories,
		title: 'Accessories',
		description: `It's full responsive cute tiny HTML site. Bootstrap Fontawesom and some JQuery plugins have been used to create it.`,
		technology: [
			'HTML',
			'CSS3',
			'Bootstrap',
			'Ionicons',
			'WOW js',
			'Animate Js',
			'LightBox',
			'Owl Carousel',
		],
		link: {
			git: 'https://github.com/masum065/rj-accessories',
			site: 'https://masum065.github.io/rj-accessories/',
		},
		category: 'html',
	},
];

export default portfolioData;
