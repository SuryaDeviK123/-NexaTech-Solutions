import "./Portfolio.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";

function Portfolio() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "enterprise-web-platform",
      image: project1,
      title: "Enterprise Web Platform",
      category: "Web Development",
      description:
        "A scalable enterprise web solution built for modern businesses with high performance and security.",
    },

    {
      id: "ai-analytics-solution",
      image: project2,
      title: "AI Analytics Solution",
      category: "Artificial Intelligence",
      description:
        "An AI-powered analytics platform delivering intelligent insights using machine learning.",
    },

    {
      id: "cloud-management-system",
      image: project3,
      title: "Cloud Management System",
      category: "Cloud Solutions",
      description:
        "A secure cloud platform helping businesses manage applications efficiently.",
    },

    {
      id: "mobile-application",
      image: project4,
      title: "Mobile Banking Application",
      category: "Mobile Development",
      description:
        "A modern mobile application providing secure and seamless digital experiences.",
    },

    {
      id: "healthcare-management-system",
      image: project5,
      title: "Healthcare Management System",
      category: "Software Solution",
      description:
        "A healthcare platform simplifying hospital operations and patient management.",
    },

    {
      id: "uiux-design-project",
      image: project6,
      title: "UI/UX Design Project",
      category: "UI/UX Design",
      description:
        "A creative UI/UX project focused on improving usability and customer engagement.",
    },
  ];

  return (
    <section className="portfolio-section">

      <div className="portfolio-heading">
        <h2>Our Portfolio</h2>

        <p>
          Explore our successful projects that helped businesses
          achieve digital transformation.
        </p>
      </div>

      <div className="portfolio-grid">

        {projects.map((project) => (

          <div className="portfolio-card" key={project.id}>

            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="portfolio-content">

              <span>{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <button
                className="portfolio-btn"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                View Project
                <FaArrowRight />
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Portfolio;