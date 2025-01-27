import React from 'react';

interface HomeProps {
  children: React.ReactNode;
}

const Container: React.FC<HomeProps> = ({ children }) => {
  return (
    <div className="w-full h-full ">
      <div className="max-w-md mx-auto h-full bg-blue-400">
        {children}
      </div>
    </div>
  );
};

export default Container;

