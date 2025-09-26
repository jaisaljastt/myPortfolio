import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "Python", logo: "🐍", category: "backend" },
    { name: "JavaScript", logo: "JS", category: "frontend" },
    { name: "React", logo: "⚛️", category: "frontend" },
    { name: "Django", logo: "🌿", category: "backend" },
    { name: "FastAPI", logo: "⚡", category: "backend" },
    { name: "REST API", logo: "🔌", category: "backend" },
    { name: "MySQL", logo: "🐬", category: "database" },
    { name: "MongoDB", logo: "🍃", category: "database" },
    { name: "Elasticsearch", logo: "🔍", category: "tools" },
    { name: "Docker", logo: "🐳", category: "devops" },
    { name: "AWS", logo: "☁️", category: "devops" },
    { name: "Git", logo: "📊", category: "tools" },
    { name: "GitHub Actions", logo: "🤖", category: "devops" },
    { name: "Grafana", logo: "📊", category: "monitoring" },
    { name: "Postman", logo: "📮", category: "tools" },
    { name: "VS Code", logo: "💻", category: "tools" },
    { name: "Jira", logo: "📝", category: "tools" },
    { name: "HTML5", logo: "🌐", category: "frontend" },
    { name: "CSS3", logo: "🎨", category: "frontend" },
  ];

  const categories = {
    backend: "Backend",
    frontend: "Frontend",
    database: "Database",
    devops: "DevOps",
    tools: "Tools",
    monitoring: "Monitoring",
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <p className="skills-subtitle">
          Technologies I work with to build amazing solutions
        </p>

        <div className="skills-wrapper">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-header">{categories[category]}</h3>
              <div className="skills-cloud">
                {categorySkills.map((skill, index) => (
                  <div key={index} className={`skill-badge skill-${category}`}>
                    <span className="skill-logo">{skill.logo}</span>
                    <span className="skill-text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <h4>3+ Years</h4>
            <p>Python Development</p>
          </div>
          <div className="summary-item">
            <h4>Backend Expert</h4>
            <p>APIs & Microservices</p>
          </div>
          <div className="summary-item">
            <h4>Cloud Ready</h4>
            <p>AWS & Docker</p>
          </div>
          <div className="summary-item">
            <h4>Full Stack</h4>
            <p>Growing Frontend Skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
