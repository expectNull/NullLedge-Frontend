import './LandingPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Layout } from '../../utils/Layout/Layout';
import { Header } from '../../utils/Header/Header';
import { PostItem } from '../../utils/PostItem/PostItem';

async function getPostItem() {
  var response = await axios.post(process.env.REACT_APP_API_URL + '/getpost');
  return response;
}

function LandingPage() {
  const [load, setLoad] = useState(false);
  let [posts, setPosts] = useState([]);

  useEffect(async () => {
    let ret = await (await getPostItem()).data;
    setPosts(ret);
  }, []);

  return (
    <>
      <Layout>
        {posts.length === 0 ? (
          <span>loading...</span>
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
