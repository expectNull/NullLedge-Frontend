import React from 'react';
import validator from 'validator';
import axios from 'axios';
import { Alert, AlertDiv } from '../../utils/Alert/Alert';

import './RegisterPage.css';
import { Checkbox } from '@mui/material';

function getTags() {
  let div = document.getElementsByClassName('selectSubject')[0];
  let tags = div.getElementsByTagName('input');
  let tag = [];

  for (let i = 0; i < tags.length; i++) {
    if (tags[i].checked) {
      tag.push(tags[i].value);
    }
  }

  return tag;
}

async function signUp(email, pw, pw_check, nm, status) {
  // 만약 실시간으로 email 형식을 체크 하고 싶으면
  // input태그에다가 onChange를 걸고 계속 validator로 체킹하면 됨.

  const reg = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,16}$/,
  );

  let idDiv = document.querySelector('#idField');
  let pwDiv = document.querySelector('#pwField');
  let repwDiv = document.querySelector('#repwField');
  let nmDiv = document.querySelector('#nmField');

  let idLabel = document.querySelector('#idLabel');
  let pwLabel = document.querySelector('#pwLabel');
  let repwLabel = document.querySelector('#repwLabel');
  let nmLabel = document.querySelector('#nmLabel');

  let error = false;

  // 공백, 특수문자 체크
  let special = new RegExp(/[()`~!@#$%^&*|\\\'\";:\/?\s]/gi);
  if (nm.length === 0 || special.test(nm)) {
    nmDiv.classList.add('warning');
    nmLabel.innerText = '길이는 1이상이고 특수문자, 공백은 넣을 수 없습니다.';
    error = true;
  } else {
    nmLabel.innerText = '닉네임을 지정해주세요.';
    nmDiv.classList.remove('warning');
  }

  if (!validator.isEmail(email)) {
    idDiv.classList.add('warning');
    idLabel.innerText = 'Email - Email 형식으로 입력해주세요.';
    error = true;
  } else {
    idLabel.innerText = 'Email';
    idDiv.classList.remove('warning');
  }

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
    tags: getTags(),
  };

  console.log(info);

  var ret = await (
    await axios.post(process.env.REACT_APP_API_URL + '/setRegister', info)
  ).data;

  if ('error' in ret) {
    alert(`동일한 ${ret.error}이 존재합니다.`);
  } else {
    alert('회원 가입이 완료되었습니다.');
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
          <label htmlFor="nmField" id="nmLabel">
            닉네임을 지정해주세요.
          </label>
          <br />
          <input id="nmField" className="field" />
          <br />
          <label htmlFor="userStatus">상태메세지를 작성해주세요.</label>
          <br />
          <input
            id="userStatus"
            className="field"
            placeholder="잘 부탁드립니다."
          />
          <br />

          <span className="title">답변 가능한 과목을 선택해주세요.</span>

          <div className="selectSubject">
            <label>
              <input type="checkbox" value="컴퓨터 프로그래밍" />
              컴퓨터 프로그래밍
            </label>
            <label>
              <input type="checkbox" value="컴퓨터과학적사고" />
              컴퓨터과학적사고
            </label>
            <label>
              <input type="checkbox" value="컴퓨터 입문" />
              컴퓨터 입문
            </label>
            <label>
              <input type="checkbox" value="확률과 통계" />
              확률과 통계
            </label>
            <label>
              <input type="checkbox" value="자료구조" />
              자료구조
            </label>
            <label>
              <input type="checkbox" value="컴퓨터구조" />
              컴퓨터구조
            </label>
            <label>
              <input type="checkbox" value="알고리즘" />
              알고리즘
            </label>
            <label>
              <input type="checkbox" value="이산수학" />
              이산수학
            </label>
            <label>
              <input type="checkbox" value="선형대수" />
              선형대수
            </label>
            <label>
              <input type="checkbox" value="논리회로" />
              논리회로
            </label>
            <label>
              <input type="checkbox" value="계산이론" />
              계산이론
            </label>
            <label>
              <input type="checkbox" value="디지털신호처리" />
              디지털신호처리
            </label>
            <label>
              <input type="checkbox" value="객체지향설계" />
              객체지향설계
            </label>
            <label>
              <input type="checkbox" value="시스템프로그래밍" />
              시스템프로그래밍
            </label>
            <label>
              <input type="checkbox" value="수치프로그래밍" />
              수치프로그래밍
            </label>
            <label>
              <input type="checkbox" value="웹프로그래밍" />
              웹프로그래밍
            </label>
            <label>
              <input type="checkbox" value="데이터베이스" />
              데이터베이스
            </label>
            <label>
              <input type="checkbox" value="운영체제" />
              운영체제
            </label>
            <label>
              <input type="checkbox" value="데이터통신" />
              데이터통신
            </label>
            <label>
              <input type="checkbox" value="프로그래밍언어개론" />
              프로그래밍언어개론
            </label>
            <label>
              <input type="checkbox" value="전자회로" />
              전자회로
            </label>
            <label>
              <input type="checkbox" value="영상처리" />
              영상처리
            </label>
            <label>
              <input type="checkbox" value="컴파일러개론" />
              컴파일러개론
            </label>
            <label>
              <input type="checkbox" value="컴퓨터네트워크" />
              컴퓨터네트워크
            </label>
            <label>
              <input type="checkbox" value="컴퓨터그래픽스" />
              컴퓨터그래픽스
            </label>
            <label>
              <input type="checkbox" value="기계학습" />
              기계학습
            </label>
            <label>
              <input type="checkbox" value="임베디드소프트웨어" />
              임베디드소프트웨어
            </label>
            <label>
              <input type="checkbox" value="데이터과학" />
              데이터과학
            </label>
            <label>
              <input type="checkbox" value="딥러닝" />
              딥러닝
            </label>
            <label>
              <input type="checkbox" value="인공지능" />
              인공지능
            </label>
            <label>
              <input type="checkbox" value="시스템 및 네트워크 보안" />
              시스템 및 네트워크 보안
            </label>
            <label>
              <input type="checkbox" value="정보보호" />
              정보보호
            </label>
          </div>

          <button
            className="registerBtn"
            onClick={() => {
              let email = document.getElementById('idField').value;
              let pw = document.getElementById('pwField').value;
              let pw_check = document.getElementById('repwField').value;
              let nm = document.getElementById('nmField').value;
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
