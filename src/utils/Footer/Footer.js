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
            <a href="https://plus.cnu.ac.kr/">
              <li className="title">ChungNam National Univ.</li>
            </a>
            <a href="https://computer.cnu.ac.kr/computer/">
              <li>The Division of Computer Convergence.</li>
            </a>
            <a href="https://homepage.cnu.ac.kr/ai/">
              <li>Dept. Artificial Intelligence</li>
            </a>
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
