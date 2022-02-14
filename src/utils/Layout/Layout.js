import './Layout.css';
import React from 'react';

import { Box } from '@material-ui/core';

import useWindowSize from '../WindowSize';
import Nav from '../Nav/Nav';

export function Layout({ children }) {
  const { width, height } = useWindowSize();
  console.log(width, height);

  return (
    <>
      <Box sx={{ display: 'grid' }}>Header</Box>

      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Nav />
        {children}
      </Box>

      <Box sx={{ display: 'grid' }}>Footer</Box>
    </>
  );
}

export function RankLayout({ children }) {
  return (
    <>
      <Box sx={{ display: 'grid' }}>Header</Box>
      <table className="rank_table">
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>상태 메세지</th>
            <th>NP</th>
            <th>Reply</th>
            <th>Ask</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      <div className="page">page</div>
      <Box sx={{ display: 'grid' }}>Footer</Box>
    </>
  );
}
