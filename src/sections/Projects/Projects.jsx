import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard.jsx';
import yoomLogo from '../../assets/viberr.png'

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard link={"https://github.com/NirojEdulab/Yoom"} logo={yoomLogo} title={"Yoom"} desc={"Video Calling App"}/>
        <ProjectCard link={"https://github.com/NirojEdulab/Yoom"} logo={yoomLogo} title={"Yoom"} desc={"Video Calling App"}/>
        <ProjectCard link={"https://github.com/NirojEdulab/Yoom"} logo={yoomLogo} title={"Yoom"} desc={"Video Calling App"}/>
        <ProjectCard link={"https://github.com/NirojEdulab/Yoom"} logo={yoomLogo} title={"Yoom"} desc={"Video Calling App"}/>
        <ProjectCard link={"https://github.com/NirojEdulab/Yoom"} logo={yoomLogo} title={"Yoom"} desc={"Video Calling App"}/>
        <ProjectCard link={"https://github.com/NirojEdulab/Yoom"} logo={yoomLogo} title={"Yoom"} desc={"Video Calling App"}/>
      </div>
    </section>
  )
}

export default Projects
