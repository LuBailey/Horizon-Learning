import React, { useContext } from 'react';

import './AboutMain.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutWebDev } from '../../data/aboutWebDev';

function AboutMain() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className='about'
      id='about'
      style={{ backgroundColor: theme.secondary }}
    >
      <div className='line-styling'>
        <div
          className='style-circle'
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className='style-circle'
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className='style-line'
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className='about-body'>
        <div className='about-description'>
          <h2 style={{ color: theme.primary }}>{aboutWebDev.title}</h2>
          <p style={{ color: theme.tertiary80 }}>
            {aboutWebDev.description1}
            <br />
            <br />
            {aboutWebDev.description2}
            <br />
            <br />
            {aboutWebDev.description3}
            <br />
          </p>
        </div>
        <div className='about-img'>
          <img
            src={aboutWebDev.image === 2 ? theme.aboutimg1 : theme.aboutimg2}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMain;
