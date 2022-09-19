import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MovieList from './pages/Movies/List';
import MovieInfo from './pages/Movies/Info';
import TvShowList from './pages/TvShows/List';
import TvShowInfo from './pages/TvShows/Info';
import About from './pages/About';
import ErrorNotFound from './pages/ErrorNotFound';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieInfo />} />
          <Route path="/tvshows" element={<TvShowList />} />
          <Route path="/tvshows/:id" element={<TvShowInfo />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
