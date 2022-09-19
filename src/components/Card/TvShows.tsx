import { FC } from 'react';

type Props = {
  tvShow: {
    id: number;
    first_air_date: string;
    homepage: string;
    original_name: string;
    poster_path: string;
    overview: string;
  };
};

const CardTvShows: FC<Props> = ({ tvShow }) => {
  return (
    <>
      <div className="lg:col-span-2">
        <ul className="space-y-12 sm:divide-y sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
          <li className="sm:py-8">
            <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
              <div className="">
                <img
                  className="sm:h-80 md:h-80 lg:h-80 object-cover shadow-lg rounded-lg"
                  src={`https://www.themoviedb.org/t/p/w1280${tvShow.poster_path}`}
                  alt=""
                />
              </div>
              <div className="sm:col-span-2">
                <div className="space-y-4">
                  <div className="leading-6 space-y-2">
                    <p className="text-xs px-2 py-1 inline rounded-lg font-semibold bg-sky-100 text-sky-600">
                      {tvShow.first_air_date === ''
                        ? ''
                        : new Date(tvShow.first_air_date).toLocaleString(
                            'id-ID',
                            {
                              year: 'numeric',
                            }
                          )}
                    </p>
                    <h3 className="text-3xl font-bold">
                      {tvShow.original_name}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm">{tvShow.overview}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <div className="space-y-2">
                  <a
                    href={tvShow.homepage}
                    className="px-3 py-2 rounded-lg text-sm font-semibold shadow bg-zinc-50 text-black hover:bg-sky-100 hover:text-sky-600"
                  >
                    Watch Now
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CardTvShows;
