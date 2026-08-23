import "./Contact.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";


function Contact(){

const form = useRef();


const sendEmail = (e) => {

e.preventDefault();


emailjs.sendForm(

"service_i4wifyl",

"template_4oioxz1",

form.current,

"hUF4mx74-qMXDAmCh"

)

.then(()=>{

alert("Message Sent Successfully!");

form.current.reset();

})

.catch((error)=>{

console.log(error);

alert("Failed to send message!");

});


};



return(


<div className="contact-page">



<section className="contact-hero">


<motion.div

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

>


<h1>
Contact <span>NexaTech</span>
</h1>


<p>
Have a project idea? Let's discuss and build
something amazing together.
</p>


</motion.div>


</section>






<section className="contact-section">



<div className="contact-info">


<h2>
Get In Touch
</h2>



<p>
We are always ready to help you with your
technology requirements.
</p>





<div className="info-box">

<FaPhone/>

<div>

<h3>
Phone
</h3>

<p>
+91 98765 43210
</p>

</div>

</div>






<div className="info-box">


<FaEnvelope/>


<div>

<h3>
Email
</h3>

<p>
contact@nexatech.com
</p>

</div>

</div>






<div className="info-box">


<FaMapMarkerAlt/>


<div>

<h3>
Address
</h3>

<p>
Hyderabad, Telangana, India
</p>

</div>

</div>



</div>








<motion.form

className="contact-form"

ref={form}

onSubmit={sendEmail}


initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.7
}}

viewport={{
once:true
}}

>


<h2>
Send Message
</h2>




<input

type="text"

name="name"

placeholder="Your Name"

required

/>





<input

type="email"

name="email"

placeholder="Your Email"

required

/>





<input

type="text"

name="subject"

placeholder="Subject"

/>





<textarea

name="message"

placeholder="Your Message"

rows="6"

required

></textarea>





<button type="submit">

Send Message

<FaPaperPlane/>

</button>



</motion.form>





</section>







<section className="map-section">


<h2>
Find Us
</h2>


<div className="map-box">

Google Map Location

</div>


</section>





</div>


);


}


export default Contact;