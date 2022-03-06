import './Card.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';

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

function NoticeCard() {
  // 현재 user와 질문글 user가 같을 경우
  const questionPost = '1234';
  const questionTitle = 'BFS 질문입니다! 어떻게 해결해야할까요?';
  const user = 'Me';
  const questionUser = 'You';
  return (
    <div className="noticeCard">
      <div>
        {user === questionUser ? (
          <>
            <div>
              {questionPost + '번 글(' + questionTitle + ')에 답글이 달렸네요!'}
            </div>
            <div>채택하고 포인트를 받으세요!</div>
          </>
        ) : (
          <>
            <div>
              {questionPost +
                '번 글(' +
                questionTitle +
                ')에서 답글 요청이 왔네요!'}
            </div>
            <div>포인트를 받으러 답변해볼까요?</div>
          </>
        )}
      </div>
    </div>
  );
}

export { Card, NoticeCard };
