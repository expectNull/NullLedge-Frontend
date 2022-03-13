import React from 'react';
import './Setting.css';
import Button from '@mui/material/Button';

function SettingPage({}) {
  return (
    <div className="SettingPage">
      <div className="helper">
        <h1>Edit Information</h1>
        <hr></hr>
        <table className="userInfo">
          <tbody>
            <tr>
              <td className="imgbox" rowSpan={2}>
                <img src="userimg.png" className="userImg"></img>
              </td>
              <td className="nickname">Winter</td>
            </tr>
            <tr>
              <td className="intro">intro</td>
            </tr>
          </tbody>
        </table>
        <table className="userInfoChange">
          <tbody>
            <tr>
              <td>ID</td>
              <td>
                <input className="idField" disabled value="User's ID"></input>
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
            </tr>
            <tr>
              <td>Nickname</td>
              <td>
                <input className="nicknameField"></input>
              </td>
            </tr>
            <tr>
              <td>Edit Status</td>
              <td colSpan={2}>
                <textarea rows={5} cols={45}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            Alert('success', 'saved!');
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default SettingPage;
