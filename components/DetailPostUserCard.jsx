import React from 'react';

export default function DetailPostUserCard (props) {
    function formatDate(rawDate) {
        const date = new Date(rawDate);
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return date.toLocaleDateString(undefined, options);
      }
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w mx-auto mb-4 p-6">
      <div className="flex items-center mb-4">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src={props.user.profilePic}
          alt="Profile"
        />
        <div>
          <p className="text-gray-900 font-bold text-xl">{props.user.name}</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4 w-full">
        Follow
      </button>
      <p className="text-gray-700 mb-4">
        Full stack web developer with a passion for all things react, typescript, & node. go to stacks are jam, mern, and t3.
      </p>
      <div className="text-gray-600 text-sm">
        <p className="font-bold">LOCATION</p>
        <p>Vancouver, Bc, Canada</p>
        <p className="font-bold mt-2">EDUCATION</p>
        <p>Self taught</p>
        <p className="font-bold mt-2">PRONOUNS</p>
        <p>he/him</p>
        <p className="font-bold mt-2">WORK</p>
        <p>Full stack developer</p>
        <p className="font-bold mt-2">JOINED</p>
        <p>{formatDate(props.user.createdAt)}</p>
      </div>
    </div>
  );
};

