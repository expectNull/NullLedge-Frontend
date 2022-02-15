import React from 'react';
import Chip from '@mui/material/Chip';
import './Tag.css';

const handleClick = () => {
  const nowURL = window.location.href.split('/')[3];
  if (nowURL === 'ask') {
    alert('nowURL');
  } else {
    alert(nowURL);
  }
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
