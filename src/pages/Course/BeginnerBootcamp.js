import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from 'react-icons/ai';

import './BeginnerBootcamp.css';
import {
  SingleCourse,
  Navbar,
  AboutCourse,
  About,
  Footer,
} from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { webDev8WcourseData } from '../../data/webDev8WcourseData';
import { headerData } from '../../data/headerData';

function BeginnerBootcamp() {
  const [search, setSearch] = useState('');
  const { theme } = useContext(ThemeContext);

  const filteredArticles = webDev8WcourseData.filter((course) => {
    const content = course.title + course.description;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  const useStyles = makeStyles((t) => ({
    search: {
      color: theme.tertiary,
      width: '40%',
      height: '2.75rem',
      outline: 'none',
      border: 'none',
      borderRadius: '20px',
      padding: '0.95rem 1rem',
      fontFamily: "'Noto Sans TC', sans-serif",
      fontWeight: 500,
      fontSize: '0.9rem',
      backgroundColor: theme.secondary,
      boxShadow:
        theme.type === 'dark'
          ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060'
          : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
      '&::placeholder': {
        color: theme.tertiary80,
      },
      [t.breakpoints.down('sm')]: {
        width: '350px',
      },
    },
    home: {
      color: theme.secondary,
      position: 'absolute',
      top: 25,
      left: 25,
      padding: '7px',
      borderRadius: '50%',
      boxSizing: 'content-box',
      fontSize: '2rem',
      cursor: 'pointer',
      boxShadow:
        theme.type === 'dark'
          ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050'
          : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        color: theme.tertiary,
        transform: 'scale(1.1)',
      },
      [t.breakpoints.down('sm')]: {
        fontSize: '1.8rem',
      },
    },
  }));

  const classes = useStyles();

  return (
    <div
      className='beginnerBootcamp'
      style={{ backgroundColor: theme.secondary }}
    >
      <Helmet>
        <title>Web Development | Fundamentals</title>
      </Helmet>

      <Navbar />

      <AboutCourse />
      <div className='beginnerBootcamp--container'>
        <div className='courses--container'>
          <Grid
            className='course-grid'
            container
            direction='row'
            alignItems='center'
            justifyContent='center'
          >
            {filteredArticles.map((course) => (
              <SingleCourse
                theme={theme}
                title={course.title}
                desc={course.description}
                id={course.id}
                image={course.image}
              />
            ))}
          </Grid>
        </div>
      </div>
      {/*<Footer />*/}
    </div>
  );
}

export default BeginnerBootcamp;
