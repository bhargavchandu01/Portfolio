import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <div className="section-header reveal">
        <h2>Academic <span className="text-gradient">Background</span></h2>
        <p>My foundational learning tracking my academic path.</p>
      </div>
      <div className="timeline">
        <div className="timeline-item reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content glass-panel">
            <div className="timeline-date">Aug 2023 – Present</div>
            <h3>B.Tech Computer Science and Engineering</h3>
            <h4>Anurag University — Hyderabad, India</h4>
            <p style={{ color: 'var(--accent-blue)', fontWeight: '600', marginTop: '10px' }}>CGPA: 8.55</p>
          </div>
        </div>

        <div className="timeline-item reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content glass-panel">
            <div className="timeline-date">Sep 2021 – May 2022</div>
            <h3>Class 12 — Intermediate</h3>
            <h4>Urbane Junior College — Hyderabad, India</h4>
            <p style={{ color: 'var(--accent-blue)', fontWeight: '600', marginTop: '10px' }}>CGPA: 8.63</p>
          </div>
        </div>

        <div className="timeline-item reveal">
          <div className="timeline-dot"></div>
          <div className="timeline-content glass-panel">
            <div className="timeline-date">Aug 2021</div>
            <h3>Class 10 — CBSE</h3>
            <h4>Kendriya Vidyalaya No. 1 Uppal — Hyderabad, India</h4>
            <p style={{ color: 'var(--accent-blue)', fontWeight: '600', marginTop: '10px' }}>GPA: 8.11</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
