import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Helmet } from 'react-helmet';
import {
  About,
  Navbar,
  Landing,
  Skills,
  Education,
  Projects,
  Services,
} from '../../components';
import { headerData } from '../../data/headerData';
import './AboutPage.css';

function AboutPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Helmet>
        <title>{headerData.name} | About Me</title>
      </Helmet>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Services />
    </div>
  );
}
export default AboutPage;
