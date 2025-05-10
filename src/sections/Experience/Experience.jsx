import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBuilding, faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './ExperienceStyles.module.css';

function Experience() {
  const experiences = [
    { role: 'Node Developer TL', company: 'LeadAngel',description: `Responsible for managing the interchange of
 data between the server and the users. 
The development of all sever-side logic
 definition and maintenance of the central
 database ,and ensuring high performance
 and responsiveness to requests from the
 frontend.
 Integration of user-facing elements
 developed by front-end   developers with
 server logic`, duration: 49  },
   
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeight = document.getElementById('experience').offsetHeight;
      const newIndex = Math.min(
        Math.floor((scrollPosition / sectionHeight) * experiences.length),
        experiences.length - 1
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [experiences.length]);

  return (
    <section id="experience" className={styles.workExperienceContainer}>
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Work Experience
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-between p-10 m-6 bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-xl shadow-xl transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-tl hover:from-gray-100 hover:to-white ${index === activeIndex ? 'scale-110 shadow-2xl' : 'scale-100'}`}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 uppercase tracking-wider transition-colors duration-300 ease-in-out hover:text-green-600">
              <FontAwesomeIcon icon={faCode} className="text-green-500 mr-3 transition-transform duration-300 ease-in-out hover:rotate-180" /> {exp.role}
            </h3>
            <p className="text-gray-600 mb-4 transition-colors duration-300 ease-in-out hover:text-blue-600">
              <FontAwesomeIcon icon={faBuilding} className="text-blue-500 mr-3 transition-transform duration-300 ease-in-out hover:rotate-180" /> {exp.company}
            </p>
            <p className="text-gray-500 mb-6 text-center transition-opacity duration-300 ease-in-out hover:opacity-80">{exp.description}</p>
            <p className="text-sm text-gray-400 transition-colors duration-300 ease-in-out hover:text-orange-600">
              <FontAwesomeIcon icon={faClock} className="text-orange-500 mr-3 transition-transform duration-300 ease-in-out hover:rotate-180" /> <strong>Years of Experience:</strong> {exp.duration} months
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;