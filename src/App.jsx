import { h } from 'preact';
import { Router } from 'preact-router';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  </div>
);

export default App;
