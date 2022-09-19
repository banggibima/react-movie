import { FC } from 'react';

type Props = {
  search: string;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
};

const FormSearchTvShows: FC<Props> = ({
  search,
  handleChange,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="sm:flex-none">
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={handleChange}
            className="mt-1 block w-full text-sm bg-zinc-50 text-black font-medium shadow border-0 focus:ring-transparent focus:border-0 rounded-lg"
            placeholder="Search TV and Show"
          />
        </div>
      </form>
    </>
  );
};

export default FormSearchTvShows;
