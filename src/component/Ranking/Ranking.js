import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Layout } from '../../utils/Layout/Layout';
import RankCard from '../../utils/RankCard/RankCard';
import LoadingBar from '../../utils/LoadingBar/LoadingBar';
import { RankHeader } from '../../utils/Header/Header';
import { UserCard } from '../../utils/UserCard/UserCard';
import './Ranking.css';

let idx = 0;

function Ranking() {
  const [ranking, setRanking] = useState(-1);

  async function getStuff() {
    let response = await (
      await axios.post(process.env.REACT_APP_API_URL + '/getRanking')
    ).data;

    setRanking(response);
  }

  useEffect(() => {
    getStuff();
  }, []);

  function spreadDiv(item) {
    return (
      <RankCard
        idx={item.RANKING}
        userid={item.USER_ID}
        name={item.USER_NICK_NM}
        status={item.STATUS_CONTENT}
        point={item.NULLPOINT_AMT}
        reply={item.ANSWER}
        ask={item.QUESTION}
      />
    );
  }

  return (
    <>
      <Layout>
        <RankHeader />
        {ranking === -1 ? (
          <div className="loadingBar">
            <LoadingBar />
          </div>
        ) : (
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
            <tbody>{ranking && ranking.map(item => spreadDiv(item))}</tbody>
          </table>
        )}
      </Layout>
    </>
  );
}

export { Ranking };
