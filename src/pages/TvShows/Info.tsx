import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import CardTvShows from '../../components/Card/TvShows';
import Footer from '../../components/Footer';

const TvShowInfo: FC = () => {
  const [tvShow, setTvShow] = useState<any>({});

  const { id } = useParams();

  useEffect(() => {
    document.title = 'Tv Show';
    getTvShow(id);
  }, [id]);

  const getTvShow = async (id: any) => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
        )
        .then((res) => setTvShow(res.data));
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      <div className="bg-white">
        <main>
          <div className="sm:pt-8 md:pt-8 lg:pt-8 max-w-3xl mx-auto">
            <div className="py-4 px-4 sm:px-0 md:px-4 lg:px-4">
              <div className="sm:flex-none space-x-2 mb-8">
                <Link
                  to={`/tvshows`}
                  className="inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-semibold shadow hover:text-sky-600 hover:bg-sky-100 sm:w-auto"
                >
                  Back
                </Link>
              </div>
              <CardTvShows tvShow={tvShow} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TvShowInfo;
