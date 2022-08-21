import { FC, useEffect, useState } from 'react';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import FormSearchTvShows from '../../components/FormSearchTvShows';
import ColumnTvShows from '../../components/ColumnTvShows';
import Footer from '../../components/Footer';

const TV_FEATURED = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1`;
const TV_SEARCH = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=`;

const ListTvShow: FC = () => {
  const [tv_shows, setTvShows] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    document.title = 'TV Shows';

    getTvShows();
  }, []);

  const getTvShows = async () => {
    try {
      await fetch(TV_FEATURED)
        .then((res) => res.json())
        .then((data) => setTvShows(data.results));
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
        await fetch(`${TV_SEARCH}${search}`)
          .then((res) => res.json())
          .then((data) => setTvShows(data.results));
      } catch (err) {
        throw err;
      }

      setSearch('');
    }
  };

  return (
    <>
      <Navbar />
      <Header title="Tv Shows" />
      <main>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <FormSearchTvShows
              search={search}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <ColumnTvShows tv_shows={tv_shows} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ListTvShow;