import React from 'react';
import Header from './Header';
import Greetings from './Greetings';
import Footer from './Footer';
import Aboutme from './Aboutme';
import Myprojects from './MyProjects';
import Cta from './Cta';
import Gallery from './Gallery';

function App() {
  return (
    <div className="stars">
      <div className="twinkling">
        <div className="clouds">
          <Header />
          <Greetings />
          <hr id="aboutme" />
          <Aboutme />
          <hr id="myprojects" />
          <Myprojects />
          <Gallery />
          <hr id="cta" />
          <Cta />
          <hr />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
