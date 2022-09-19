import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  [key: string]: any;
  tvShows: any;
};

const ColumnTvShows: FC<Props> = ({ tvShows }) => {
  return (
    <>
      <div className="mt-4 grid gap-4 md:grid-cols-4 lg:grid-cols-4 lg:max-w-none">
        {tvShows.length > 0 ? (
          tvShows.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-zinc-50"
            >
              <div className="flex-shrink-0">
                <img
                  className="sm:h-80 md:h-80 lg:h-80 w-full object-cover"
                  src={`https://www.themoviedb.org/t/p/w1280${item.poster_path}`}
                  alt={item.title}
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xs px-2 py-1 inline rounded-lg font-semibold bg-sky-100 text-sky-600">
                    {item.first_air_date === ''
                      ? ''
                      : new Date(item.first_air_date).toLocaleString('id-ID', {
                          year: 'numeric',
                        })}
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-bold text-black">{item.name}</p>
                    <p className="mt-2 text-sm truncate text-black">
                      {item.overview}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="space-y-2">
                    <Link
                      to={`/tvshows/${item.id}`}
                      className="px-3 py-2 rounded-lg text-sm font-semibold shadow bg-zinc-50 text-black hover:bg-sky-100 hover:text-sky-600"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-sm text-black mt-4">TV Shows not found.</h1>
        )}
      </div>
    </>
  );
};

export default ColumnTvShows;
