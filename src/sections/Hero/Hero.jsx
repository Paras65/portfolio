import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import gmailLight from '../../assets/gmail-dark.svg';
import gmailDark from '../../assets/gmail-white.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const gmailIcon = theme === 'light' ? gmailLight : gmailDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={`${styles.hero} ${styles.imgHoverFlip}`}
          alt="Profile picture of Paras Sahu"
        />
        <img
          className={`${styles.colorMode} ${styles.imgHoverFlip}`}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Paras
          <br />
          Sahu
        </h1>
        <h2>Backend Developer</h2>
        <span>
          <a href="mailto:paraskumarsahu65@gmail.com" target="_blank">
            <img src={gmailIcon} alt="Gmail icon" />
          </a>
          <a href="https://github.com/Paras65" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/paras-sahu/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={`${styles.description} ${styles.centerText}`}>
          Experienced Full-Stack Developer specializing in building scalable and secure Node.js applications. Proficient in integrating with diverse platforms, including Google, SAML, Stripe OAuth, Salesforce, and D365. Committed to delivering high-performance, user-friendly solutions that streamline business operations and drive growth
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
