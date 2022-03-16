import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Layout } from '../../utils/Layout/Layout';
import { PostHeader } from '../../utils/Header/Header';
import { UserCard } from '../../utils/UserCard/UserCard';
import LoadingBar from '../../utils/LoadingBar/LoadingBar';
import PostViewer from '../../utils/PostViewer/PostViewer';
import CommentList from '../../utils/CommentList/CommentList';
import MyEditor from '../../utils/MyEditor/MyEditor';
import Like from '../../utils/Like/Like';
import { Alert, AlertDiv } from '../../utils/Alert/Alert';
import './Post.css';
import { Button } from '@mui/material';

let idx = 0;
function spreadDiv(item) {
  return (
    <div
      key={idx++}
      style={{
        border: '0.5px solid rgb(25, 108, 200)',
        padding: '10px',
        margin: '0 0 20px',
      }}
    >
      <PostViewer className="postviewer" content={item.content} />
      <div style={{ textAlign: 'right' }}>
        <UserCard
          className="usercard"
          name={item.user_nm}
          np={item.user_np}
          status={item.user_status}
        />
        <div className="like-helper">
          <table>
            <tr>
              <td>
                <b>답글이 도움이 되셨나요?</b>
              </td>
              <td>
                <Like className="like" like_cnt={0} post_id={item.post_id} />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <CommentList parent_id={item.post_id} />
    </div>
  );
}
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
  const [html_content, setContent] = useState(-1);
  const { postid } = useParams();
  const login = useSelector(store => store.loginReducer);

  useEffect(() => {
    const getStuff = async () => {
      setPosts(await getSomething(postid, 'getAsk'));
      setreplys(await getSomething(postid, 'getReplys'));
    };
    getStuff();
  }, []);

  const editorRef = useRef();

  async function savePost() {
    const info = {
      parent_post_id: postid,
      html_content: html_content,
      type_gb: 1,
    };

    // try catch 로 묶어야 할 듯 이런 것들.
    var response = await axios.post(
      process.env.REACT_APP_API_URL + '/setReply',
      info,
      { withCredentials: true },
    );
    if (response.data.length === 0) {
      // 여기 wait 혹은 다른 방식으로 하든지 해야 할 수도
      Alert('success', '작성이 완료되었습니다.');
    }
  }

  useEffect(() => {
    // console.log(html_content);
  }, [html_content]);

  useEffect(async () => {
    if (typeof html_content == 'number') {
      return;
    }
    await savePost();
    window.location.href = `/post/${postid}`;
  }, [html_content]);

  const handleSave = async () => {
    const editorInstance = await editorRef.current.getInstance();
    const getContent_html = await editorInstance.getHTML();
    const getContent_md = await editorInstance.getMarkdown();
    if (getContent_md.length == 0) {
      Alert('warning', '공백입니다.');
      return;
    }
    setContent(getContent_html);
  };

  return (
    <div className="postPage">
      <Layout>
        <div
          style={{
            margin: '10px',
            padding: '10px',
          }}
        >
          {posts === -1 ? (
            <div className="loadingBar">
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
          <h1 className="answer">Answers</h1>
          {/* 답변글들 뿌리기 */}
          {replys === -1 ? <LoadingBar /> : replys.map(item => spreadDiv(item))}
          <hr />
          <div>
            <MyEditor
              // initialProps={'# 답글을 작성해주세요. '}
              previewProps={'tab'}
              heightProps={'30vh'}
              refProps={editorRef}
            />
          </div>
          <Button id="save_btn" variant="contained" onClick={handleSave}>
            답글 달기
          </Button>
          <hr />
        </div>
      </Layout>
    </div>
  );
}

export default PostPage;
