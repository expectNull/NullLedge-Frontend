import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../utils/Header/Header';

import './RegisterPage.css';

function RegisterPage(props) {
  return (
    <div className="registerPage">
      <div className="loginDiv">
        <h1>Make an account</h1>
        <label htmlFor="idField">Email</label>
        <br />
        <input id="idField" className="field" />
        <br />
        <label htmlFor="pwField">Password</label>
        <br />
        <input id="pwField" type="password" className="field" />
        <br />
        <label htmlFor="repwField">Check Password</label>
        <br />
        <input id="repwField" type="password" className="field" />
        <br />
        <button className="registerBtn">Register now</button>
      </div>
    </div>
  );
}

export default RegisterPage;
