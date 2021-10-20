import {BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';
import CheckMoreSection from './CheckMoreSection';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import QuestionSection from './QuestionSection';
import Supporters from './Supporters';

function App() {
  return (
    <>
      <Router>
      {/* <Switch> */}
      <Navbar />
      <Hero />
      <Supporters />
      <QuestionSection />
      <CheckMoreSection />
      <Footer />
      {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
