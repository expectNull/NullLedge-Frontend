import './UserCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

// <UserCard name="Jang" postIdx={3} />
export function UserCard({ name, postIdx }) {
  // postIdx를 통해 쿼리 던지기. => 질문의 날짜, 시간을 가져옴, 질문자 답변자 구분 필요
  const date = window.Date.now();
  const page = window.location.href.split('/')[3];

  return (
    <div className="usercard-helper">
      <table className="usercard">
        <tbody>
          <tr>
            <td className="imgbox" rowSpan={3}>
              <Link to={'/mypage/' + name}>
                <img src="userimg.png" className="userImg"></img>
              </Link>
            </td>

            <td>
              <Link className="nickname" to={'/mypage/' + name}>
                {'nickname'}
              </Link>
            </td>
          </tr>
          <tr>
            <td className="nullPoint">nullPoint : {0}</td>
          </tr>
          <tr>
            <td className="intro">{'intro'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
