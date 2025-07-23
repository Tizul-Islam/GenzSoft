import React from 'react';
import Team from './Team'; // Correct import
import screenshot from '../About/image/member.jpg'
const Teams = () => {
  const members = [
    {
      id: 1,
      name: "John Doe",
      title: "Project Manager",
      image: screenshot
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Lead Developer",
      image: screenshot
    },
    {
      id: 3,
      name: "Mike Johnson",
      title: "UI/UX Designer",
      image: screenshot
    }, {
        id: 4,
        name: "John Doe",
        title: "Project Manager",
        image: screenshot
      },
      {
        id: 5,
        name: "Jane Smith",
        title: "Lead Developer",
        image: screenshot
      },
      {
        id: 6,
        name: "Mike Johnson",
        title: "UI/UX Designer",
        image: screenshot
      }
  ];

  return (
    <div className="team-member">
      <h2 className='text-4xl font-bold text-center pt-15 text-[#63b309]'>Our Member</h2>
      <Team members={members} />
    </div>
  );
};

export default Teams;
