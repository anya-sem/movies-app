import MoviesList from "../components/MoviesList/MoviesList";
import Loader from "../components/Loader/Loader";
import React, { useEffect, useState } from "react";
import { getTrending } from "../apiService/api";
import { useLocation } from "react-router-dom";
import css from "../components/MoviesList/MoviesList.module.css";

export default function HomePage() {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const fetchedTrending = await getTrending();
        setTrending(fetchedTrending.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      <MoviesList error={error} movies={trending} location={location} />
      {isLoading && <Loader />}
    </div>
  );
}
