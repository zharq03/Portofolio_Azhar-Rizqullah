import React from 'react';
import Nav from '../components/Nav.jsx';
import Herro from '../components/Herro.jsx';
import Passion from '../components/Passion.jsx';
import Projects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';
import Contact from '../components/Contact.jsx';
import WelcomePopup from '../components/WelcomePopup.jsx';

const Home = () => {
  return (
    <div>
      <Nav />
      <Herro />
      <Passion />
      <Projects />
      <Skills />
      <Contact />
      <WelcomePopup />
    </div>
  );
};

export default Home;