import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../../utils/Layout/Layout';
import { PostHeader } from '../../utils/Header/Header';
import { UserCard } from '../../utils/UserCard/UserCard';
import LoadingBar from '../../utils/LoadingBar/LoadingBar';
import PostViewer from '../../utils/PostViewer/PostViewer';

import './Post.css';
import MyEditor from '../../utils/MyEditor/MyEditor';
import { Button } from '@mui/material';

async function getPostItem(id) {
  var response = await axios.post(
    process.env.REACT_APP_API_URL + '/getPostead',
    null,
    { params: { id } },
  );
  return response;
}

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [html_content, setContent] = useState('');

  const { postid } = useParams();

  useEffect(() => {
    const getStuff = async () => {
      let ret = await (await getPostItem(postid)).data;
      setPosts(ret);
    };
    getStuff();
  }, []);

  const editorRef = useRef();
  const onContentChange = e => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_html = editorInstance.getHTML();
    setContent(getContent_html);
  };

  async function savePost() {
    const info = {
      // title: title,
      // tags: 'tags',
      // html_content: html_content,
      // user_id: 1,
      // problem_id: Number(ProId),
      // type_gb: 0,
      // //view_cnt -> mysql 초기값 0 설정
      // //kind_point_amt -> 초기값 -1 설정 VS NULL
      // //PARENT_POST_ID -> NULL
    };
    console.log(html_content);
    console.log({ postid });
    // var response = await axios.post(
    //   process.env.REACT_APP_API_URL + '/setpost',
    //   info,
    // );
    // console.log(response);
    // console.log(response.data);
    // console.log(response.data.errno);
  }

  const handleSave = () => {
    savePost();
  };

  return (
    <>
      <Layout>
        {posts.length === 0 ? (
          <div className="loadingBar">
            <LoadingBar />
            <LoadingBar />
          </div>
        ) : (
          <>
            <PostHeader
              post_nm={posts[0].post_nm}
              ymd={posts[0].post_ymd}
              view={posts[0].view_cnt}
              like={posts[0].like_cnt}
              post_id={postid}
            />
            <PostViewer content={posts[0].content} />
          </>
        )}

        <UserCard className="usercard" />
        {/*
            commentList 넣을 예정
          */}
        <hr />
        <div>
          <MyEditor
            initialProps={'# 답글을 작성해주세요. '}
            previewProps={'tab'}
            heightProps={'30vh'}
            refProps={editorRef}
            changeProps={onContentChange}
          />
        </div>
        <Button id="save_btn" variant="contained" onClick={handleSave}>
          답글 달기
        </Button>
        <hr />
      </Layout>
    </>
  );
}

export default PostPage;
