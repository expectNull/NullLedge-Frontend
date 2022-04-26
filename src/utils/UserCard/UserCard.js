import './UserCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function UserCard({ name, np, status, user_id }) {
  return (
    <div className="usercard-helper">
      <table className="usercard">
        <tbody>
          <tr>
            <td className="imgbox" rowSpan={3}>
              <Link to={'/mypage/' + user_id}>
                <img src="/images/userimg.png" className="userImg"></img>
              </Link>
            </td>

            <td>
              <Link className="nickname" to={'/mypage/' + user_id}>
                {name}
              </Link>
            </td>
          </tr>
          <tr>
            <td className="nullPoint">nullPoint : {np}</td>
          </tr>
          <tr>
            <td className="intro">{status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
