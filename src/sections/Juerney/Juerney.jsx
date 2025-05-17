import React, { useState } from 'react';
import styles from './Juerney.module.css';
// Import Font Awesome icons
import { FaGithub, FaLaptopCode, FaUserGraduate, FaProjectDiagram, FaRocket } from 'react-icons/fa';

const milestones = [
  {
    year: '2020',
    title: 'Joined GitHub Student Developer Pack',
    icon: <FaUserGraduate className={styles.icon} />,
    description: 'Started my journey with the GitHub Education Student Pack, unlocking multiple learning and development platforms.',
    details: 'I gained access to premium resources like Frontend Masters and Pluralsight, which helped me build strong technical skills. I developed my first resume website using VS Code, JavaScript, HTML, and CSS, and deployed it using GitHub Pages.',
    projectLink: 'https://paras65.github.io/resume/',
  },
  {
    year: '2021-2022',
    title: 'Freelance & Full-Stack Growth',
    icon: <FaLaptopCode className={styles.icon} />,
    description: 'Worked on freelance projects and dove into React & Node.js, building full-stack applications.',
    details: `I developed a responsive business website for a local client, learning about client communication, deadlines, and the importance of mobile-first design. 
In this period, I also built several full-stack projects, learned about REST APIs, created CRUD apps, experimented with authentication, and deployed my first MERN stack project.`,
    projectLink: 'https://36montane.vercel.app/home',
  },
  {
    year: '2023',
    title: 'Joined GitHub Developer Program',
    icon: <FaGithub className={styles.icon} />,
    description: 'Became a member of the GitHub Developer Program and expanded my professional network.',
    details: 'I joined the GitHub Developer Program, which gave me access to exclusive resources, early features, and a global community of developers. This helped me collaborate on open source, participate in hackathons, and further improve my teamwork and coding skills.',
    // No projectLink for this one
  },
  {
    year: '2024',
    title: 'Portfolio & Professional Growth',
    icon: <FaRocket className={styles.icon} />,
    description: 'Launched my portfolio and started working on advanced web apps.',
    details: 'Focused on performance, accessibility, and modern UI/UX. Started mentoring juniors and sharing knowledge.',
    projectLink: 'https://paras65.github.io/portfolio/',
  },
];

function Juerney() {
  const [openIdx, setOpenIdx] = useState(milestones.length - 1); // Last milestone open by default

  const handleToggle = idx => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className={styles.journeySection} id="journey">
      <h2>My Web Development Journey</h2>
      <div className={styles.timeline}>
        {milestones.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.milestone} ${openIdx === idx ? styles.active : ''} ${idx === milestones.length - 1 ? styles.latest : ''}`}
            tabIndex={0}
            onClick={() => handleToggle(idx)}
            onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && handleToggle(idx)}
            aria-expanded={openIdx === idx}
          >
            <div className={styles.year}>
              {item.icon}
              {item.year}
            </div>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {openIdx === idx && (
                <div className={styles.details}>
                  <p>{item.details}</p>
                  {item.projectLink && (
                    <a
                      href={item.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <FaProjectDiagram style={{ marginRight: '0.4em', verticalAlign: 'middle' }} />
                      View Live Project
                    </a>
                  )}
                </div>
              )}
            </div>
            {idx === milestones.length - 1 && <span className={styles.badge}>Current</span>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Juerney;