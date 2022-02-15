import './Layout.css';
import React from 'react';

import { Box } from '@material-ui/core';
import { Nav, RightNav } from '../Nav/Nav';

export function Layout({ children }) {
  const page = window.location.href.split('/')[3];

  return (
    <div className="layout">
      <Box
        className="layout_box"
        sx={{
          display: 'flex',
        }}
      >
        <Nav />
        <div className="content">
          {page === 'ranking' ? (
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
          ) : (
            <>{children}</>
          )}
        </div>
        <RightNav />
      </Box>
    </div>
  );
}
