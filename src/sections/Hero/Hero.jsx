import React, { useState, useEffect } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake, faCode } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [city, setCity] = useState(''); // State to store the user's city

  useEffect(() => {
    // Get user's location using Geolocation API
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              // Fetch city name using reverse geocoding
              const locationResponse = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
              );
              const locationData = await locationResponse.json();
              setCity(locationData.city || 'Unknown City');
            } catch (error) {
              console.error('Error fetching location:', error);
              setCity('Unknown City');
            }
          },
          (error) => {
            console.error('Error getting location:', error);
            setCity('Unknown City');
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        setCity('Unknown City');
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    // Fetch weather data based on the city
    const fetchWeather = async () => {
      if (!city) return;
      try {
        console.log('Weather API Key:', process.env);
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError(true);
      }
    };

    fetchWeather();
  }, [city]);

  const themeIcon = theme === 'light' ? sun : moon;
  const gmailIcon = theme === 'light' ? gmailLight : gmailDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  const defaultWeather = {
    location: { name: 'Unknown City' },
    current: { temp_c: 25, condition: { text: 'Clear sky' } },
  };

  const displayedWeather = error ? defaultWeather : weather;

  // Map weather conditions to Font Awesome icons
  const getWeatherIcon = (condition) => {
    if (condition.includes('sun') || condition.includes('clear')) return faSun;
    if (condition.includes('cloud')) return faCloud;
    if (condition.includes('rain')) return faCloudRain;
    if (condition.includes('snow')) return faSnowflake;
    return faCloud; // Default icon
  };

  

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
        <h2>
          <FontAwesomeIcon icon={faCode} className={styles.fullstackIcon} /> FullStack Developer
        </h2>
        {displayedWeather && (
          <div className={styles.weather}>
            <p>
              <FontAwesomeIcon
                icon={getWeatherIcon(displayedWeather.current.condition.text.toLowerCase())}
                className={styles.weatherIcon}
              />{' '}
              Weather in {displayedWeather.location.name}: {displayedWeather.current.temp_c}°C,{' '}
              {displayedWeather.current.condition.text}
            </p>
          </div>
        )}
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
        <p className={styles.description}>
          Experienced Full-Stack Developer specializing in building scalable and secure Node.js applications. Proficient in integrating with diverse platforms, including Google, SAML, Stripe OAuth, Salesforce, and D365. Committed to delivering high-performance, user-friendly solutions that streamline business operations and drive growth.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
