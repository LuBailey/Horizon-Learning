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
          <h3 style={{ color: theme.primary }}>
            {aboutWebCourse.tasterSesion}
          </h3>
          <p style={{ color: theme.tertiary80 }}>
            <h2>{aboutWebCourse.statement}</h2>

            <br />
            <ul>
              <li>{aboutWebCourse.description1}</li>
              <li>{aboutWebCourse.description2}</li>
              <li>{aboutWebCourse.description3}</li>
              <li>{aboutWebCourse.description4}</li>
            </ul>
            <br />
            {aboutWebCourse.description5}
            <br />
            <br />
            {aboutWebCourse.price1}
            <br />
            <b>
              <u>{aboutWebCourse.price2}</u>
            </b>
            <br />
            <br />
            <h2>{aboutWebCourse.requirementTitle}</h2>

            <br />
            <ul>
              <li> {aboutWebCourse.requirement1} </li>
              <li>{aboutWebCourse.requirement2}</li>
              <br />
              <br />
            </ul>

            {aboutWebCourse.description6}
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
