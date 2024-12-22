import React from 'react';
import { BiDotsVertical } from 'react-icons/bi';
import { IoShareSocialOutline } from 'react-icons/io5';
import { IoIosWifi } from 'react-icons/io';
import { BsBatteryHalf } from 'react-icons/bs';
import { RiSignalTowerLine } from 'react-icons/ri';

const Note = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center bg-black text-white px-4 py-1 text-xs">
        <div className="flex items-center">
          <span>0 KB/s</span>
          <div className="ml-4 flex items-center space-x-2">
            <RiSignalTowerLine size={14} />
            <IoIosWifi size={14} />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <BsBatteryHalf size={14} />
          <span>24%</span>
          <span>2:09 AM</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-emerald-500 text-white">
        <h1 className="text-2xl">Add note</h1>
        <div className="flex items-center space-x-4">
          <button>
            <IoShareSocialOutline size={24} />
          </button>
          <button>
            <BiDotsVertical size={24} />
          </button>
        </div>
      </div>

      {/* Notes Container */}
      <div className="p-2 space-y-2">
        {/* First Note */}
        <div className="bg-gray-100 rounded-md p-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-800">My first Note</span>
            <span>📝</span>
          </div>
        </div>

        {/* Second Note */}
        <div className="bg-gray-100 rounded-md p-4">
          <div className="text-gray-800">
            The quick brown fox jumps over the lazy dog 🐕
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;