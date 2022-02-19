import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../../utils/Layout/Layout';
import { PostHeader } from '../../utils/Header/Header';
import { UserCard } from '../../utils/UserCard/UserCard';
import LoadingBar from '../../utils/LoadingBar/LoadingBar';
import PostViewer from '../../utils/PostViewer/PostViewer';

import './Post.css';

async function getPostItem(id) {
  var response = await axios.post(
    process.env.REACT_APP_API_URL + '/getPostead',
    null,
    { params: { id } },
  );
  return response;
}

function PostPage() {
  let [posts, setPosts] = useState([]);

  const { postid } = useParams();
  useEffect(async () => {
    let ret = await (await getPostItem(postid)).data;
    setPosts(ret);
  }, []);

  useEffect(() => {
    console.log(posts[0]);
  }, [posts]);

  return (
    <>
      <Layout>
        {posts.length === 0 ? (
          <div className="loadingBar">
            <LoadingBar />
            <LoadingBar />
          </div>
        ) : (
          <PostHeader
            post_nm={posts[0].post_nm}
            ymd={posts[0].post_ymd}
            view={posts[0].view_cnt}
            like={posts[0].like_cnt}
          />
        )}

        {/* {posts.map(item => (
          <PostViewer content={atob(item['content'])} />
        ))} */}
        <UserCard className="usercard" />
        {/*
            commentList 넣을 예정
          */}
      </Layout>
    </>
  );
}

export default PostPage;
