import React, { useState } from 'react';

function Assignment5() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState('');

  const fetchUserData = async () => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();

      if (userResponse.ok) {
        setUserData(userData);
        setError('');
      } else {
        setUserData(null);
        setRepositories([]);
        setError('Error fetching user data. Please check the username and try again.');
      }

      const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const repoData = await repoResponse.json();

      if (repoResponse.ok) {
        setRepositories(repoData);
        setError('');
      } else {
        setRepositories([]);
        setError('Error fetching repositories. Please check the username and try again.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setUserData(null);
      setRepositories([]);
      setError('Error fetching data. Please check the username and try again.');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">GitHub Repositories Viewer</h1>
      <label htmlFor="username" className="block text-gray-700 mb-2">Enter GitHub Username:</label>
      <div className="flex items-center">
        <input
          type="text"
          id="username"
          placeholder="e.g., johnpapa"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-400 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={fetchUserData} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Fetch Data</button>
      </div>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {userData && (
        <div className="flex mt-8">
          <div className="flex-shrink-0">
            <div className="rounded-full overflow-hidden border-4 border-black">
              <img
                src={userData.avatar_url}
                alt="User Avatar"
                className="h-40 w-40 object-cover"
              />
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">{userData.name}</h2>
            <p className="text-gray-700">{userData.bio}</p>
            {userData.location && (
              <p className="flex items-center text-gray-700">
                <img className="h-5 mr-1" src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-512.png" alt="Location"/>
                {userData.location}
              </p>
            )}
            {userData.twitter_username && (
              <p className="flex items-center text-gray-700">
                <img className="h-5 mr-1" src="https://logowik.com/content/uploads/images/twitter-x5265.logowik.com.webp" alt="Twitter"/>
                <a href={`https://twitter.com/${userData.twitter_username}`} target="_blank" rel="noopener noreferrer">{userData.twitter_username}</a>
              </p>
            )}
          </div>
        </div>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {repositories.map((repo) => (
          <li key={repo.id} className="border border-gray-300 p-4 rounded-md">
            <strong className="block text-lg font-bold">{repo.name}</strong>
            <p className="text-gray-700">{repo.description || 'No description available'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignment5;
