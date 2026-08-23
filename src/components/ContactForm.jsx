function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <p>Have a question? We'd love to hear from you.</p>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Enter your name"
        />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="tel"
          placeholder="Enter your phone number"
        />

        <input
          type="text"
          placeholder="Subject"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>
    </section>
  );
}

export default Contact;