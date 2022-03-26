import './Layout.css';
import React from 'react';

import { Box } from '@material-ui/core';
import { Nav, RightNav } from '../Nav/Nav';
import Footer from '../../utils/Footer/Footer';
import { Ranking } from '../../component/Ranking/Ranking';

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
        <div className="content">{children}</div>
      </Box>
      <Footer />
    </div>
  );
}
