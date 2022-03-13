import React from 'react';
import validator from 'validator';
import axios from 'axios';
import { Alert, AlertDiv } from '../../utils/Alert/Alert';

import './RegisterPage.css';

async function signUp(email, pw, pw_check, nm, status) {
  // 만약 실시간으로 email 형식을 체크 하고 싶으면
  // input태그에다가 onChange를 걸고 계속 validator로 체킹하면 됨.

  const reg = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/,
  );

  let idDiv = document.querySelector('#idField');
  let pwDiv = document.querySelector('#pwField');
  let repwDiv = document.querySelector('#repwField');
  let idLabel = document.querySelector('#idLabel');
  let pwLabel = document.querySelector('#pwLabel');
  let repwLabel = document.querySelector('#repwLabel');
  let error = false;

  if (!validator.isEmail(email)) {
    idDiv.classList.add('warning');
    console.log(idLabel);
    idLabel.innerText = 'Email - Email 형식으로 입력해주세요.';
    error = true;
  } else {
    idLabel.innerText = 'Email';
    idDiv.classList.remove('warning');
  }

  console.log(reg.test(pw));

  if (!reg.test(pw)) {
    pwDiv.classList.add('warning');
    pwLabel.innerText =
      'Password - 영문, 숫자, 기호 포함 8 ~ 16자로 설정해주세요.';
    error = true;
  } else {
    pwLabel.innerText = 'Password';
    pwDiv.classList.remove('warning');
  }
  if (pw !== pw_check || pw === '') {
    repwDiv.classList.add('warning');
    repwLabel.innerText = 'Check Password - 비밀번호가 다릅니다.';
    error = true;
  } else {
    repwLabel.innerText = 'Check Password';
    repwDiv.classList.remove('warning');
  }

  if (error) return;

  const info = {
    email: email,
    pw: pw,
    nm: nm,
    status: status,
  };

  var ret = await (
    await axios.post(process.env.REACT_APP_API_URL + '/setRegister', info)
  ).data;

  if ('error' in ret) {
    Alert('error', `동일한 ${ret.error}이 존재합니다.`);
  } else {
    Alert('success', '회원 가입이 완료되었습니다.');
    window.location.href = '/login';
  }
}

function RegisterPage(props) {
  return (
    <>
      <div className="registerPage">
        <div className="loginDiv">
          <h1>Make an account</h1>
          <label htmlFor="idField" id="idLabel">
            Email
          </label>
          <br />
          <input
            id="idField"
            type="email"
            className="field"
            onClick={() => {
              let idDiv = document.querySelector('#idField');
              let idLabel = document.querySelector('#idLabel');

              idDiv.classList.remove('warning');
              idLabel.innerText = 'Email';
            }}
          />
          <br />
          <label htmlFor="pwField" id="pwLabel">
            Password
          </label>
          <br />
          <input
            id="pwField"
            type="password"
            className="field"
            onClick={() => {
              let pwDiv = document.querySelector('#pwField');
              let pwLabel = document.querySelector('#pwLabel');

              pwDiv.classList.remove('warning');
              pwLabel.innerText = 'Password';
            }}
          />
          <br />
          <label htmlFor="repwField" id="repwLabel">
            Check Password
          </label>
          <br />
          <input
            id="repwField"
            type="password"
            className="field"
            onClick={() => {
              let repwDiv = document.querySelector('#repwField');
              let repwLabel = document.querySelector('#repwLabel');

              repwDiv.classList.remove('warning');
              repwLabel.innerText = 'Check Password';
            }}
          />
          <br />
          <label htmlFor="nickNm">닉네임을 지정해주세요.</label>
          <br />
          <input id="nickNm" className="field" />
          <br />
          <label htmlFor="userStatus">상태메세지를 작성해주세요.</label>
          <br />
          <input
            id="userStatus"
            className="field"
            placeholder="잘 부탁드립니다."
          />
          <br />

          <button
            className="registerBtn"
            onClick={() => {
              let email = document.getElementById('idField').value;
              let pw = document.getElementById('pwField').value;
              let pw_check = document.getElementById('repwField').value;
              let nm = document.getElementById('nickNm').value;
              let status = document.getElementById('userStatus').value;
              signUp(email, pw, pw_check, nm, status);
            }}
          >
            Register now
          </button>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
