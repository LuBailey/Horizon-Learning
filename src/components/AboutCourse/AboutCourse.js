import React, { useContext } from 'react';

import './AboutCourse.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutWebCourse } from '../../data/aboutWebCourse';

function AboutCourse() {
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
          <h2 style={{ color: theme.primary }}>{aboutWebCourse.title}</h2>
          <p style={{ color: theme.tertiary80 }}>
            {aboutWebCourse.statement}
            <br />
            <br />
            <ul>
              <li>{aboutWebCourse.description1}</li>
              <li>{aboutWebCourse.description2}</li>
              <li>{aboutWebCourse.description3}</li>
            </ul>
            <br />
            {aboutWebCourse.description4}
          </p>
        </div>
        {/*
        <div className='about-img'>
          <img
            src={aboutWebCourse.image === 2 ? theme.aboutimg1 : theme.aboutimg2}
            alt=''
          />
          
        </div>
  */}
      </div>
    </div>
  );
}

export default AboutCourse;
