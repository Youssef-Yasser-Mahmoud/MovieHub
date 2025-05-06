import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About MovieHub</h1>
        <div className="header-underline"></div>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At MovieHub, we're passionate about bringing the world of cinema to your fingertips. 
            Our mission is to create the most comprehensive, user-friendly platform for movie enthusiasts 
            to discover, explore, and engage with films from around the globe.
          </p>
        </section>
        
        <section className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎬</div>
              <h3>Extensive Library</h3>
              <p>Access to thousands of movies across all genres, eras, and countries.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Ratings & Reviews</h3>
              <p>Honest ratings and in-depth reviews from both critics and users.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Advanced Search</h3>
              <p>Find exactly what you're looking for with our powerful search tools.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Enjoy the same great experience across all your devices.</p>
            </div>
          </div>
        </section>
        
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, MovieHub began as a small project by a group of film enthusiasts 
            who wanted to create a better way to discover and discuss movies. What started as 
            a passion project has grown into a platform used by movie lovers worldwide.
          </p>
          <p>
            We believe that great films have the power to inspire, educate, and transform. 
            Our goal is to help you find those films that will leave a lasting impression.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? We'd love to hear from you! 
            Reach out to our team at <a href="mailto:youssefyaser2020@gmail.com">YoussefYasser2020@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
