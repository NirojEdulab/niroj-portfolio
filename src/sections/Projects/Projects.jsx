import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard.jsx';
import yoomLogo from '../../assets/Presentation1.png';
import instaCloneLogo from '../../assets/instaclone.png';

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard liveLink={"https://yoom-live.vercel.app/"} logo={yoomLogo} title={"Yoom"} desc={"Video Calling App"} projectLink={"https://github.com/NirojEdulab/Yoom"} createdAt={"Apr 2024"}/>
        <ProjectCard liveLink={"https://social-media-clone-insta.vercel.app/"} logo={instaCloneLogo} title={"Instagram Clone"} desc={""} projectLink={"https://github.com/NirojEdulab/InstagramClone"} createdAt={"Dec 2023"}/>
      </div>
    </section>
  )
}

export default Projects
