import { FC, useEffect } from 'react';

const ErrorNotFound: FC = () => {
  useEffect(() => {
    document.title = '404 Error Not Found';
  });

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-white">
        <div className="mr-2">
          <a href="/" className="text-3xl font-bold text-black">
            404
          </a>
        </div>
        <div className="ml-2">
          <p className="text-sm text-black">This page could not be found.</p>
        </div>
      </div>
    </>
  );
};

export default ErrorNotFound;
