import "./Newsletter.css";
import { toast } from "react-toastify";

function Newsletter() {

  const submit = (e) => {

    e.preventDefault();

    toast.success("Subscribed Successfully!");

  };

  return (

    <section className="newsletter">

      <h2>Subscribe to our Newsletter</h2>

      <form onSubmit={submit}>

        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <button>

          Subscribe

        </button>

      </form>

    </section>

  );

}

export default Newsletter;