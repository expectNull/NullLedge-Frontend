import React from 'react';
import './LandingPage.css';
import Header from '../../../utils/Header/Header';
import Navbar from '../../../utils/Navbar/Navbar';
import Footer from '../../../utils/Footer/Footer';
import BasicRating from '../../../utils/Rating/Rating';
import Card from '../../../utils/Card/Card';

function LandingPage(props) {
  return (
    <div className="page">
      <Navbar />
      <div className="center">
        <div className="header">
          <Header />
        </div>
        <BasicRating />
        <Card />
        <div className="questions"></div>

        <div className="footer"></div>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
