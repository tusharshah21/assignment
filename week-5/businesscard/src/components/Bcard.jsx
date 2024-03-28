import React from 'react';

export default function Bcard(props) {
  return (
    <div className="border-[1px] rounded-lg p-5 m-5 max-w-[400px] shadow-lg bg-[#f8f9fa]">
      <h2 className="mb-2 text-2xl text-[#333] font-bold">{props.name}</h2>
      <p className="text-lg text-[#555] mb-4">{props.description}</p>
      <h3 className="text-lg mb-3 text-[#333] font-bold">Interests</h3>
      <ul className="p-0 m-0">
        {props.interests.map((interest) => (
          <li key={interest} className="text-md mb-1 text-[#555]">{interest}</li>
        ))}
      </ul>
      <div className="flex mb-4">
        <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="decoration-0 text-[#fff] py-3 px-4 rounded-md bg-[#007BFF] inline-block m-3 shadow-lg">LinkedIn</a>
        <br />
        <a href={props.github} target="_blank" rel="noreferrer nofollow" className="decoration-0 text-[#fff] py-3 px-4 rounded-md bg-[#555] inline-block m-3 shadow-lg">Github</a>
        {props.otherSocialMedia && (
          <a href={props.otherSocialMedia.link} target="_blank" rel="noopener noreferrer" className="decoration-0 text-[#fff] py-3 px-4 rounded-md bg-[#007BFF] inline-block m-3 shadow-lg">
            {props.otherSocialMedia.label}
          </a>
        )}
      </div>
    </div>
  );
}
