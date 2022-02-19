import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Layout } from '../../utils/Layout/Layout';
import { PostHeader } from '../../utils/Header/Header';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PostViewer from '../../utils/PostViewer/PostViewer';

import './Post.css';

function PostPage() {
  let [posts, setPosts] = useState([]);

  useEffect(async () => {
    let ret = await (await getPostItem()).data;
    setPosts(ret);
  }, []);
  const { postid } = useParams();
  console.log(postid);

  async function getPostItem() {
    var response = await axios.post(process.env.REACT_APP_API_URL + '/getpost');
    return response;
  }

  return (
    <>
      <Layout>
        <PostHeader
          post_nm="바보들아 안궁금 바보들아 안궁금 바보들아 안궁금하다니까"
          ymd="2022-02-19 21:43"
          view={200}
          like={200}
        />

        {/* {posts.map(item => (
          <PostViewer content={atob(item['content'])} />
        ))} */}
      </Layout>
    </>
  );
}

export default PostPage;
