import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import pj from '../../assets/Untitled.svg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pj}
          link="https://36montane.vercel.app/"
          h3="36 Montane"
          p="Built a full-stack trip booking web app
using React.js"
          className="responsiveImage"
        />
       
      </div>
    </section>
  );
}

export default Projects;
