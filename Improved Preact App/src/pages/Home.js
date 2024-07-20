// src/pages/Home.js
import { h } from 'preact';
import { useMeta } from '../hooks/useMeta';

const Home = () => {
  useMeta('Home - Preact App', 'This is the home page of our Preact app');

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page.</p>
    </div>
  );
};

export default Home;
