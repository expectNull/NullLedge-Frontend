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
            <li className="title">ExceptNull Team</li>
            <li>Kim HyunSoo</li>
            <li>Jang ShinHyung</li>
            <li>Park ByeongHwi</li>
          </ul>
        </div>
        <div className="sectionDiv">
          <ul>
            <li className="title">ChungNam National Univ.</li>
            <li>Dept. Computer Engineering</li>
            <li>Dept. Artificial Intelligence</li>
            <li>Group SPG</li>
            <li>DCS-Learing</li>
          </ul>
        </div>
        <div className="sectionDiv">
          <ul>
            <li className="title">내용 적어주세용</li>
            <li>내용 적어주세용</li>
            <li>내용 적어주세용</li>
            <li>내용 적어주세용</li>
          </ul>
        </div>
      </div>
      {/* <a href="https://github.com/excpetNull">By. ExceptNull</a> */}
    </div>
  );
}

export default Footer;
