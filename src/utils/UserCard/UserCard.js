import './UserCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

// <UserCard name="Jang" postIdx={3} />
export function UserCard({ name, postIdx }) {
  // postIdx를 통해 쿼리 던지기. => 질문의 날짜, 시간을 가져옴, 질문자 답변자 구분 필요
  const date = window.Date.now();
  const page = window.location.href.split('/')[3];

  return (
    <div className="user_card">
      <div className="user_date">
        <span className="span_date">{date}</span>
      </div>
      <div className="user_container">
        <Link to={`/mypage/${name}`}>
          <img
            className="user_pic"
            src="https://i.stack.imgur.com/6OJea.jpg?s=64&g=1"
          />
        </Link>
        <div className="user_info">
          <Link
            to={`/mypage/${name}`}
            style={{ color: 'blue', textDecoration: 'none' }}
          >
            {name}
          </Link>
          <span title="NP">{postIdx}</span>
          <span title="Answers">{postIdx}</span>
        </div>
      </div>
    </div>
  );
}
