import React from 'react';

const Page: React.FC = () => {
  return (
    <div>
      <div className="bg-indigo-900">
        <h1 className="text-7xl font-bold text-center py-10">lunixOS</h1>
      </div>
      <div className="container mx-auto px-4 mt-5">
        <p className="text-lg text-center">Welcome to LunixOS!</p>
        <p className="text-center mt-2">LunixOS is a unique operating system that runs directly in your terminal, providing a seamless and efficient user experience.</p>
        <p className="text-center mt-2">With LunixOS, you can enjoy the power and flexibility of a full-fledged operating system, all within the comfort of your terminal.</p>
        <p className="text-center mt-2">Explore the features, discover the possibilities, and unleash your productivity with LunixOS!</p>
      </div>
    </div>
  );
};

export default Page;