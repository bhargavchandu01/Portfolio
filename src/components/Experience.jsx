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
            <h3>AI Interior Design Generator</h3>
            <h4>GruhaBuddy</h4>
            <ul>
              <li>Developed an AI system to convert empty room images into fully designed interiors using AI APIs and image
processing techniques.</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
