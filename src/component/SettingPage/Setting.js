import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { checkCookie } from '../../utils/checkCookie';
import { Alert, AlertDiv } from '../../utils/Alert/Alert';
import Button from '@mui/material/Button';
import './Setting.css';

function SettingPage({}) {
  const { name } = useParams();
  const [info, setInfo] = useState(-1);
  async function getInfo() {
    const info = {
      user: name,
      token: await checkCookie(),
    };

    let response = await (
      await axios.post(process.env.REACT_APP_API_URL + '/getUser', info)
    ).data;
    setInfo(response);
  }
  useEffect(() => {
    // 유저 등록한 날짜도 추가할까요??
    // info.user_sign에 들어있음.
    getInfo();
  }, []);

  async function changeNickName() {}

  return (
    <div className="SettingPage">
      <div className="helper">
        <br />
        <br />
        <br />
        <h1>Edit Information</h1>
        <hr></hr>
        <table className="userInfo">
          <tbody>
            <tr>
              <td className="imgbox" rowSpan={2}>
                <img
                  src="/images/userimg.png"
                  width="30%"
                  className="userImg"
                ></img>
              </td>
              <td className="nickname">{info.user_nm}</td>
            </tr>
            <tr>
              <td className="intro"></td>
            </tr>
          </tbody>
        </table>
        <table className="userInfoChange">
          <tbody>
            <tr>
              <td>ID</td>
              <td>
                <input
                  className="idField"
                  disabled
                  value={info.user_nm}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" className="pwField"></input>
              </td>
            </tr>
            <tr>
              <td>Password Change</td>
              <td>
                <input type="password" className="pwchangeField"></input>
              </td>
              <td>
                <input type="password" className="pwconfirmField"></input>
              </td>
              <td>
                <Button
                  variant="contained"
                  disabled
                  onClick={() => {
                    alert('저장되었습니다.');
                  }}
                >
                  비밀번호 변경
                </Button>
              </td>
            </tr>
            <tr>
              <td>Nickname</td>
              <td>
                <input className="nicknameField"></input>
              </td>
              <td>
                <Button
                  variant="contained"
                  disabled
                  onClick={() => {
                    alert('저장되었습니다.');
                  }}
                >
                  닉네임 변경
                </Button>
              </td>
            </tr>

            <tr>
              <td>Edit Status</td>
              <td colSpan={2}>
                <textarea rows={5} cols={45}></textarea>
              </td>
              <td>
                <Button
                  variant="contained"
                  disabled
                  onClick={() => {
                    alert('저장되었습니다.');
                  }}
                >
                  상태 메시지 변경
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SettingPage;
