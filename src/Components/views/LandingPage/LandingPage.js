import React from 'react';
import './LandingPage.css';
import Header from '../../../utils/Header/Header';
import BasicRating from '../../../utils/Rating/Rating';
import Card from '../../../utils/Card/Card';

function LandingPage(props) {
  return (
    <div className="page">
      <div className="center">
        <div className="header">
          <Header />
        </div>
        <BasicRating />
        <Card />
        <div className="questions"></div>

        <div className="footer"></div>
      </div>
    </div>
  );
}

export default LandingPage;
