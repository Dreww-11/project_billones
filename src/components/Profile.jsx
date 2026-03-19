import React from 'react';
import './Portfolio.css'; 

const Profile = () => {
  return (
    <div className="profile-container">
      <header>
        <div className="logo">IT Student Profile</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#project">Projects</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="image-container">
          <img src="your-photo.jpg" alt="John Andrew Billones" className="profile-image" />
        </div>
        <div className="content">
          <h1>Hello, I'm John Andrew Billones</h1>
          <div className="typewriter">Aspiring <span>Full Stack Developer</span></div>
          <p>
            I am a 3rd year Bachelor of Science in Information Technology student. 
            Passionate about technology, I enjoy creating modern web applications, 
            exploring programming languages, and building solutions that make an impact.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          As an IT student, I am deeply committed to the art of software development. 
          Beyond the classroom, I spend my time diving into the logic of code and 
          staying curious about how the web evolves. My goal is to bridge the gap 
          between complex backend systems and intuitive frontend experiences.
          <br /><br />
          I thrive on challenges and believe in continuous learning. Whether it is 
          refining my current tech stack or discovering new frameworks, I am driven 
          by the desire to build digital tools that are both functional and meaningful.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>HTML5 & CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React.js</li>
          <li>PHP & XAMPP</li>
          <li>MySQL Database Management</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="project">
        <h2>Featured Projects</h2>
        <ul>
          <li><strong>Personal Portfolio:</strong> A responsive React-based site showcasing my developer journey.</li>
          <li><strong>Weather Insight:</strong> A web application providing real-time weather updates via API integration.</li>
          <li><strong>JMeter Performance Testing:</strong> Experience in analyzing system stress and stability.</li>
          <li><strong>Network Configuration:</strong> Designing and implementing basic networking protocols.</li>
        </ul>
      </section>

    </div>
  );
};

export default Profile;