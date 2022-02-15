import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

function isClick(base, target) {
  if (base === target) return 'clicked';
  return 'unclicked';
}

const Nav = () => {
  const page = window.location.href.split('/')[3];

  return (
    <Stack className="sidebar">
      <Link to="/" className={isClick('', page)}>
        All Questions
      </Link>
      <Link to="/tags" className={isClick('tags', page)}>
        Tags
      </Link>
      <Link to="/ranking" className={isClick('ranking', page)}>
        Rank
      </Link>
    </Stack>
  );
};

export default Nav;
