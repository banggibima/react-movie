import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import CardMovies from '../../components/Card/Movies';
import Footer from '../../components/Footer';

const MovieInfo: FC = () => {
  const [movie, setMovie] = useState<any>({});

  const { id } = useParams();

  useEffect(() => {
    document.title = 'Movie';
    getMovie(id);
  }, [id]);

  const getMovie = async (id: any) => {
    try {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
        )
        .then((res) => setMovie(res.data));
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
                  to={`/movies`}
                  className="inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-semibold shadow bg-zinc-50 text-black hover:bg-sky-100 hover:text-sky-600 sm:w-auto"
                >
                  Back
                </Link>
              </div>
              <CardMovies movie={movie} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MovieInfo;
