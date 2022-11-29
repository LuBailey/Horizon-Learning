import React from 'react';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleCourse.css';

function SingleCourse({ theme, title, desc, id, image }) {
  return (
    <Fade bottom>
      <a
        className='singleCourse'
        key={id}
        target='_blank'
        rel='noreferrer'
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className='singleCourse--body'>
          <h3 style={{ color: theme.secondary }}>{title}</h3>
          <img src={image ? image : placeholder} />
          <h6 style={{ color: theme.secondary }}>{desc}</h6>
        </div>
      </a>
    </Fade>
  );
}

export default SingleCourse;
