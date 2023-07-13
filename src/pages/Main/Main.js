import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Navbar,
  Footer,
  Landing,
  MainLanding,
  About,
  AboutMain,
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

function Main() {
  return (
    <div>
      <Helmet>
        <title> Horizon Learning </title>
      </Helmet>
      <Navbar />
      {/*<Landing /> */}
      <MainLanding />
      {/*<About /> */}
      <AboutMain />
      {/*<Skills /> */}
      {/*<Education /> */}
      {/*<Projects /> */}
      {/*<Achievement /> */}
      {/* <Blog /> */}
      <Services />
      <Contacts />
      {/*<Footer />}*/}
    </div>
  );
}

export default Main;
