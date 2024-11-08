import React from 'react';
import logo from '../logo2.svg';

const ShowcaseText = () => {
  return (
    <div>
      <div
        className="shadow-mg overflow-hidden bg-white text-black"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="space-y-6 p-8">
            <p className="leading-relaxed text-gray-600">
              This guide shows how to get started developing on ICP quickly by deploying your first 'Hello, world!'
              smart contract.
            </p>
            <h3 className="text-xl font-semibold">Key Features:</h3>
            <ul className="space-y-3">
              {[
                'A React frontend and Motoko-based backend fully deployed on ICP',
                'A query function that accepts a name',
                'A frontend that displays the query function return'
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <img src={logo} alt="Onchain logo" className="logo h-24 w-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseText;
