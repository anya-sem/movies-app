import css from "./MovieCard.module.css";

export default function MovieCard({ movie }) {
  const defaultImg =
    "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg";

  return (
    <div className={css.container}>
      {movie && (
        <div className={css.wrapper}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
            width={250}
            className={css.img}
          />
          <div className={css.textWrap}>
            <h1 className={css.title}>{movie.title}</h1>
            <p>
              <span className={css.text}>Rating:</span> {movie.vote_average}
            </p>
            <p>
              <span className={css.text}>Popularity:</span> {movie.popularity}%
            </p>
            <p>
              <span className={css.text}>Runtime:</span> {movie.runtime} min.
            </p>
            <p>
              <span className={css.text}>Release date:</span>{" "}
              {movie.release_date}
            </p>

            <ul className={css.genres}>
              <span className={css.text}>Genres:</span>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <h2 className={css.subtitle}>Overview</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
}
