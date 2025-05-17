import React from 'react';
import { FaLinkedin, FaCertificate } from 'react-icons/fa';
import { SiPluralsight } from 'react-icons/si';
import styles from './Certifications.module.css';

const certifications = [
  {
    platform: 'LinkedIn',
    icon: <FaLinkedin color="#0077b5" />,
    name: 'React.js Essential Training',
    url: 'https://www.linkedin.com/learning/certificates/16fc17339868fbc7eb788e3403d404038948ea80cc508113a8d43bc7dc3c81ae?trk=public_profile_see-credential',
    date: 'Jan 2024',
  },
  {
    platform: 'Pluralsight',
    icon: <SiPluralsight color="#f15b2a" />,
    name: 'Node.js: Getting Started',
    url: 'https://app.pluralsight.com/profile/your-pluralsight-cert-url',
    date: 'Feb 2024',
  },
  // Add more certifications as needed
];

function Certifications() {
  return (
    <section className={styles.certificationsSection}>
      <h2 className={styles.title}>
        <FaCertificate className={styles.iconTitle} /> Certifications
      </h2>
      <ul className={styles.certList}>
        {certifications.map((cert, idx) => (
          <li key={idx} className={styles.certItem}>
            <span className={styles.certIcon}>{cert.icon}</span>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certLink}
            >
              {cert.name}
            </a>
            <span className={styles.certPlatform}>({cert.platform})</span>
            <span className={styles.certDate}>{cert.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;