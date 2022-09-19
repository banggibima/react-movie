import { FC } from 'react';

type Props = {
  title: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <>
      <header>
        <div className="max-w-3xl mx-auto">
          <div className="py-4 px-4 sm:px-4 md:px-4 lg:px-4">
            <h1 className="text-4xl font-bold text-black">{title}</h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
