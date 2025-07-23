import React from "react";
import "./Team.css"; // or use Tailwind if you prefer

const Team = ({ members }) => {
  return (
    <section className="team-section">
      <div className="team-grid">
        {members.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">Name: {member.name}</h3>
            <p className="team-title">Title: {member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
