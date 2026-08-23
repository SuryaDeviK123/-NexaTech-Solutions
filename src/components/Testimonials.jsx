import "./Testimonials.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechVision",
    text: "NexaTech Solutions transformed our business with a modern and scalable web platform.",
  },
  {
    name: "Sarah Johnson",
    role: "Founder, StartupX",
    text: "Their team delivered our mobile app on time with excellent quality and support.",
  },
  {
    name: "Michael Brown",
    role: "Project Manager, CloudCorp",
    text: "Professional developers, outstanding communication, and innovative solutions.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            whileHover={{ y: -8 }}
          >
            <p>"{item.text}"</p>

            <h3>{item.name}</h3>

            <span>{item.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;