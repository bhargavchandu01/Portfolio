import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-header reveal">
        <h2>Selected <span className="text-gradient">Projects</span></h2>
        <p>A showcase of robust architectural designs and interactive productions.</p>
      </div>
      <div className="projects-grid">
        
        <div className="project-card glass-panel reveal">
          <div className="project-img-wrapper">
            <img src="/assets/operation_firestorm.png" alt="Operation Firestorm" className="project-img"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80'; }} />
          </div>
          <div className="project-content">
            <h3>Operation Firestorm (2025)</h3>
            <p>Multiplayer Game Development in Unreal Engine 5. Built scalable multiplayer hosting infrastructure ensuring fluid synchronization and authoritative combat mechanics.</p>
            <div className="tags">
              <span className="tag">Unreal Engine 5</span>
              <span className="tag">Multiplayer</span>
              <span className="tag">C++</span>
            </div>
            <div className="project-links-row">
              <a href="https://github.com/placeholder" target="_blank" rel="noreferrer" className="project-btn">
                <i className="fa-brands fa-github"></i> Repository
              </a>
            </div>
          </div>
        </div>

        <div className="project-card glass-panel reveal">
          <div className="project-img-wrapper">
            <img src="/assets/legacies_untold.png" alt="Legacies Untold" className="project-img"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'; }} />
          </div>
          <div className="project-content">
            <h3>Legacies Untold (2025)</h3>
            <p>RPG Mobile Project developed with Unreal Engine 5 (Currently under Closed Testing in Google Play). Deep progression logic and memory-optimized mobile scaling.</p>
            <div className="tags">
              <span className="tag">Unreal Engine 5</span>
              <span className="tag">Mobile Optimization</span>
            </div>
            <div className="project-links-row">
              <a href="https://github.com/placeholder" target="_blank" rel="noreferrer" className="project-btn">
                <i className="fa-brands fa-github"></i> Repository
              </a>
            </div>
          </div>
        </div>

        <div className="project-card glass-panel reveal">
          <div className="project-img-wrapper">
            <img src="/assets/Telecom.png" alt="Telecom Plan Comparator" className="project-img"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'; }} />
          </div>
          <div className="project-content">
            <h3>Telecom Comparator</h3>
            <p>Full-stack web application orchestrating secure APIs via Spring Boot and PostgreSQL. Deployed seamlessly to Render with complete CI/CD setup.</p>
            <div className="tags">
              <span className="tag">Spring Boot</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Render</span>
            </div>
            <div className="project-links-row">
              <a href="https://github.com/SubLochan/Telecom-Plan-comparator_BackEnd" target="_blank" rel="noreferrer" className="project-btn">
                <i className="fa-brands fa-github"></i> Repository
              </a>
              <a href="https://telecom-plan-comparator-frontend-p33t.onrender.com" target="_blank" rel="noreferrer" className="project-btn primary-link">
                <i className="fa-solid fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Projects;
