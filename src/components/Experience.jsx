import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-header reveal">
        <h2>Professional <span className="text-gradient">Journey</span></h2>
        <p>A timeline of my growth and contributions in the industry.</p>
      </div>
      <div className="timeline">
        <div className="timeline-item reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content glass-panel">
            <div className="timeline-date">Jan 2026 – Present</div>
            <h3>Game Developer Intern</h3>
            <h4>Akiyam Solutions Pvt. Ltd — Hyderabad, India</h4>
            <ul>
              <li>Created and integrated ScoreStreaks logic (UAV, HunterDrone, Cluster Strike) in Unreal Engine 5 for Beyonders, enhancing player progression and reward systems.</li>
              <li>Optimized multiplayer replication, client-server communication, and event triggers, ensuring accurate synchronization and smooth gameplay.</li>
              <li>Applied performance tuning and version control best practices, reducing in-game errors by 30% and improving overall stability.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
