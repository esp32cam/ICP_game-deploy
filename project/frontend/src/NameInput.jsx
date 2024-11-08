import React, { useState } from 'react';
import ShowcaseText from './ShowcaseText';
import { backend } from 'declarations/backend';

const NameInput = () => {
  const [greeting, setGreeting] = useState(null);
  const [name, setName] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    backend.greet(name).then((newGreeting) => {
      setGreeting(newGreeting);
    });
    return false;
  }

  function handleGoBack() {
    setName('');
    setGreeting(null);
  }

  return (
    <div className="bg-dark-infinite flex h-full w-full items-center justify-center rounded px-4 py-8 font-sans text-black">
      <div className="relative w-full max-w-md">
        {!greeting ? (
          <Card className="relative h-full w-full shadow-2xl shadow-blue-500/20">
            <form onSubmit={handleSubmit} className="bg-infinite rounded-lg p-6">
              <div className="bg-meteorite mb-4 flex items-center p-4">
                <h1 className="mr-2 text-xl font-medium text-black">Enter Your Name</h1>
              </div>
              <p className="mb-4 text-black">Please enter your name below and click submit.</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e?.target?.value)}
                placeholder="Enter your name"
                className="mb-4 w-full rounded-md border-2 bg-white px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
              <button
                type="submit"
                className="bg-picton-blue hover:bg-picton-blue focus:ring-picton-blue hover:shadow-picton-blue/30 mt-2 w-full rounded-md px-3 py-4 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-opacity-50"
              >
                Submit
              </button>
            </form>
          </Card>
        ) : (
          <Card className="backface-hidden h-full w-full transform rounded-xl shadow-2xl shadow-blue-500/20 transition-opacity duration-500">
            <div className="bg-infinite flex h-full w-full flex-col items-center justify-center rounded-[20px] px-4 py-12">
              <h2 className="mb-4 text-3xl font-medium text-black">{greeting}</h2>
              <p className="text-black-300 mb-6">Thank you for submitting your name.</p>
              <button
                onClick={handleGoBack}
                className="bg-picton-blue focus:ring-picton-blue hover:bg-picton-blue hover:shadow-picton-blue/30 rounded-md px-4 py-2 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-opacity-50"
              >
                Go Back
              </button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

const Card = ({ greeting, className, children }) => (
  <div className={`${className} ${greeting ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`}>
    {children}
  </div>
);

const ExampleForm = () => {
  return (
    <div className="mx-auto my-12 max-w-4xl">
      <h1 className="mb-6 text-3xl font-medium">Hello, world! Example</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="border-black-200 flex flex-col border p-4">
          <div className="flex-grow overflow-auto">
            <ShowcaseText />
          </div>
        </div>
        <div className="bg-black-200 flex flex-col rounded-lg p-8">
          <h2 className="mb-6 text-2xl font-semibold">Live Demo</h2>
          <NameInput />
        </div>
      </div>
    </div>
  );
};

export default ExampleForm;
