import './Layout.css';
import React from 'react';

import { Box } from '@material-ui/core';
import Nav from '../Nav/Nav';

export function Layout({ children }) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Nav />
        {children}
      </Box>
    </>
  );
}

export function RankLayout({ children }) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Nav />
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
      </Box>
    </>
  );
}
