import { FC } from 'react';

interface Props {
  search: string;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const FormSearchMovies: FC<Props> = ({
  search,
  handleChange,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="sm:flex-none">
          <label htmlFor="search" className="block text-xs font-medium">
            Search Movie
          </label>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={handleChange}
            className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
          />
        </div>
      </form>
    </>
  );
};

export default FormSearchMovies;
