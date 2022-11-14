// Import images
import Image1 from '../images/Work1.jpg';
import Image11 from '../images/Work2.jpg';
import Image79 from '../images/Work3.jpg';

import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'SMART OGSO SELECTOR',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image11,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image79,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'OGSO SMART PRODUCT SELECTOR',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Sports accessories wholesaler',
			},
			{
				id: 3,
				title: 'Website',
				details: 'ogso.vercel.app',
			},
			{
				id: 4,
				title: 'Phone',
				details: '55 516 823',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Smart web application that generate the most suitable ogso product ',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Creation of a web application that generates the perfect ogso product (ski, splitboard) according to the data entered by the user (height, weight, ski style ...) using angular as a frontend and saving the data entered by the user using firebase as a backend.',
			},
	
		],
		SocialSharingHeading: '',
		SocialSharing: [
			
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
