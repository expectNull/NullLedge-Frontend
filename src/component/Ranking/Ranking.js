import React from 'react';

import { RankLayout } from '../../utils/Layout/Layout';
import RankCard from '../../utils/RankCard/RankCard';

function Ranking() {
  return (
    <>
      <RankLayout>
        <RankCard
          idx="1"
          name="Jang"
          status="쿠쿠"
          point="1735"
          reply="3"
          ask="23"
        />
      </RankLayout>
    </>
  );
}

export { Ranking };
