import React from 'react';
import './LandingPage.css';
import Header from '../../../utils/Header/Header';
import Navbar from '../../../utils/Navbar/Navbar';
import Footer from '../../../utils/Footer/Footer';

function LandingPage(props) {
  return (
    <div className="page">
      <Navbar />
      <div className="center">
        <div className="header">
          <Header />
        </div>

        <div className="questions"></div>

        <div className="footer"></div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
