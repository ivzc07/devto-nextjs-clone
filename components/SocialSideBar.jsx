import React from 'react';
import { FaHeart, FaComment, FaBookmark, FaEllipsisH } from 'react-icons/fa';

export default function SocialSidebar(){
  return (
    <div className="flex flex-col items-center space-y-6 bg-gray-100 p-4 w-16">
      <div className="flex flex-col items-center">
        <FaHeart className="text-gray-600" size={24} />
        <span className="text-gray-600 text-sm">69</span>
      </div>
      <div className="flex flex-col items-center">
        <FaComment className="text-gray-600" size={24} />
        <span className="text-gray-600 text-sm">8</span>
      </div>
      <div className="flex flex-col items-center">
        <FaBookmark className="text-gray-600" size={24} />
        <span className="text-gray-600 text-sm">88</span>
      </div>
      <div className="flex flex-col items-center">
        <FaEllipsisH className="text-gray-600" size={24} />
      </div>
    </div>
  );
};
