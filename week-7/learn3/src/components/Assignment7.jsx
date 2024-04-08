import React, { useState } from 'react';

function Assignment7() {
  const [name, setName] = useState('');
  const birthdayWishes = [
    { id: 1, message: `Happy Birthday, ${name}! Wishing you a fantastic day filled with joy and laughter.` },
    { id: 2, message: `Warmest birthday wishes to you, ${name}! May your special day be as amazing as you are.` },
    { id: 3, message: `Sending lots of love and happiness your way on your birthday, ${name}. Enjoy every moment.` }
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Birthday Wisher</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-400 px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {birthdayWishes.map((wish) => (
          <div key={wish.id} className="border border-gray-300 p-4 rounded-md">
            <p className="text-lg font-semibold mb-2">Birthday Wish {wish.id}</p>
            <p>{wish.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignment7;
