import React from 'react';
import styles from './SkillListStyles.module.css';

function SkillList({ skills }) {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillList}>
        {skills.map((item, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillHeader}>
              <img
                src={item.logo}
                alt={`${item.skill} logo`}
                className={styles.skillLogo}
              />
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillList;
