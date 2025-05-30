import { useMemo } from 'react';
import './MovieItem.css';
import { useNavigate } from 'react-router';

function MovieItem({ movie, onMovieClick }) {
  const navigate = useNavigate();

  const voteAverage = useMemo(() => {
    return movie.vote_average.toFixed(1);
  }, [movie.vote_average]);

  function handleClick() {
    onMovieClick(movie.id);
    navigate(`/movies/${movie.id}`);
  }

  return (
    <div className='movie-card' onClick={handleClick}>
      <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <div className='movie-info'>
        <h3 className='movie-title'>{movie.title}</h3>
        <p className='movie-overview'>{movie.overview}</p>
        <div className='movie-stats'>
          <div className='movie-rating'>
            <span>Rating:</span>
            <span className='movie-rating-value'>{voteAverage}</span>
            {/* <span className="movie-rating-value">{movie.vote_average}</span> */}
          </div>
          <div className='movie-popularity'>
            <span>Votes:</span>
            <span>{movie.vote_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
