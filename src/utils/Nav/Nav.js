import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

function isClick(target, base) {
  if (target.includes(base)) return 'clicked';
  return 'unclicked';
}

function Nav() {
  const page = window.location.href.split('/')[3];

  return (
    <Stack className="sidebarLeft">
      <Link to="/" className={isClick(['', 'post'], page) + ' nav_link'}>
        All Questions
      </Link>
      <a href="/tags" className={isClick(['tags'], page) + ' nav_link'}>
        Tags
      </a>
      <Link to="/ranking" className={isClick(['ranking'], page) + ' nav_link'}>
        Rank
      </Link>
      <Link to="/post/106" className={isClick(['출석부'], page) + ' nav_link'}>
        출석부
      </Link>
    </Stack>
  );
}

function RightNav() {
  const page = window.location.href.split('/')[3];

  return (
    <Stack className="sidebarRight">
      <Link to="/" className={isClick(['', 'post'], page) + ' nav_link'}>
        All Questions
      </Link>
      <Link to="/tags" className={isClick(['tags'], page) + ' nav_link'}>
        Tags
      </Link>
      <Link to="/ranking" className={isClick(['ranking'], page) + ' nav_link'}>
        Rank
      </Link>
    </Stack>
  );
}

export { Nav, RightNav };
