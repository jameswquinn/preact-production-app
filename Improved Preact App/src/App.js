// src/App.js
import { h } from 'preact';
import { Router } from 'preact-router';
import { lazy, Suspense } from 'preact/compat';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => (
  <div id="app">
    <Header />
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />
          <NotFound default />
        </Router>
      </Suspense>
    </ErrorBoundary>
    <Footer />
  </div>
);

export default App;
