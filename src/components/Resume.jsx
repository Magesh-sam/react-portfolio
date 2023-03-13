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
  FaDownload
} from "react-icons/fa";
import { SiPowerbi, SiAdobephotoshop } from "react-icons/si";

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
          <h4 className="hero-title">
            Fron-End Developer
          </h4>
          <p className="hero-desc">
            As a developer with expertise in responsive web applications, I
            bring a wealth of experience to any project. I am passionate about
            overcoming challenges and am excited to take on new opportunities
            that will enable me to continue to develop my skills.
          </p>
        </div>
      </div>
      <div className="skills-container">
        <h3>Skills:</h3>
        <div className="skills">
          <div title="HTML">
            <FaHtml5 title="HTML"   />
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
          <div title="React">
            <FaReact title="React" />
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
            <SiPowerbi  title="PowerBI" />
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
            <span className="exp-duration"> July 2021 - Dec 2021</span>
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
      </div>
      <div className="education">
      <h3>Education</h3>
        <h4>Bachelor of Engineering - Computer Science and Engineering</h4>
        <h5>Adhiyamaan College of Engineering, Hosur - October 2016 to April 2020</h5>
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
      <a className="resumebtn" href="/Mageshkannan Resume.pdf" target='_blank'><FaDownload/> Resume</a>
    </div>
  );
}
