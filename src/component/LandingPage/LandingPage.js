import './LandingPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Layout } from '../../utils/Layout/Layout';
import { Header, QuestionHeader } from '../../utils/Header/Header';
import { PostItem } from '../../utils/PostItem/PostItem';
import LoadingBar from '../../utils/LoadingBar/LoadingBar';
import './LandingPage.css';

async function getPostItem() {
  var response = await axios.post(process.env.REACT_APP_API_URL + '/getpost');
  return response;
}

function LandingPage() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    const getStuff = async () => {
      let ret = await (await getPostItem()).data;
      setPosts(ret);
    };
    getStuff();
  }, []);

  return (
    <>
      <Layout>
        <QuestionHeader />
        {posts.length === 0 ? (
          <div className="loadingBar">
            <LoadingBar />
            <LoadingBar />
            <LoadingBar />
            <LoadingBar />
          </div>
        ) : (
          posts.map(item => (
            <PostItem
              post_id={item['post_id']}
              like={item['like_cnt']}
              ans={item['ans_cnt']}
              view={item['view_cnt']}
              post_nm={item['post_nm']}
              ymd={item['post_ymd']}
              user_nm={item['user_nm']}
              content={item['content']}
            />
          ))
        )}
        <hr />
      </Layout>
    </>
  );
}

export default LandingPage;
