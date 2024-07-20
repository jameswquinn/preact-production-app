// src/pages/Contact.js
import { h } from 'preact';
import { useMeta } from '../hooks/useMeta';

const Contact = () => {
  useMeta('Contact - Preact App', 'This is the contact page of our Preact app');

  return (
    <div>
      <h1>Contact</h1>
      <p>Get in touch with us.</p>
    </div>
  );
};

export default Contact;
