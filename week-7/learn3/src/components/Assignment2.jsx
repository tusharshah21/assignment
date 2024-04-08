import React, { useState } from 'react';

function Assignment2() {
  const [backgroundColor, setBackgroundColor] = useState('bg-white');
  const colors = ['bg-red-500', 'bg-yellow-500', 'bg-black', 'bg-purple-500', 'bg-green-500', 'bg-blue-500', 'bg-gray-200'];
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div className={`min-h-screen ${backgroundColor} transition duration-300 ease-in-out`}>
      <h1 className="text-3xl font-bold text-center py-8">Background Changer</h1>
      <div className="flex justify-center space-x-4">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg ${color} text-white`}
            onClick={() => changeBackgroundColor(color)}
          >
            {color === 'bg-gray-200' ? 'Default' : color.replace('bg-', '').replace('-', ' ')}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Assignment2;
