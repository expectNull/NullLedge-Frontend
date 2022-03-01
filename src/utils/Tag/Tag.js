import React from 'react';
// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import './Tag.css';

function Tag({ value, idx }) {
  return (
    // Props to를 지정할 때 제일 앞에 "/"를 넣어주면
    // 알아서 초기 url로 걸어줌.

    // 여기선 tags 라우트를 계속 불러서 접근을 새로 하는 것처럼 하려면
    // a로 새로운 창을 열어야 함.
    // 혹은 다른 페이지를 만드는 것도 방법임.
    <a href={`/tags/${value}`} className="tags">
      {value}
    </a>
  );
}

export default Tag;
