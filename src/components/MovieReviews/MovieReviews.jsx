import { useEffect, useState } from "react";
import { getReviews } from "../../apiService/api";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const fetchedReviews = await getReviews(movieId);
        setReviews(fetchedReviews.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {error ? (
        <p>Error fetching data</p>
      ) : (
        <div className={css.card}>
          {reviews && reviews.length > 0 ? (
            <ul className={css.list}>
              {reviews &&
                reviews.map(({ id, author, content }) => (
                  <li key={id} className={css.item}>
                    <div className={css.authorWrap}>
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/001/840/618/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
                        alt="author"
                        width="40px"
                        className={css.img}
                      />
                      <p className={css.author}>{author}</p>
                    </div>
                    <p className={css.text}>{content}</p>
                  </li>
                ))}
            </ul>
          ) : (
            <p>No reviews yet</p>
          )}
        </div>
      )}
    </div>
  );
}
