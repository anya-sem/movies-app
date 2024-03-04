import { NavLink } from "react-router-dom";
import css from "./MoviesList.module.css";

export default function MoviesList({ error, movies, location }) {
  const defaultImg =
    "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg";
  return (
    <div>
      {error ? (
        <p>Error fetching data</p>
      ) : (
        <ul className={css.list}>
          {movies.length > 0 &&
            movies.map(({ id, title, poster_path, vote_average }) => (
              <li key={id} className={css.card}>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : defaultImg
                    }
                    alt={title}
                    width={200}
                    className={css.img}
                  />
                  <div className={css.text}>
                    <p className={css.movieTitle}>{title}</p>
                    <p>Rate: {vote_average}</p>
                  </div>
                </NavLink>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
