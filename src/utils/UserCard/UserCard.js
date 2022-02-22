import './UserCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function UserCard({ name, np, status }) {
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
