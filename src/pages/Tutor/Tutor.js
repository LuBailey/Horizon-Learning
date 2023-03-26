import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from '../../components';
import { headerData } from '../../data/headerData';

function Tutor() {
  return (
    <div>
      <Helmet>
        <title> Horizon Learning </title>
      </Helmet>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Education />
      <Projects />
      {/*<Achievement /> */}
      {/* <Blog /> */}
      {/* <Services /> */}
      {/* <Contacts /> */}
      <Footer />
    </div>
  );
}

export default Tutor;
