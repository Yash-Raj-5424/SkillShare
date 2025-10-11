import React from "react";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-y-14 bg-white px-6 text-center">
        <div className="max-w-2xl mb-8">
          <h1 className="text-5xl font-bold mb-4">
            Learn. Share. Grow Together.
          </h1>
          <p className="text-lg text-gray-700">
            Connect with skilled individuals in your community. Share your
            expertise and learn new skills through peer-to-peer collaboration.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
          <div className="flex w-full gap-4">
            <input
              type="text"
              placeholder="What skill do you want to learn?"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <select className="w-40 px-6 py-2 cursor-pointer placeholder: Category border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option disabled selected>
                Category
              </option>
              <option>Technology</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Writing</option>
            </select>
          </div>

          <button className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Find Skills
          </button>
        </div>
      

      {/* <div className="w-full max-w-4xl mx-auto px-4"> */}
        <div className="flex flex-wrap justify-center gap-28 text-center">
          <div>
            <h3 className="text-4xl font-bold ">10,000+</h3>
            <p className="text-gray-700">Skills Shared</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold ">5,000+</h3>
            <p className="text-gray-700">Active Learners</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold ">4.8★</h3>
            <p className="text-gray-700">Average Rating</p>
          </div>
        </div>
      {/* </div> */}
      </div>
    </>
  );
}

export default Home;
