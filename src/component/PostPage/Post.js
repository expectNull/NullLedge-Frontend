import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from '../../utils/Layout/Layout';
import { PostHeader } from '../../utils/Header/Header';
import { UserCard } from '../../utils/UserCard/UserCard';
import LoadingBar from '../../utils/LoadingBar/LoadingBar';
import PostViewer from '../../utils/PostViewer/PostViewer';
import CommentList from '../../utils/CommentList/CommentList';
import MyEditor from '../../utils/MyEditor/MyEditor';

import './Post.css';
import { Button } from '@mui/material';

async function getSomething(id, pos) {
  const info = {
    post_id: Number(id),
  };

  return await (
    await axios.post(`${process.env.REACT_APP_API_URL}/${pos}`, info)
  ).data;
}

function PostPage() {
  const [posts, setPosts] = useState(-1);
  const [replys, setreplys] = useState(-1);
  const [html_content, setContent] = useState('');
  const { postid } = useParams();

  useEffect(() => {
    const getStuff = async () => {
      setPosts(await getSomething(postid, 'getAsk'));
      setreplys(await getSomething(postid, 'getReplys'));
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
        {posts === -1 ? (
          <div className="loadingBar">
            <LoadingBar />
            <LoadingBar />
          </div>
        ) : (
          <>
            <PostHeader
              post_nm={posts.post_nm}
              ymd={posts.post_ymd}
              view={posts.view_cnt}
              like={posts.like_cnt}
              post_id={postid}
            />
            <PostViewer content={posts.content} />
            <UserCard
              className="usercard"
              name={posts.user_nm}
              np={posts.user_np}
              status={posts.user_status}
            />
          </>
        )}
        {/* 질문글의 댓글임. */}
        <CommentList parent_id={postid} />
        <hr />
        Answers <br />
        <br />
        <br />
        <br />
        {/* 답변글들 뿌리기 */}
        {replys === -1 ? (
          <LoadingBar />
        ) : (
          replys.map(item => (
            <>
              <PostViewer content={item.content} />
              <UserCard
                className="usercard"
                name={item.user_nm}
                np={item.user_np}
                status={item.user_status}
              />
              <CommentList parent_id={item.post_id} />
            </>
          ))
        )}
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
