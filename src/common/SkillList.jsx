import React from "react";

const SkillList = ({ icon, name }) => {
  return (
    <span>
      <img src={icon} alt={`${icon} logo`} />
      <p>{name}</p>
    </span>
  );
};

export default SkillList;
