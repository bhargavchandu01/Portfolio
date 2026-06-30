import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-header reveal">
        <h2>Technical <span className="text-gradient">Expertise</span></h2>
        <p>A comprehensive overview of my programming, web, and game dev capabilities.</p>
      </div>
      <div className="skills-grid">
        <div className="skill-card glass-panel reveal">
          <h3><i className="fa-solid fa-code"></i> Engineering</h3>
          <SkillItem name="Java (Spring Boot)" width="90%" />
          <SkillItem name="C++ / Python" width="85%" />
          <SkillItem name="JavaScript / React" width="85%" />
        </div>
        <div className="skill-card glass-panel reveal">
          <h3><i className="fa-solid fa-gamepad"></i> Web Dev</h3>
          <SkillItem name="React " width="90%" />
          <SkillItem name="Node" width="80%" />
          <SkillItem name="Spring Boot" width="75%" />
        </div>
        <div className="skill-card glass-panel reveal">
          <h3><i className="fa-solid fa-server"></i> Tools & Delivery</h3>
          <SkillItem name="PostgreSQL / Oracle" width="85%" />
          <SkillItem name="Git Version Control" width="90%" />
          <SkillItem name="Gradle / Render Hosting" width="80%" />
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ name, width }) => (
  <div className="skill-item">
    <div className="skill-info"><span>{name}</span></div>
    <div className="progress-track">
      <div className="progress-fill" data-width={width} style={{ width: '0%' }}></div>
    </div>
  </div>
);

export default Skills;
