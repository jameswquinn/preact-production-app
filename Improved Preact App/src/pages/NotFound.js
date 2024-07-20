// src/pages/NotFound.js
import { h } from 'preact';
import { useMeta } from '../hooks/useMeta';

const NotFound = () => {
  useMeta('404 - Page Not Found', 'The requested page could not be found');

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go back to homepage</a>
    </div>
  );
};

export default NotFound;
