import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import montaneLogo from '../../assets/Untitled.svg';
import gkDigitalStudioLogo from '../../assets/Black & Blue Creative Digital Camera Photo Studio Logo.png';

const projectsData = [
  {
    src: montaneLogo,
    link: 'https://36montane.vercel.app/',
    h3: '36 Montane',
    p: 'Built a full-stack trip booking web app using React.js',
  },
  {
    src: 'https://yt3.googleusercontent.com/MiHUZIVJ8d-iOcJPxQQXrInjwT469PCR-xDh08rh0Mv4OGJ5oT3aJT-i3eDxpu3AzTlPphd0pw=s160-c-k-c0x00ffffff-no-rj',
    link: 'https://paras65.github.io/AlenSahuArt/',
    h3: 'Alen Sahu Art',
    p: 'Created a portfolio website for Alen Sahu Art using React.js',
  },
  {
    src: gkDigitalStudioLogo,
    link: 'https://gk-digital-studio.vercel.app/',
    h3: 'GK Digital Studio',
    p: 'Developed a portfolio website for GK Digital Studio using React.js',
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.h3}
            {...project}
            className="responsiveImage"
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
