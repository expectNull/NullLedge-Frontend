import React from 'react';

import { Layout } from '../../utils/Layout/Layout';
import RankCard from '../../utils/RankCard/RankCard';

function Ranking() {
  return (
    <>
      <Layout>
        <RankCard
          idx="1"
          name="Jang"
          status="쿠쿠"
          point="1735"
          reply="3"
          ask="23"
        />
      </Layout>
    </>
  );
}

export { Ranking };
