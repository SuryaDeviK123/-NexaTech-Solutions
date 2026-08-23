import "./ProjectDetails.css";

import { useParams } from "react-router-dom";


import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";


function ProjectDetails(){


const {id}=useParams();



const projects={


"enterprise-web-platform":{

title:"Enterprise Web Platform",

image:project1,

technology:"React.js, Node.js, Database",

overview:
"A modern enterprise website developed to improve business operations and customer engagement."

},



"ai-analytics-solution":{

title:"AI Analytics Solution",

image:project2,

technology:"Python, Machine Learning, AI",

overview:
"An AI-based analytics system providing intelligent insights using data processing."

},



"cloud-management-system":{

title:"Cloud Management System",

image:project3,

technology:"AWS, Cloud Computing",

overview:
"A secure cloud solution designed for scalable business applications."

},



"mobile-application":{

title:"Mobile Application",

image:project4,

technology:"Android, Mobile UI",

overview:
"A responsive mobile application providing smooth user experience."

},



"healthcare-management-system":{

title:"Healthcare Management System",

image:project5,

technology:"Web Technologies, Database",

overview:
"A healthcare platform developed for efficient digital management."

},



"uiux-design-project":{

title:"UI/UX Design Project",

image:project6,

technology:"Figma, Adobe XD",

overview:
"A modern interface design project focused on user experience."

}


};



const project=projects[id];



if(!project){

return <h2>Project Not Found</h2>

}



return(


<section className="project-details">



<img
src={project.image}
alt={project.title}
/>



<h1>
{project.title}
</h1>



<h2>
Project Overview
</h2>


<p>
{project.overview}
</p>




<h2>
Technologies Used
</h2>


<p>
{project.technology}
</p>




<h2>
Key Features
</h2>


<ul>

<li>Modern User Interface</li>

<li>Responsive Design</li>

<li>High Performance</li>

<li>Secure Architecture</li>

</ul>



</section>


)


}


export default ProjectDetails;