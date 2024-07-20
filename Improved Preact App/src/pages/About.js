// src/pages/About.js
import { h } from 'preact';
import { useMeta } from '../hooks/useMeta';

const About = () => {
  useMeta('About - Preact App', 'This is the about page of our Preact app');

  return (
    <div>
      <h1>About</h1>
      <p>Learn more about us on this page.</p>
    </div>
  );
};

export default About;
