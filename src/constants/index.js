import portfolio from "../assets/projects/portfolio.png";
import netflix from "../assets/projects/netflixclone.png";
import aifinity from "../assets/projects/Aifinity.png";
import chatgpt from "../assets/projects/chatgptclone.png";
import weatherapp from "../assets/projects/weatherapp.png";
export const HERO_CONTENT = `I am Amulya Raj, a passionate and driven Computer Science and Engineering student at Lovely Professional University. With a strong foundation in full-stack development, artificial intelligence, and problem-solving, I have honed my technical skills through various projects and hackathons. As the President of Converse Plus, I have led multiple events, meetings, and sessions, fostering a dynamic tech community and enhancing collaboration among peers.`;

export const ABOUT_TEXT = `I specialize in programming languages like C/C++, Java, JavaScript, and Python, with expertise in frontend frameworks such as React.js, backend technologies like Node.js and Express, and databases including MongoDB and PostgreSQL. I have actively participated in hackathons like SIH 2024 and Hack-a-Throne 1.0, where I developed innovative solutions to real-world problems.

My project portfolio includes AIfinity: Learn and Earn Platform, a ChatGPT Clone, and a Weather Search App, showcasing my ability to build scalable and impactful applications. Additionally, my internship at Khwab Foundation allowed me to contribute to social causes by working on education policy reforms. I am always eager to learn and explore new technologies, striving to bridge the gap between technology and real-world challenges through innovation and leadership.`;

export const EXPERIENCES = [
  {
    year: "Feb 2025",
    role: "AI/ML Participant - Tabu Quest",
    company: "Infineon Technologies",
    description: `Participated in the Infineon Hackathon 2025 at Lovely Professional University, Punjab, and earned a certificate of participation. Received an opportunity for an interview at Infineon Technologies. 
    Key learnings included data cleaning techniques, training ML models, NLP algorithms, and understanding LLMs and their applications. It was a great learning experience beyond my core domain.`,
    technologies: ["Python", "Pandas", "TensorFlow", "NLP"],
  },
  {
    year: "Sep 2023 – Feb 2025",
    role: "President",
    company: "Converse Plus, LPU, Punjab",
    description: `Led the Converse Plus Club in strategic marketing initiatives, attracting new members and fostering a vibrant community of 250+ members. Organized and coordinated 10+ events, 20+ meetings, and 30+ sessions, collaborating with seniors, batchmates, and teachers to establish a notable presence among university clubs.`,
    technologies: [
      "Leadership",
      "Event Management",
      "Marketing",
      "Communication skills",
    ],
  },
  {
    year: "September 2024",
    role: "Participant",
    company: "Hack-a-Throne 1.0 by GeeksforGeeks & AIESEC, LPU",
    description: `Collaborated on a smart education solution to improve learning accessibility for underprivileged students, qualifying for two rounds. 
    Developed a personalized learning platform using HTML, CSS, JavaScript, MongoDB, and Bootstrap, incorporating feedback from industry experts.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Bootstrap",
      "Node js",
    ],
  },
  {
    year: "Sep 2024 - Sep 2024",
    role: "Participant - SIH 2024",
    company: "Lovely Professional University, Punjab",
    description: `Our project aimed to provide direct market access to farmers, eliminating middlemen and increasing their profits while ensuring a seamless process overall. It was a problem statement under the Ministry of Agriculture, designed to empower farmers with better sales opportunities. 
    Worked on frontend development using React and guided the team in progress tracking, R&D, and technical implementation. The project utilized React for the frontend, Firebase for the database, and Kotlin for app development.`,
    technologies: ["React.js", "Firebase", "Kotlin"],
  },
  {
    year: "June 2023 - July 2023",
    role: "Summer Intern",
    company: "Khwab Foundation, Motihari, Bihar",
    description: `Collaborated with three NGO branches, meeting 100+ parents of underprivileged children and assisting 20+ students in resuming their education. 
    Supported local authorities in rescuing ten child laborers and facilitated communication with officials, including the District Magistrate, District Education Officer, and Prime Minister's Office, regarding education policy reforms.`,
    technologies: ["Social Work", "Public Policy Reforms", "Communication"],
  },
];

export const PROJECTS = [
  {
    title: "Aifinity",
    image: aifinity,
    description:
      "A Learn and Earn Platform where users earn points through educational activities like quizzes, games, and content creation. Points can be redeemed for courses or study materials. Features social media integration for personalized learning.",
    technologies: ["HTML", "CSS", "JavaScript", "Express", "MongoDB"],
    futureScope: "Integrating AI and LLMs to enhance efficiency.",
  },
  {
    title: "ChatGPT Clone",
    image: chatgpt,
    description:
      "A ChatGPT-like chatbot built using React.js that interacts with users using API-driven responses.",
    technologies: ["React.js", "API"],
  },
  {
    title: "Weather Search App",
    image: weatherapp,
    description:
      "A simple weather dashboard application that allows users to search for weather updates of any city using the OpenWeather API.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "OpenWeather API",
      "Font Awesome",
    ],
  },
  {
    title: "Netflix Clone",
    image: netflix,
    description:
      "A sleek and responsive HTML/CSS Netflix clone with a polished UI and seamless navigation. Future plans include UI enhancements and additional features.",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website built with React.js to showcase projects, skills, and contact information.",
    technologies: ["React.js"],
  },
];

export const CONTACT = {
  address: "C/o Lovely Professional University, Phagwara, Punjab",
  phoneNo: "+91 620****115 ",
  email: "amulyaraj1234@gmail.com",
};
