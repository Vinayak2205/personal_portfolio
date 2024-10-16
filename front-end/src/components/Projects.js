import React from "react";
import "../style/Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project">
        <h3>IoT Sensor Monitoring System</h3>
        <p>
          As a Full Stack Developer at VerveTronics Imagineering Pvt. Ltd., I
          led the development of an <b>IoT Sensor Monitoring System</b>,
          utilizing ReactJS for the frontend and Java for the backend. This
          system improved data retrieval latency by 30%-40%, and user engagement
          increased by 40%. I integrated a custom alert system, which reduced
          critical event response time by 50% through instant email
          notifications. I also engineered backend optimizations that resulted
          in a 25% reduction in API response time, ensuring smooth communication
          between the frontend and backend.
        </p>
        <p>
          Additionally, I conducted end-to-end testing, which improved system
          reliability and ensured that the system could efficiently handle large
          datasets. This project enhanced the operational efficiency of sensor
          data monitoring for the company.
        </p>
      </div>

      <div className="project">
        <h3>Monitor App</h3>
        <p>
          I designed and developed a robust <b>Monitor App</b> to oversee
          critical services running on servers within the organization. This app
          was built using Java, Kotlin, and Thymeleaf with Spring Boot. The
          application features automated service monitoring, detecting service
          failures and sending real-time email notifications to stakeholders,
          enabling rapid response and minimizing downtime.
        </p>
        <p>
          The frontend provided a user-friendly interface, where users could
          monitor real-time service statuses and analyze historical data for
          performance insights. This project streamlined internal operations,
          greatly enhancing service reliability and operational efficiency.
        </p>
      </div>

      <div className="project">
        <h3>Ticket Provisioning System (TPS)</h3>
        <p>
          Collaborating with eSol, a client in the travel industry, I
          contributed to the development of a{" "}
          <b>Ticket Provisioning System (TPS)</b> using Kotlin and Micronaut for
          the backend and React Native for the frontend. The project aimed at
          consolidating services for travel agencies across Germany, providing a
          white-label mobile application solution for managing bookings,
          real-time updates, and user authentication.
        </p>
        <p>
          I implemented custom features tailored to client requirements, such as
          booking management, secure user authentication, and real-time
          notifications. These features not only enhanced the app's usability
          but also streamlined operations for travel agencies, improving
          efficiency and customer satisfaction within the German travel market.
        </p>
      </div>
    </section>
  );
};

export default Projects;
