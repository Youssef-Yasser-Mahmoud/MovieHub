import { Link } from 'react-router';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Your Next Favorite Movie</h1>
          <p>Explore thousands of movies, from blockbusters to indie gems</p>
          <Link to="/movies" className="cta-button">Browse All Movies</Link>
        </div>
      </section>
      
      <section className="info-section">
        <div className="section-header">
          <h2>Why MovieHub?</h2>
          <div className="header-underline"></div>
        </div>
        
        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">🎭</div>
            <h3>Diverse Selection</h3>
            <p>From classic films to the latest releases, we've got something for every movie lover.</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">🔍</div>
            <h3>Easy Discovery</h3>
            <p>Our smart recommendation system helps you find movies you'll love based on your preferences.</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">💬</div>
            <h3>Community</h3>
            <p>Join discussions, rate movies, and share your thoughts with fellow movie enthusiasts.</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to start your movie journey?</h2>
        <p>Create an account to track your favorites, build watchlists, and get personalized recommendations.</p>
        <Link to="/login" className="cta-button">Log in</Link>
      </section>
    </div>
  );
}

export default Home;
