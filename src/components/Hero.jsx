import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content reveal">
        <span className="hero-greeting">{'<'}Code With Me {'/>'}</span>
        <h1 className="hero-title">Bhargav Chandu <span className="text-gradient">Tootika</span></h1>
        <p className="hero-desc">
          Building scalable web applications and AI-powered digital solutions that solve real-world problems. Specializing in React, Spring Boot, and modern full-stack development. </p>
        <div className="hero-actions">    
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Let's Connect</a>
        </div>
        <div className="socialHover">
          <a href="https://github.com/bhargavchandu01?tab=repositories" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/bhargav-chandu-628390293/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="mailto:bhargavchandut@gmail.com"><i className="fa-solid fa-envelope"></i></a>
        </div>
      </div>
      
      <div className="hero-visual reveal">
        <div className="code-window">
          <div className="window-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="window-body">
            <code>
              <span className="comment">// Initializing System Protocol...</span><br /><br />
              <span className="keyword">class</span> <span className="variable">Developer</span> {'{'}<br />
              &nbsp;&nbsp;String name = <span className="string">"Bhargav Chandu Tootika"</span>;<br />
              &nbsp;&nbsp;String[] coreStack = {'{'}<span className="string">"Java"</span>, <span className="string">"React"</span>, <span className="string">"Spring Boot"</span>{'}'};<br />
              <br />
              &nbsp;&nbsp;<span className="keyword">public</span> <span className="keyword">void</span> <span className="variable">execute</span>() {'{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="string">"Architecting robust systems..."</span>);<br />
              &nbsp;&nbsp;{'}'}<br />
              {'}'}
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
