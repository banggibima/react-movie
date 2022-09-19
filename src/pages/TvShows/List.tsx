import axios from 'axios';
import { FC, useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import FormSearchTvShows from '../../components/Form/Search/TvShows';
import ColumnTvShows from '../../components/Column/TvShows';
import Footer from '../../components/Footer';

const TvShowList: FC = () => {
  const [tvShows, setTvShows] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    document.title = 'Tv Shows';
    getTvShows();
  }, []);

  const getTvShows = async () => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1`
        )
        .then((res) => setTvShows(res.data.results));
    } catch (err) {
      throw err;
    }
  };

  const searchTvShow = async () => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&query=${search}`
        )
        .then((res) => setTvShows(res.data.results));
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
      searchTvShow();
      setSearch('');
    }
  };

  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Header title="Tv Shows" />
        <main>
          <div className="max-w-3xl mx-auto">
            <div className="py-4 px-4 sm:px-0 md:px-4 lg:px-4">
              <FormSearchTvShows
                search={search}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
              <ColumnTvShows tvShows={tvShows} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TvShowList;
