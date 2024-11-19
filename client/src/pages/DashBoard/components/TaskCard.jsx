import React from 'react';

const TaskCard = () => {
  return (
    <div
      className="w-[402px] h-[166px] p-4 flex justify-between"
      style={{
        border: '1px solid rgb(161, 163, 171)',
        borderRadius: '14px',
        background: 'white',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg font-bold text-black">
          Attend Nischal’s Birthday Party
        </h2>
        <p className="text-gray-600 text-sm">
          Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh
          Elements)
        </p>
        <div className="flex space-x-4 text-sm">
          <p>
            <span className="font-bold">Priority:</span>{' '}
            <span className="text-blue-500">Moderate</span>
          </p>
          <p>
            <span className="font-bold">Status:</span>{' '}
            <span className="text-red-500">Not Started</span>
          </p>
        </div>
        <p className="text-gray-500 text-sm">
          Created on: <span>20/06/2023</span>
        </p>
      </div>

      {/* Right Section */}
      {/* <div>
        <img
          src="https://via.placeholder.com/80"
          alt="Birthday Party"
          className="w-[80px] h-[80px] rounded-md object-cover"
        />
      </div> */}
    </div>
  );
};

export default TaskCard;
