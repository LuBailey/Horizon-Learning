import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import './BeginnerJapanese.css';
import { SingleCourse, Navbar } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { jp12WCourse } from '../../data/jp12WCourse';
import { headerData } from '../../data/headerData';

function BeginnerJapanese() {
  const [search, setSearch] = useState('');
  const { theme } = useContext(ThemeContext);

  const filteredArticles = jp12WCourse.filter((course) => {
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
      className='BeginnerJapanese'
      style={{ backgroundColor: theme.secondary }}
    >
      <Helmet>
        <title>Japanese Language</title>
      </Helmet>

      <Navbar />

      <div
        className='beginnerJapanese--header'
        style={{ backgroundColor: theme.primary }}
      >
        <h1 style={{ color: theme.secondary }}>
          <ruby>
            初心者<rt>しょしんしゃ</rt>
          </ruby>
          <ruby>
            向<rt>む</rt>け
          </ruby>
          <ruby>
            日本語<rt>にほんご</rt>
          </ruby>
        </h1>
      </div>
      <div className='beginnerJapanese--container'>
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
    </div>
  );
}

export default BeginnerJapanese;
