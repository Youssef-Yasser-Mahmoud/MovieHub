import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import useFetch from '../utils/useFetch';
import Spinner from '../components/Spinner';
import './MovieItemDetails.css';

const url = 'https://api.themoviedb.org/3';
const path = '/discover/movie?sort_by=popularity.desc';
const apiKey = '&api_key=9813ce01a72ca1bd2ae25f091898b1c7';
const apiUrl = url + path + apiKey;

function MovieItemDetails() {
  let { id } = useParams();
  const [moviesList, isLoading] = useFetch(apiUrl);
  const [genres, setGenres] = useState([]);
  const movieItem = moviesList.find((obj) => obj.id == id);

  useEffect(() => {
    if (movieItem) {
      const genreMap = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western',
      };

      const movieGenres = movieItem.genre_ids.map((id) => genreMap[id] || 'Unknown');
      setGenres(movieGenres);
    }
  }, [movieItem]);

  if (isLoading) return <Spinner />;
  if (!movieItem) return <div className='not-found'>Movie not found</div>;

  // Format the release date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className='movie-details-container'>
      <div
        className='movie-details-backdrop'
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movieItem.backdrop_path})` }}
      >
        <div className='backdrop-overlay'></div>
      </div>

      <div className='movie-details-content'>
        <div className='movie-details-poster'>
          <img src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`} alt={movieItem.title} />
          <div className='movie-rating'>
            <span className='rating-value'>{movieItem.vote_average.toFixed(1)}</span>
            <span className='rating-max'>/10</span>
          </div>
        </div>

        <div className='movie-details-info'>
          <h1 className='movie-title'>{movieItem.title}</h1>

          <div className='movie-meta'>
            <span className='release-date'>{formatDate(movieItem.release_date)}</span>
            <span className='separator'>•</span>
            <span className='vote-count'>{movieItem.vote_count} votes</span>
          </div>

          <div className='movie-genres'>
            {genres.map((genre, index) => (
              <span key={index} className='genre-tag'>
                {genre}
              </span>
            ))}
          </div>

          <div className='movie-overview'>
            <h2>Overview</h2>
            <p>{movieItem.overview}</p>
          </div>

          <div className='movie-details-grid'>
            <div className='detail-item'>
              <h3>Original Title</h3>
              <p>{movieItem.original_title}</p>
            </div>

            <div className='detail-item'>
              <h3>Original Language</h3>
              <p>{movieItem.original_language.toUpperCase()}</p>
            </div>

            <div className='detail-item'>
              <h3>Popularity</h3>
              <p>{movieItem.popularity.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItemDetails;

