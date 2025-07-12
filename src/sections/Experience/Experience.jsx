/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBuilding, faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './ExperienceStyles.module.css';

// Utility function to calculate duration and format date range
function getExperienceDetails(startDateStr, endDateStr) {
  const start = new Date(startDateStr);
  const isPresent = endDateStr.toLowerCase() === 'present';
  const end = isPresent ? new Date() : new Date(endDateStr);

  if (isNaN(start.getTime())) {
    return { duration: 0, yearRange: 'Invalid Date' };
  }

  let months;
  months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();
  const duration = months <= 0 ? 0 : months + 1; // +1 to be inclusive

  const startMonth = start.toLocaleString('default', { month: 'long' });
  const startYear = start.getFullYear();

  const yearRange = isPresent
    ? `${startMonth} ${startYear} - Present`
    : `${startMonth} ${startYear} - ${end.toLocaleString('default', {
        month: 'long',
      })} ${end.getFullYear()}`;

  return { duration, yearRange };
}

const experienceData = [
  {
    role: 'Software Engineer',
    company: 'Capgemini',
    description:
      'Worked on developing and maintaining web applications using modern Node.js frameworks.',
    startDate: '2025-06-01',
    endDate: 'Present',
  },
  {
    role: 'Node Developer TL',
    company: 'LeadAngel',
    description:
      'Responsible for managing the interchange of data between the server and the users. The development of all sever-side logic, definition and maintenance of the central database, and ensuring high performance and responsiveness to requests from the frontend. Integration of user-facing elements developed by front-end developers with server logic.',
    startDate: '2021-04-01',
    endDate: '2025-05-01',
  },
];

function Experience() {

  return (
    <section id="experience" className={styles.workExperienceContainer}>
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Work Experience
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        {experienceData.map((job) => {
          const { duration, yearRange } = getExperienceDetails(
            job.startDate,
            job.endDate
          );
          return (
            <div
              key={job.role}
              className="flex flex-col items-center p-10 bg-gradient-to-br from-white to-gray-100 border border-gray-200 rounded-xl shadow-xl transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:bg-gradient-to-tl hover:from-gray-100 hover:to-white"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 uppercase tracking-wider transition-colors duration-300 ease-in-out hover:text-green-600">
                <FontAwesomeIcon icon={faCode} className="text-green-500 mr-3 transition-transform duration-300 ease-in-out hover:rotate-180" /> {job.role}
              </h3>
              <p className="text-gray-600 mb-1 transition-colors duration-300 ease-in-out hover:text-blue-600">
                <FontAwesomeIcon icon={faBuilding} className="text-blue-500 mr-3 transition-transform duration-300 ease-in-out hover:rotate-180" /> {job.company}
              </p>
              <p className="text-sm text-gray-400 mb-4">{yearRange}</p>
              <p className="text-gray-500 mb-6 text-center transition-opacity duration-300 ease-in-out hover:opacity-80">{job.description}</p>
              <p className="mt-auto text-sm text-gray-400 transition-colors duration-300 ease-in-out hover:text-orange-600">
                <FontAwesomeIcon icon={faClock} className="text-orange-500 mr-3 transition-transform duration-300 ease-in-out hover:rotate-180" /> <strong>Experience:</strong> {duration} months
              </p>
               <br />
            </div>
           
          );
        })}
      </div>
    </section>
  );
}

export default Experience;