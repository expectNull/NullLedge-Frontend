import './LandingPage.css';
import React from 'react';

import { Layout } from '../../utils/Layout/Layout';
import { QuestionHeader } from '../../utils/Header/Header';

function LandingPage(props) {
  return (
    <>
      <Layout>
        <QuestionHeader />
      </Layout>
    </>
  );
}

export default LandingPage;
