import "./About.css";
import about from "../assets/images/about.jpg";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Image */}
        <div className="about-image-wrapper">
          <img
            src={about}
            alt="NexaTech team"
            className="about-image"
          />
        </div>

        {/* Content */}
        <div className="about-text">
          <span className="about-label">ABOUT US</span>

          <h1>
            About <span>NexaTech</span>
          </h1>

          <p>
            NexaTech is a leading IT company delivering innovative
            software solutions for businesses around the world.
          </p>

          <p>
            Our team specializes in Web Development, Mobile Apps,
            Cloud Computing, Artificial Intelligence, UI/UX Design,
            and Digital Marketing.
          </p>

          <p>
            We combine technology, creativity, and business expertise
            to help organizations grow and achieve their digital goals.
          </p>

          <div className="about-features">
            <div>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>100+</strong>
              <span>Projects Completed</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;