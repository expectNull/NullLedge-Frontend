import React from 'react';
import Chip from '@mui/material/Chip';
import './Tag.css';

const handleClick = e => {
  //질문 작성 창이면 태그 삭제, 게시글 창일 경우 태그 검색.
  const nowURL = window.location.href.split('/')[3];
  e.currentTarget.remove();
};

function Tag({ value }) {
  return (
    <Chip
      label={value}
      variant="outlined"
      className="tags"
      onClick={handleClick}
    />
  );
}

export default Tag;
