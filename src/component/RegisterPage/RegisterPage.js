import React from 'react';
import validator from 'validator';
import axios from 'axios';
import bcrypt from 'bcryptjs';

import './RegisterPage.css';

async function signUp(email, pw, pw_check, nm, status) {
  // 만약 실시간으로 email 형식을 체크 하고 싶으면
  // input태그에다가 onChange를 걸고 계속 validator로 체킹하면 됨.
  if (!validator.isEmail(email)) {
    alert('Email 형식을 지켜주세요.');
    return;
  }

  if (pw !== pw_check) {
    alert('비밀번호가 동일하지 않습니다.');
    return;
  }

  // 이게 프론트에서 백으로 얘가 넘어가면 안 되는 거였나??
  // 뭐였지.
  let salt = await bcrypt.genSalt();
  let hashed = await bcrypt.hash(pw, salt);

  const info = {
    email: email,
    salt: salt,
    hashed: hashed,
    nm: nm,
    status: status,
  };

  var ret = await (
    await axios.post(process.env.REACT_APP_API_URL + '/setRegister', info)
  ).data;

  if ('error' in ret) {
    alert(`동일한 ${ret.error}이 존재합니다.`);
  } else {
    // redirect 걸어주기 어디로 걸거임??
    alert('회원 가입이 완료되었습니다.');
  }
}

function RegisterPage(props) {
  return (
    <div className="registerPage">
      <div className="loginDiv">
        <h1>Make an account</h1>
        <label htmlFor="idField">Email</label>
        <br />
        <input id="idField" type="email" className="field" />
        <br />
        <label htmlFor="pwField">Password</label>
        <br />
        <input id="pwField" type="password" className="field" />
        <br />
        <label htmlFor="repwField">Check Password</label>
        <br />
        <input id="repwField" type="password" className="field" />
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
  );
}

export default RegisterPage;
