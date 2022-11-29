import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from 'react-icons/hi';

import './Course.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { webDev8WcourseData } from '../../data/webDev8WcourseData';
import SingleCourse from './SingleCourse/SingleCourse';

function Course() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      '&:hover': {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: '40px',
      height: '40px',
      padding: '0.5rem',
      fontSize: '1.05rem',
      borderRadius: '50%',
      cursor: 'pointer',
      '&:hover': {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {webDev8WcourseData.length > 0 && (
        <div
          className='course'
          id='course'
          style={{ backgroundColor: theme.secondary }}
        >
          <div className='course--header'>
            <h1 style={{ color: theme.primary }}>Course</h1>
          </div>
          <div className='course--body'>
            <div className='course--bodyContainer'>
              {webDev8WcourseData.map((course) => (
                <SingleCourse
                  theme={theme}
                  title={course.title}
                  desc={course.description}
                  id={course.id}
                  image={course.image}
                />
              ))}
            </div>
            {webDev8WcourseData.length > 3 && (
              <div className='course--viewAll'>
                <Link to='/course'>
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Course;
