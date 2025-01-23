import React from 'react';

interface HomeProps {
  children: React.ReactNode;
}

const Container: React.FC<HomeProps> = ({ children }) => {
  return (
    <div className="w-full h-full ">
      <div className="max-w-md mx-auto h-full bg-gradient-to-b from-blue-500 via-purple-600 to-purple-700">
        {children}
      </div>
    </div>
  );
};

export default Container;

