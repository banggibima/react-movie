import axios from 'axios';
import { FC, useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import FormSearchMovies from '../../components/Form/Search/Movies';
import ColumnMovies from '../../components/Column/Movies';
import Footer from '../../components/Footer';

const MovieList: FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    document.title = 'Movies';
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&with_original_language=id&primary_release_date.gte=2022-06-01&primary_release_date.lte=2022-12-31&page=1`
        )
        .then((res) => setMovies(res.data.results));
    } catch (err) {
      throw err;
    }
  };

  const searchMovie = async () => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_TMDB_KEY}&query=${search}`
        )
        .then((res) => setMovies(res.data.results));
    } catch (err) {
      throw err;
    }
  };

  const handleChange = async (e: any) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (search) {
      searchMovie();
      setSearch('');
    }
  };

  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Header title="Movies" />
        <main>
          <div className="max-w-3xl mx-auto">
            <div className="py-4 px-4 sm:px-0 md:px-4 lg:px-4">
              <FormSearchMovies
                search={search}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
              <ColumnMovies movies={movies} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MovieList;
