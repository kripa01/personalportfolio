import emoji from "react-easy-emoji";

export const greetings = {
	name: "Kripa Adhikari",
	title: "Hi!, I'm Kripa",
	description:
		"I am currently a Second Year Honours Computer Science Student at Carleton University and I am specializing in Software Engineering. My interests include Software Development, AI and, Front/Back End Development. However, I am super open to learning and improving my skills and would love to dive into other aspects. I am passionate about coding and am actively looking for opportunities to put the skills I have learned to use.",
	resumeLink: "e7db9cb4-76d6-11ec-a980-0cc47a792c0a_id_e7db9cb4-76d6-11ec-a980-0cc47a792c0a.html",
};

export const openSource = {
	githubUserName: "kripa01",
	
};

export const contact = {resumeLink: "https://github.com/kripa01",};

export const socialLinks = {
	github: "https://github.com/kripa01",
	linkedin: "https://www.linkedin.com/in/kripa-adhikari-4339561a2/",
};

export const skillsSection = {
	title: "My Interests",
	subTitle:
		"Interested in Web development, AI and Front End Development.",
	skills: [
		emoji(
			"⚡ Client-side development producing HTML, CSS and JavaScript for a website or Web Application"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Problem Solving", //Insert stack or technology you have experience in
		progressPercentage: "85", //Insert relative proficiency in percentage
	},
	{
		Stack: "Coomunication",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "Carleton University",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "September 2020 - Graduating in 2025",
		descBullets: [
			"Dean's Honour List 2020 - 2021",
			"Chalmers Jack Mackenzie Scolarship for good academic standing 2021 - 2022",
			"Faculty International Excellence Scholarship 2020 - 2021"
		],
	},
	
];

export const experience = [
	{
		role: "Code Club Mentor",
		company: "Revel Academy ",
		companylogo: "/img/icons/common/download.png",
		date: "October 2021 – January 2022",
		desc: "Taught the basics of programming languages such as Python, Java and HTMl to young students who are interesting in coding. Helped them naviagte and debug problems.",
	},
	{
		role: "TechnolGap Mentor",
		company: "TechnolGap",
		companylogo: "/img/icons/common/technolgap.png",
		date: "November 2020 – January 2021",
		desc: "Mentored high-school girls interested in tech in Technolgap's Connect to Tech program. Providing a foundation of knowledge by teaching programming languages and concepts.",
	},
];

export const projects = [
	{
		name: "Restaurants Website",
		desc: "Developed an interactive, responsive and dynamic website using both front-end and back-end technologies such as Javascript, HTML, CSS and Express.js to simulate ordering food online from a variety of restaurants.",
		link: "https://github.com/kripa01",
	},
	{
		name: "Ball Pong Game",
		desc: "Programmed a fun and simple ball and pong game in Java using IntelliJ and GUI libraries.",
		github: "https://github.com/kripa01",
	},
	{
		name: "Calculator",
		desc: "Programmed a simple everyday use calculator in python.",
		github: "https://github.com/kripa01",
	},
];

