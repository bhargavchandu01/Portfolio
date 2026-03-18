import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content reveal">
        <span className="hero-greeting">{'<'}Hello World {'/>'}</span>
        <h1 className="hero-title">Sublari <span className="text-gradient">Lochan</span></h1>
        <p className="hero-desc">
          Building scalable enterprise backends and highly optimized multiplayer game architectures. Specializing in Spring Boot infrastructure and Unreal Engine 5.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Let's Connect</a>
        </div>
        <div className="socialHover">
          <a href="https://github.com/SubLochan" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
          <a href="https://linkedin.com/in/lochan-sublari-120123303" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="mailto:sublarilochan123@gmail.com"><i className="fa-solid fa-envelope"></i></a>
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
              &nbsp;&nbsp;String name = <span className="string">"Sublari Lochan"</span>;<br />
              &nbsp;&nbsp;String[] coreStack = {'{'}<span className="string">"Java"</span>, <span className="string">"Unreal Engine 5"</span>, <span className="string">"Spring Boot"</span>{'}'};<br />
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
