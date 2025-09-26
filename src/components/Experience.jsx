import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      id: 1,
      projectHead: "Comcast DevX",
      designation: "Senior Engineer",
      company: "TATA Elxsi, Calicut",
      duration: "Nov 2024 - Present",
      briefDescription:
        "Led the automation-driven migration of monitoring and visualization tools to Comcast’s proprietary platform,significantly enhancing system reliability, scalability, and cost efficiency.",
      technologies: [
        "Python",
        "FastAPI",
        "Git",
        "Grafana",
        "AppDynamics",
        "Datadog",
        "Docker",
        "REST APIs",
      ],
      achievements: [
        "Spearheaded the migration of observability data from platforms like AppDynamics and Datadog to Grafana using a robust Python automation framework , improving operational efficiency by 40%.",
        "Designed and implemented a suite of high-performance RESTful APIs with FastAPI to automate complex data migration workflows, reducing manual effort and migration time.",
        "Ensured data integrity and achieved over 99% accuracy by integrating comprehensive validation and error-handling mechanisms throughout the migration pipeline.",
        "Partnered closely with clients to gather requirements and tailor migration solutions that aligned with their business goals, fostering strong collaboration and customer satisfaction.",
        "Contributed to deployment and basic orchestration using Docker, enabling smooth and scalable cloudoperations.",
      ],
    },
    {
      id: 2,
      projectHead: "Comcast XfinityMobile",
      designation: "Engineer",
      company: "TATA Elxsi, Trivandrum",
      duration: "Sept 2023 - Oct 2024",
      briefDescription:
        "Developed Python-based test automation scripts using the Behave BDD framework to streamline and enhance testing for order placements and network provisioning, improving test reliability and coverage.",
      technologies: [
        "Python",
        "Behave (BDD)",
        "Jenkins",
        "Jira",
        "Xray",
        "MongoDB",
      ],
      achievements: [
        "Created and maintained test automation scripts in Python using Behave, applying BDD principles for clear and efficient test scenarios.",
        "Automated critical workflows including order placement and network connection provisioning, reducing manual testing effort by 50%.",
        "Integrated automated tests with Jenkins CI/CD pipelines for continuous execution and faster feedback loops",
        "Used Jira and Xray for bug tracking and test management, facilitating timely issue resolution and higher product quality.",
        "Employed MongoDB for effective test data management and retrieval.",
        "Collaborated closely with clients to understand testing requirements and deliver reliable solutions.",
      ],
    },
    {
      id: 3,
      projectHead: "Sky DNE",
      designation: "Engineer",
      company: "TATA Elxsi, Trivandrum",
      duration: "Aug 2022 - Aug 2023",
      briefDescription:
        "Engineered RESTful APIs to automate router configuration workflows by simulating (mocking) Cisco, Huawei, and Nokia devices, enabling configuration automation without requiring physical hardware and reducing manual efforts significantly.",
      technologies: [
        "Python",
        "Flask",
        "Postman",
        "Swagger",
        "Git",
        "Agile (Jira)",
      ],
      achievements: [
        "Designed and developed scalable backend APIs in Python to mock router configurations, allowing safe and efficient automation testing and development without real device dependencies.",
        "Enabled users to automate network setup tasks through APIs, replacing manual router configuration processes and streamlining operations.",
        "Followed Agile methodologies (Jira) to deliver iterative improvements and maintain clear communication with stakeholders",
        "Enhanced code quality by implementing thorough unit and integration tests, boosting test coverage by 30% and minimizing defects.",
        "Mentored junior developers and conducted code reviews to maintain high coding standards and support team growth.",
        "Awarded for exceptional performance and impactful contributions.",
      ],
    },
  ];

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">My Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="experience-card"
              onClick={() => openModal(exp)}
            >
              <div className="card-header">
                <h3 className="project-head">{exp.projectHead}</h3>
                <span className="duration">{exp.duration}</span>
              </div>
              <div className="card-content">
                <h4 className="designation">{exp.designation}</h4>
                <p className="company">{exp.company}</p>
                <p className="brief-description">{exp.briefDescription}</p>
              </div>
              <div className="card-footer">
                <span className="click-hint">Click for more details</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedExperience && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-header">
              <h2>{selectedExperience.projectHead}</h2>
              <div className="modal-meta">
                <h3>{selectedExperience.designation}</h3>
                <p>{selectedExperience.company}</p>
                <span className="modal-duration">
                  {selectedExperience.duration}
                </span>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h4>Project Description</h4>
                <p>{selectedExperience.briefDescription}</p>
              </div>
              <div className="modal-section">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {selectedExperience.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="modal-section">
                <h4>Responsibilities</h4>
                <ul className="achievements-list">
                  {selectedExperience.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
