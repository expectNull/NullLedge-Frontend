import './LandingPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Layout } from '../../utils/Layout/Layout';
import { QuestionHeader } from '../../utils/Header/Header';
import { PostItem } from '../../utils/PostItem/PostItem';
import LoadingBar from '../../utils/LoadingBar/LoadingBar';
import Notice from '../../utils/Notice/Notice';
import './LandingPage.css';

let idx = 0;

async function getPostItem() {
  var response = await axios.post(
    process.env.REACT_APP_API_URL + '/getLandingPost',
  );
  return response;
}

function spreadDiv(item) {
  return (
    <PostItem
      key={idx++}
      post_id={item['post_id']}
      like={item['like_cnt']}
      ans={item['ans_cnt']}
      view={item['view_cnt']}
      post_nm={item['post_nm']}
      ymd={item['post_ymd']}
      user_nm={item['user_nm']}
      content={item['content']}
    />
  );
}

function LandingPage() {
  let [posts, setPosts] = useState(-1);

  useEffect(() => {
    const getStuff = async () => {
      let ret = await (await getPostItem()).data;
      setPosts(ret);
    };
    getStuff();
  }, []);

  return (
    <>
      <Notice />
      <Layout>
        <QuestionHeader />
        {posts === -1 ? (
          <div className="loadingBar">
            <LoadingBar />
            <LoadingBar />
            <LoadingBar />
            <LoadingBar />
          </div>
        ) : posts.length === 0 ? (
          <h2>게시글이 아직 없어요. 질문을 작성 해 볼까요?</h2>
        ) : (
          posts.map(item => spreadDiv(item))
        )}
        <hr />
      </Layout>
    </>
  );
}

export default LandingPage;
