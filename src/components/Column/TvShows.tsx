import { FC } from 'react';

interface Props {
  [tv_shows: string]: any;
}

const ColumnTvShows: FC<Props> = ({ tv_shows }) => {
  return (
    <>
      <div className="mt-4 grid gap-4 md:grid-cols-4 lg:grid-cols-4 lg:max-w-none">
        {tv_shows.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-col rounded border overflow-hidden"
          >
            <div className="flex-shrink-0">
              <img
                className="sm:h-80 md:h-80 lg:h-80 w-full object-cover"
                src={`https://www.themoviedb.org/t/p/w1280${item.poster_path}`}
                alt={item.name}
              />
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-xs px-2 py-1 inline border rounded font-medium text-sky-600 bg-sky-50">
                  {item.first_air_date}
                </p>
                <div className="block mt-2">
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="mt-2 text-sm">{item.overview}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center">
                <div className="space-y-2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ColumnTvShows;
