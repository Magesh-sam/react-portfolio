import React from "react";
import "../styles/resume.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaLinux,
  FaAws,
  FaDownload,
} from "react-icons/fa";
import {
  SiPowerbi,
  SiAdobephotoshop,
  SiRedux,
  SiTypescript,
} from "react-icons/si";

const certifications = [
  {
    title: "Meta Front-End Developer by Meta",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Responsive web development",
      "React",
      "Version Control",
      "Basic UI/UX",
    ],
    date: "March 2023",
  },
  {
    title: "HTML and CSS in depth",
    skills: [
      "Semantic HTML tags",
      "Meta tags",
      "Flex box",
      "Grid layout",
      "Animation",
      "Best practices of HTML/CSS",
    ],
    date: "January 2023",
  },
  {
    title: "Programming with JavaScript",
    skills: [
      "Javascript",
      "ES 6",
      "Functional Programming",
      "Object oriented programming",
    ],
    date: "January 2023",
  },
  {
    title: "Advanced React",
    skills: [
      "React",
      "States",
      "Props",
      "Hooks",
      "Forms",
      "Routing",
      "list rendering",
      "API",
    ],
    date: "February 2023",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    skills: [
      "EC2",
      "IAM",
      "S3",
      "Security",
      "Web Servers",
      "Load Balancers",
      "Auto Scaling",
      "Linux",
    ],
    date: "June 2021 - 24",
  },
  {
    title: "Version Control",
    skills: ["Version Control", "Project Management", "Git", "Github", "CLI"],
    date: "January 2023",
  },
];

export default function Resume() {
  return (
    <div className="resume-container resume">
      <h1 className="heading">Resume</h1>

      <div className="myresume">
        <div className="resume-hero">
          <h3 className="hero-name">Mageshkannan Annathurai</h3>
          <h4 className="hero-title">Fron-End Developer</h4>
          <p className="hero-desc">
            Web engineer with two years' expertise using React to create
            flexible web apps. Highly driven. knowledgeable about
            React-Bootstrap and MUI for design, as well as HTML, CSS, Bootstrap,
            and JavaScript. React components, props, and state and routing are
            all very well understood. Extra knowledge of Typescript and Redux
            Toolkit
          </p>
        </div>
      </div>
      <div className="skills-container">
        <h3>Skills:</h3>
        <div className="skills">
          <div title="HTML">
            <FaHtml5 title="HTML" />
          </div>
          <div title="CSS">
            <FaCss3Alt title="CSS" />
          </div>
          <div title="Bootstrap">
            <FaBootstrap title="Bootstrap" />
          </div>
          <div title="JavaScript">
            <FaJsSquare title="JavaScript" />
          </div>
          <div title="Typescript">
            <SiTypescript title="Typrscript" />
          </div>
          <div title="React">
            <FaReact title="React" />
          </div>
          <div title="Redux">
            <SiRedux title="Redux" />
          </div>
          <div title="Github">
            <FaGithub title="Github" />
          </div>
          <div title="Linux">
            <FaLinux title="Linux" />
          </div>
          <div title="AWS">
            <FaAws title="AWS" />
          </div>
          <div title="PowerBI">
            <SiPowerbi title="PowerBI" />
          </div>
          <div title="Photoshop">
            <SiAdobephotoshop title="Photoshop" />
          </div>
        </div>
      </div>
      <div className="experience">
        <h3 c>Experience</h3>
        <h4>
          Capgemini India Pvt Ltd,
          <span className="exp-duration"> April 2021-Present</span>
        </h4>
        <h5>Senior Software Engineer</h5>
        <div className="cg-project">
          <h4 className="project-title">
            Millenial Garage Project Tracker,
            <span className="exp-duration"> July 2021 - Oct 2021</span>
          </h4>
          <ul>
            <li>
              Reviewed and Cleaned live dataset and Filtered data for insights
            </li>
            <li>Analyzed the dataset to get project's status</li>
            <li>Developed an Interactive Dashboard with PowerBI</li>
            <li>
              The Dashboard can filter out data based Geolocation, Project
              Status, Project Managers
            </li>
          </ul>
        </div>
        <div className="cg-project">
          <h4 className="project-title">
            Internal Project Management,
            <span className="exp-duration"> Oct 2021 - Dec 2021</span>
          </h4>
          <ul>
            <li>
              Developed a React component "Add to Project" for quick creation of
              new projects using a user- friendly form with react-hook-forms{" "}
            </li>
            <li>
              Created "Project Listing" component for displaying existing
              projects in an organized and user- friendly manner
            </li>
            <li>
              Implemented filter and sorting features in the project listing
              page for easy organization of projects based on specific criteria,
              with React routing for seamless navigation between pages
            </li>
            <li>
              Utilized React-Bootstrap for styling the components, ensuring
              consistency and responsiveness across different devices and
              browsers
            </li>
            <li>
              Added React routing for seamless navigation between the "Add to
              Project" and "Project Listing" pages
            </li>
          </ul>
        </div>
      </div>
      <div className="education">
        <h3>Education</h3>
        <h4>Bachelor of Engineering - Computer Science and Engineering</h4>
        <h5>
          Adhiyamaan College of Engineering, Hosur - October 2016 to April 2020
        </h5>
      </div>
      <div className="certifications-wrapper">
        <h3>Certifications</h3>
        <div className="certifications">
          {certifications.map((certificate, index) => (
            <div className="certificate" key={index}>
              <h3>{`${certificate.title}, ${certificate.date}`}</h3>
              <div className="skills">
                <h4>Skills:</h4>
                {certificate.skills.map((skill, index) => (
                  <p key={index} className="skill">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <a className="resumebtn" href="/Mageshkannan Resume.pdf" target="_blank">
        <FaDownload /> Resume
      </a>
    </div>
  );
}
