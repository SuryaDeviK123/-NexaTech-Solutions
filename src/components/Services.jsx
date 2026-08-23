import { Link } from "react-router-dom";
import "./Services.css";

import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaPaintBrush,
  FaRobot,
  FaBullhorn,
  FaArrowRight
} from "react-icons/fa";


function Services() {

  const services = [

    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Modern, responsive and scalable websites built with latest technologies.",
      link: "/web-development"
    },


    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      description:
        "Powerful Android and mobile applications with excellent user experience.",
      link: "/mobile-development"
    },


    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description:
        "Secure and reliable cloud services to improve business performance.",
      link: "/cloud-solutions"
    },


    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description:
        "Creative and user-friendly designs that improve customer experience.",
      link: "/uiux-design"
    },


    {
      icon: <FaRobot />,
      title: "Artificial Intelligence",
      description:
        "AI-powered solutions using machine learning and intelligent automation.",
      link: "/artificial-intelligence"
    },


    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      description:
        "Grow your business with SEO, social media and online marketing strategies.",
      link: "/digital-marketing"
    }

  ];



  return (

    <section className="services-section">


      <div className="section-title">

        <h2>
          Our Services
        </h2>

        <p>
          We provide innovative technology solutions
          to help businesses grow digitally.
        </p>

      </div>



      <div className="services-grid">


        {
          services.map((service,index)=>(


            <div 
              className="service-card"
              key={index}
            >


              <div className="service-icon">

                {service.icon}

              </div>



              <h3>

                {service.title}

              </h3>



              <p>

                {service.description}

              </p>



              <Link 
                to={service.link}
                className="service-btn"
              >

                Learn More

                <FaArrowRight/>

              </Link>


            </div>


          ))
        }


      </div>


    </section>

  );

}


export default Services;