const ProjectCard = ({ link, logo, title, desc }) => {
  return (
    <a href={link} target='_blank'>
        <img className='hover' src={logo} alt={`${logo} app`} />
        <h3>{title}</h3>
        <p>{desc}</p>
    </a>
  )
}

export default ProjectCard
