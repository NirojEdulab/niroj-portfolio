import TechStack from "./TechStack";

const ProjectCard = ({
  liveLink,
  logo,
  title,
  desc,
  projectLink,
  createdAt,
}) => {
  return (
    // <a href={liveLink} target='_blank'>
    //   <img className='hover' src={logo} alt={`${logo} app`}/>
    //   <h3>{title}</h3>
    //   <p style={{ fontSize: '16px', fontWeight: '400' }}>{desc}</p>
    // </a>
    <div className="projectBox">
      <img src={logo} alt="project logo" />
      <h3>
        {title}
        <p></p>
      </h3>

      <div className="techBox">
        {/* <TechStack tech={"TypeScript"} />
        <TechStack tech={"NextJS"} /> */}
      </div>
      <span>
        <p style={{ fontSize: "14px", textAlign: "start", marginLeft: "5px" }}>
          {createdAt}
        </p>
      </span>
      <div className="projectLinks">
        <a href={projectLink} target="_blank">
          <button>View Code</button>
        </a>
        <a href={liveLink} target="_blank">
          <button>Visit Site</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
