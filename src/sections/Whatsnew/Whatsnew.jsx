import React, { useState, useEffect, useCallback } from 'react';
import {
  FaNewspaper, FaSpinner, FaExternalLinkAlt, FaExclamationCircle, FaCode,
  FaReact, FaNodeJs, FaAngular, FaVuejs
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import styles from './Whatsnew.module.css';

// Map of technologies to their official GitHub repos and icons
const techRepos = {
  reactjs: { repo: 'facebook/react', label: 'ReactJS', icon: <FaReact color="#61dafb" /> },
  nodejs: { repo: 'nodejs/node', label: 'Node.js', icon: <FaNodeJs color="#3c873a" /> },
  nextjs: { repo: 'vercel/next.js', label: 'Next.js', icon: <SiNextdotjs color="#000" /> },
  typescript: { repo: 'microsoft/TypeScript', label: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
  angular: { repo: 'angular/angular', label: 'Angular', icon: <FaAngular color="#dd0031" /> },
  vuejs: { repo: 'vuejs/vue', label: 'Vue.js', icon: <FaVuejs color="#42b883" /> },
};

function Whatsnew() {
  const [tech, setTech] = useState('reactjs');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch latest releases from GitHub public API (no code snippet check)
  const fetchGithubReleases = useCallback(async (selectedTech) => {
    setLoading(true);
    setNews([]);
    try {
      const repo = techRepos[selectedTech]?.repo;
      if (!repo) return;
      const res = await fetch(`https://api.github.com/repos/${repo}/releases?per_page=5`);
      const data = await res.json();
      setNews(Array.isArray(data) ? data : []);
    } catch {
      setNews([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const techKeys = Object.keys(techRepos);

  useEffect(() => {
    fetchGithubReleases(tech);
  }, [tech, fetchGithubReleases]);

  const handleTechClick = (value) => {
    setTech(value);
  };

  // Show only the latest notification at the top
  const latestNotification = !loading && news.length > 0 ? news[0] : null;

  return (
    <section className={styles.whatsnewSection}>
      <h2 className={styles.title}>
        <FaNewspaper className={styles.iconTitle} />
        Technology Notifications
      </h2>
      <p className={styles.intro}>
        <FaCode className={styles.iconIntro} />
        Get notified about the latest official releases from each technology's GitHub repository. Click a logo to view notifications!
      </p>
      {/* Show only the latest notification at the top */}
      <div>
        {loading && (
          <div className={styles.notification}>
            <FaSpinner className={`${styles.spinner} fa-spin`} />
            <span>Loading notifications...</span>
          </div>
        )}
        {!loading && latestNotification && (
          <div className={styles.notification}>
            <FaNewspaper className={styles.iconNews} />
            <a href={latestNotification.html_url} target="_blank" rel="noopener noreferrer" className={styles.newsLink}>
              {latestNotification.name || latestNotification.tag_name}
            </a>
            <FaExternalLinkAlt className={styles.iconExternal} />
            <span className={styles.newsMeta}>
              {latestNotification.published_at && (
                <>Published on {new Date(latestNotification.published_at).toLocaleDateString()}</>
              )}
            </span>
          </div>
        )}
        {!loading && tech && news.length === 0 && (
          <div className={styles.notification}>
            <FaExclamationCircle className={styles.iconNoNews} />
            <span>
              No recent notifications found for <span className={styles.techName}>{techRepos[tech]?.label}</span>.
            </span>
          </div>
        )}
      </div>
      <div className={styles.techGrid}>
        {techKeys.map((key) => {
          const t = techRepos[key];
          return (
            <button
              key={key}
              className={`${styles.techBtn} ${tech === key ? styles.active : ''}`}
              onClick={() => handleTechClick(key)}
              aria-label={t.label}
              type="button"
            >
              <span className={styles.techIcon}>{t.icon}</span>
              <span className={styles.techLabel}>{t.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Whatsnew;