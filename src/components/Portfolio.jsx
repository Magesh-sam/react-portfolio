import React, { useState } from "react";
import "../styles/portfolio.css";

const projects = [
  {
    title: "Portfolio",
    description: "My portfolio developed using React showcasing my works ",
    image: "/portfolio/portfolio.png",
    live: "https://mageshkannan.netlify.app/",
    source: "",
  },
  {
    title: "Blog App",
    description: "CRUD Blog app developed using React",
    image: "/portfolio/blog.png",
    live: "https://react-blog-app-crud.netlify.app/",
    source: "https://github.com/Magesh-sam/Blog-react-app",
  },
  {
    title: "Fake Store E-commerce",
    description: "E-commerce website developed with Add to cart feature using Fake Store API with React",
    image: "/portfolio/fakestore.png",
    live: "https://fakestore-ecommerce-react.netlify.app/",
    source: "https://github.com/Magesh-sam/fakestore-e-commerce",
  },
  {
    title: "Knowyourcountry v2",
    description:
      "React app developed using REST Countries API shows information about country v2",
    image: "/portfolio/country2.png",
    live: "https://knowyourcountryv2.netlify.app/",
    source: "https://github.com/Magesh-sam/knowyourcountryv2",
  },
  {
    title: "Knowyourcountry v1",
    description:
      "React app developed using REST Countries API shows information about country v1",
    image: "/portfolio/country1.png",
    live: "https://knowyourcountry-react.netlify.app/",
    source: "https://github.com/Magesh-sam/knowyourcountry",
  },
  {
    title:'Bill Generator',
    description:'Bill generator developed using React',
    image:'/portfolio/bill.png',
    live:'https://react-bill-generator.netlify.app/',
    source:'https://github.com/Magesh-sam/Billgenerator'
  },
  {
    title: "Random user App",
    description: "Generates random users profile using Random user API with React",
    image: "/portfolio/randomuser.png",
    live:'https://random-user-api-react-app.netlify.app/',
    source: "https://github.com/Magesh-sam/Random-user-api-app",
  },
  {
    title: "Unsplash clone",
    description : 'developed an unsplash clone using unsplash API with React',
    image:'/portfolio/unsplash.png',
    live:'https://unsplash-react-gallery.netlify.app/',
    source:'https://github.com/Magesh-sam/unsplash-react-gallery'
  },
  {
    title:'To-do App',
    description: 'developed a CRUD To-do application with React',
    image:'/portfolio/todo.png',
    live:'https://mageshkannan-to-do-app.netlify.app/',
    source:'https://github.com/Magesh-sam/to-do-app'
  }
  ,{
    title:'Calculator ',
    description:'Developed a Calculator with React',
    image:'/portfolio/calc.png',
    live:'https://mageshkannan-react-calculator.netlify.app/',
    source:'https://github.com/Magesh-sam/react-calculator'
  }
  ,{
    title:'React Custom Pagination',
    description:'developed a Custom Pagination with React',
    image:'/portfolio/pagination.png',
    live:'https://react-custom-pagination-crypto-api.netlify.app/',
    source:'https://github.com/Magesh-sam/react-custom-pagination'
  }
  ,{
    title:'Responsive Sidebar Navbar',
    description:'In large screen Sidebar, In small screen Navbar using JavasScript',
    image:'/portfolio/sidenavbar.png',
    live:'https://magesh-sam.github.io/Responsive-Sidebar-Navbar/',
    source:'https://github.com/Magesh-sam/Responsive-Sidebar-Navbar'
  },{
    title:'Responsive Landing Page',
    description:'Responsive Landing Page with Dark and Light Theme',
    image:'/portfolio/darklight.png',
    live:'https://magesh-sam.github.io/landingpage-darkmode-lightmode/',
    source:'https://github.com/Magesh-sam/landingpage-darkmode-lightmode'
  },{
    title:'Alphabetic Game',
    description:'Alphabetic Game developed using JavaScript',
    image:'/portfolio/alphabet.png',
    live:'https://magesh-sam.github.io/keyboard-game/',
    source:'https://github.com/Magesh-sam/keyboard-game'
  }
  ,{
    title:'BMI Calculator',
    description:'BMI Calculator gives your BMI Score developed using JavaScript',
    image:'/portfolio/bmi.png',
    live:'https://magesh-sam.github.io/BMI-Calculator/',
    source:'https://github.com/Magesh-sam/BMI-Calculator'
  }
];



export default function Portfolio() {
  const [query, setquery] = useState("");

  const handleinput = (e) => {
    setquery(e.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="portfolio">
      <h1>Things I've Build!</h1>
      <input
        className="selectinput"
        type="search"
        value={query}
        onChange={handleinput}
        placeholder="Search Projects..."
      />
      <div className="projects">
        {filteredProjects.length <= 0 && <h1> No Projects found!</h1>}
        {filteredProjects.map((project, index) => (
          <div className="project" key={index}>
            <div className="imgdiv">
              <img
                className="projectimg"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="projectinfo">
              <h1 className="projecttitle">{project.title}</h1>
              <h3 className="projectdesc">{project.description}</h3>
              <div className="btngrp">
                <a className="livebtn" target='_blank' href={project.live}>Live</a>
                <a className="srcbtn" target='_blank' href={project.source}>Source</a>
              </div>
            </div>
          </div>
        ))}
        <div className="morebtnclass">
      <a id="moreworksbtn" target='_blank' href="https://github.com/Magesh-sam?tab=repositories">More Works!</a>
          
          </div>          
      </div>

    </div>
  );
}
