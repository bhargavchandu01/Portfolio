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
            <img src="/assets/TangleTrail.jpg" alt="TangleTrail" className="project-img"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80'; }} />
          </div>
          <div className="project-content">
            <h3>TangleTrail (2023 - 2024)</h3>
            <p>3D Adventure Android Mobile Game consisting of a maze and parkour.</p>
            <div className="tags">
              <span className="tag">Unreal Engine 5</span>
              <span className="tag">Blueprints</span>
              <span className="tag">Android SDK,NDK</span>
              <span className="tag">Gradle</span>
              <span className="tag">C++</span>
            </div>
          
            <div className="project-links-row">
              <a href="https://github.com/SubLochan/TangleTrail" target="_blank" rel="noreferrer" className="project-btn">
                <i className="fa-brands fa-github"></i> Repository
              </a>
            </div>
            </div>
          
        </div>
        
        <div className="project-card glass-panel reveal">
          <div className="project-img-wrapper">
            <img src="/assets/operation_firestorm.png" alt="Operation Firestorm" className="project-img"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80'; }} />
          </div>
          <div className="project-content">
            <h3>Operation Firestorm (2023 - 2025)</h3>
            <p>Multiplayer Game Development in Unreal Engine 5. Built scalable multiplayer hosting infrastructure ensuring fluid synchronization and authoritative combat mechanics.</p>
            <div className="tags">
              <span className="tag">Unreal Engine 5</span>
              <span className="tag">Multiplayer</span>
              <span className="tag">C++</span>
            </div>
          
            <div className="project-links-row">
              <a href="https://github.com/SubLochan/OpreationFirestorm" target="_blank" rel="noreferrer" className="project-btn">
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
            <h3>Legacies Untold (2025 - 2026)</h3>
            <p>RPG Mobile Project developed with Unreal Engine 5 (Published in Google Play). Deep progression logic and memory-optimized mobile scaling.</p>
            <div className="tags">
              <span className="tag">Unreal Engine 5</span>
              <span className="tag">Mobile Optimization</span>
            </div>
            <div className="project-links-row">
              <a href="https://github.com/SubLochan/ShadowBound" target="_blank" rel="noreferrer" className="project-btn">
                <i className="fa-brands fa-github"></i> Repository
              </a>
              <a href="https://youtu.be/D7MnZhcHZO4?si=3zq4B5mbcSv6bruJ" target="_blank" rel="noreferrer" className="project-btn primary-link">
                <i className="fa-solid fa-external-link-alt"></i> Live Demo
              </a>
             <a 
  href="https://play.google.com/store/apps/details?id=com.Lochan.Legacies_Untold" 
  target="_blank" 
  rel="noreferrer" 
  className="project-btn primary-link"
>
  <i className="fa-brands fa-google-play"></i> Play Store
</a>
            </div>
          </div>
        </div>

        <div className="project-card glass-panel reveal">
          <div className="project-img-wrapper">
            <img src="/assets/RabbitRush.png" alt="Rabbit Rush" className="project-img"
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'; }} />
          </div>
          <div className="project-content">
            <h3>Rabbit Rush (2026)</h3>
            <p>RabbitRush is a fast‑paced 2D adventure where a brave rabbit collects carrots while overcoming challenging levels.</p>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Vite</span>
              <span className="tag">JavaScript</span>
              <span className="tag">Netlify</span>
            </div>
            <div className="project-links-row">
              <a href="https://github.com/SubLochan/RabbitRush" target="_blank" rel="noreferrer" className="project-btn">
                <i className="fa-brands fa-github"></i> Repository
              </a>
              <a href="https://rabbitrush.netlify.app" target="_blank" rel="noreferrer" className="project-btn primary-link">
                <i className="fa-solid fa-external-link-alt"></i> Live Demo
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
              <a href="https://github.com/SubLochan/Telecom-Plan-comparator" target="_blank" rel="noreferrer" className="project-btn">
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
