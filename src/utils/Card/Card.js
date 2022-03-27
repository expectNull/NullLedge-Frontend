import './Card.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import IconButton from '@mui/material/IconButton';

import axios from 'axios';
import React, { useState } from 'react';
import wait from 'waait';

function Card() {
  const [like, setLike] = useState(0);

  function upClick() {
    setLike(like => like + 1);
  }

  function downClick() {
    setLike(like => like - 1);
  }

  return (
    <div className="card">
      <div className="card_vote">
        <IconButton aria-label="like">
          <KeyboardArrowUpOutlinedIcon />
        </IconButton>
        <span className="card_likes">3.2K</span>
        <IconButton aria-label="disLike">
          <KeyboardArrowDownOutlinedIcon />
        </IconButton>
      </div>

      <div className="card_area">
        <span className="card_text">질문 제목</span>
        <div className="card_info">
          <span className="card_writer">shinhyoung26</span>
          <span className="card_time">3 days ago</span>
        </div>
      </div>

      <div className="card_answers">
        <span className="ans_cnt">20</span>
        <span className="ans_text">answers</span>
      </div>
      <div className="card_views">
        <span className="view_cnt">20</span>
        <span className="view_text">views</span>
      </div>
    </div>
  );
}

function NoticeCard({
  notice_id,
  post_id,
  parent_id,
  parent,
  title,
  user,
  type,
  ymd,
  content,
  check_gb,
}) {
  // parent == 댓글의 경우 질문글의 제목이 들어있음.
  // title에는 답글의 경우 제목이 들어있음.
  // type | 1. 답글, 2. 댓글, 3. 답글 요청
  // post_id를 통해 클릭해서 넘겨 줘야 함.
  // 현재는 읽었어도 가지고는 옴....

  async function updateNotice() {
    const info = {
      post_id: notice_id,
    };

    await axios.post(process.env.REACT_APP_API_URL + '/updateNotice', info);
  }

  async function onClick() {
    await updateNotice();
    await wait(20);

    window.location.href = `/post/${parent_id === -1 ? post_id : parent_id}`;
  }

  return (
    <div className="noticeCard">
      <div
        className={(check_gb === 1 ? 'saw ' : '') + ' not_hover'}
        onClick={onClick}
      >
        {type === 1 ? (
          <>
            <div>{`${post_id}번 글(${title})에 ${user}의 답글이 달렸네요!`}</div>
            <div>채택하고 포인트를 받으세요!</div>
          </>
        ) : type === 3 ? (
          <>
            <div>{`${post_id}번 글 [${title}]에 답글 요청이 왔네요!`}</div>
            <div>포인트를 받으러 답변해볼까요?</div>
          </>
        ) : (
          // 여기 글 같은 경우 답글의 댓글인데 post_id를 주는게 맞나 싶네
          // 질문글에 댓글이 달리면 parent로 찾으면 안 되서 삼항 연산자로 체킹함.
          <>
            <div>{`${
              parent === undefined ? title : parent
            } 글에 ${user}의 댓글이 달렸네요!`}</div>
          </>
        )}
      </div>
    </div>
  );
}

export { Card, NoticeCard };
