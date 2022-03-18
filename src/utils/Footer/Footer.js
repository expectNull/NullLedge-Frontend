import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <div className="footer">
      <div className="sectionhelper">
        <div className="sectionDiv">
          <ul>
            <li className="title">Whyrano</li>
            <li>Questions</li>
            <li>Developer Jobs Directory</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="sectionDiv">
          <ul>
            <li className="title">ExpectNull Team</li>
            <a href="https://github.com/dblepart99">
              <li>Kim HyunSoo</li>
            </a>
            <a href="https://github.com/LONGNEW">
              <li>Jang ShinHyung</li>
            </a>
            <a href="https://github.com/BHwi">
              <li>Park ByeongHwi</li>
            </a>
          </ul>
        </div>
        <div className="sectionDiv">
          <ul>
            <li className="title">ChungNam National Univ.</li>
            <li>The Division of Computer Convergence.</li>
            <li>Dept. Artificial Intelligence</li>
            {/* <li></li> */}
            {/* <li>DCS-Learing</li> */}
          </ul>
        </div>
        <div className="sectionDiv">
          <ul>
            <li className="title">Contact</li>
            <li>whyrano.team@gmail.com</li>
            <a href="https://github.com/expectNull">
              <li>By. ExpectNull</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
