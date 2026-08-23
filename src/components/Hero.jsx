import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <ContactForm />
    </>
  );
}

export default Home;

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to My Corporate Site</h1>
      <p>We provide Web Development and Digital Solutions.</p>

      <button>Get Started</button>
    </section>
  );
}

export default Hero;