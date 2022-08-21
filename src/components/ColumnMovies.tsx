import { FC } from 'react';

interface Props {
  [movies: string]: any;
}

const ColumnMovies: FC<Props> = ({ movies }) => {
  return (
    <>
      <div className="mt-4 grid gap-4 md:grid-cols-4 lg:grid-cols-4 lg:max-w-none">
        {movies.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-col rounded border overflow-hidden"
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
                <p className="text-xs px-2 py-1 inline border rounded font-medium text-sky-600 bg-sky-50">
                  {item.release_date}
                </p>
                <div className="block mt-2">
                  <p className="text-xl font-semibold">{item.title}</p>
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

export default ColumnMovies;
