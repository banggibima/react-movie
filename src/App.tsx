import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ListMovie from './pages/Movies/List';
import ListTvShow from './pages/TvShow/List';
import NotFound from './pages/NotFound';
import About from './pages/About';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<ListMovie />} />
          <Route path="/tvshows" element={<ListTvShow />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
