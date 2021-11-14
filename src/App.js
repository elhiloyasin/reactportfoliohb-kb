import '../src/styling/topnavbar.css';
import '../src/styling/aboutme.css';
import '../src/styling/contact.css';
import '../src/styling/footer.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import AboutMe from './components/AboutMe'
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Router>
        <TopNavbar
          logo='Yassin Elhilo'
          aboutme='ABOUT ME'
          projects='PROJECTS'
          contact='CONTACT'
        />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/footer" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
