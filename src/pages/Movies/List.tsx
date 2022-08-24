import { FC, useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import SearchMovies from '../../components/Form/Movies/Search';
import ColumnMovies from '../../components/Column/Movies';
import Footer from '../../components/Footer';

const MOVIE_FEATURED = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_original_language=id&primary_release_date.gte=2022-06-01&primary_release_date.lte=2022-12-31&page=1`;
const MOVIE_SEARCH = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

const ListMovie: FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    document.title = 'Movies';

    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      await fetch(MOVIE_FEATURED)
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
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
      try {
        await fetch(`${MOVIE_SEARCH}${search}`)
          .then((res) => res.json())
          .then((data) => setMovies(data.results));
      } catch (err) {
        throw err;
      }

      setSearch('');
    }
  };

  return (
    <>
      <Navbar />
      <Header title="Movies" />
      <main>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <SearchMovies
              search={search}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <ColumnMovies movies={movies} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ListMovie;
