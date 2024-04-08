import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">Welcome to Assignment Portal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10">
        <Link to="/assign1" className="border border-gray-300 p-4 rounded-md block hover:bg-gray-100">
          <p className="text-lg font-semibold">Social Media Integration</p>
          <p>Implement social media integration.</p>
        </Link>
        <Link to="/assign2" className="border border-gray-300 p-4 rounded-md block hover:bg-gray-100">
          <p className="text-lg font-semibold">Background Changer</p>
          <p>Change background color dynamically.</p>
        </Link>
        <Link to="/assign3" className="border border-gray-300 p-4 rounded-md block hover:bg-gray-100">
          <p className="text-lg font-semibold">Custom reactusing JS and render anchor tag</p>
          <p>create a HTML element and using JS render anchor tag.</p>
        </Link>
        <Link to="/assign4" className="border border-gray-300 p-4 rounded-md block hover:bg-gray-100">
          <p className="text-lg font-semibold">Paragraph Generator</p>
          <p>Generate paragraphs based on word count.</p>
        </Link>
        <Link to="/assign5" className="border border-gray-300 p-4 rounded-md block hover:bg-gray-100">
          <p className="text-lg font-semibold">Github Repo Viewer</p>
          <p>API render your GitHub information as your GitHub info Card.</p>
        </Link>
        <Link to="/assign6" className="border border-gray-300 p-4 rounded-md block hover:bg-gray-100">
          <p className="text-lg font-semibold">OTP Login</p>
          <p>Implement OTP-based authentication.</p>
        </Link>
        <Link to="/assign7" className="border border-gray-300 p-4 rounded-md block hover:bg-gray-100">
          <p className="text-lg font-semibold">Birthday Wisher</p>
          <p>Wish someone a happy birthday!</p>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
