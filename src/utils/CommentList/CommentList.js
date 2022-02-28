import React, { useEffect, useState, useRef } from 'react';

import LoadingBar from '../LoadingBar/LoadingBar';
import Comment from '../../utils/Comment/Comment';

import { Button, Stack } from '@mui/material';
import './CommentList.css';
import axios from 'axios';

async function getSomething(id, pos) {
  const info = {
    post_id: Number(id),
  };

  return await (
    await axios.post(`${process.env.REACT_APP_API_URL}/${pos}`, info)
  ).data;
}

async function saveComment(post_id, comment_content, user_id) {
  const info = {
    parent_post_id: post_id,
    comment: comment_content,
    user_id: 1, // user_id : user_id
    type_gb: 2,
  };
  // if (comment_content.length == 0) {
  //   alert('공백');
  // } else {
  var response = await axios.post(
    process.env.REACT_APP_API_URL + '/setComment',
    info,
  );
  // }
  // console.log(response);
  // console.log(response.data);
  // console.log(response.data.errno);
}

let idx = 1;

function getIdx() {
  return idx++;
}

export default function CommentList({ parent_id }) {
  const [comments, setComments] = useState(-1);
  const [content, setContent] = useState(-1);
  idx = 1;
  const handleAdd = async (editorRef, post_id) => {
    if (editorRef.current.value.length === 0) {
      alert('댓글이 비어있습니다.');
      return;
    }
    setContent(editorRef.current.value);
    // window.location.href = `/post/${post_id}`;
  };
  useEffect(() => {
    const getStuff = async () => {
      setComments(await getSomething(parent_id, 'getCommentList'));
    };
    console.log(comments);
    getStuff();
  }, []);

  useEffect(() => {
    if (typeof content == 'number') {
      return;
    }
    const getStuff = async () => {
      await saveComment(parent_id, content);
      setComments(await getSomething(parent_id, 'getCommentList'));
    };
    getStuff();
    editorRef.current.value = '';
  }, [content]);
  const editorRef = useRef();
  return (
    <div className="comment_list">
      <ul>
        {comments === -1 ? (
          <LoadingBar />
        ) : (
          comments.map(item => <Comment post_id={item} idx={getIdx()} />)
        )}
      </ul>
      <Stack direction="row" spacing={2}>
        <textarea placeholder="Add a comment" ref={editorRef}></textarea>
        <Button
          className="save_btn"
          variant="contained"
          onClick={() => {
            handleAdd(editorRef, parent_id);
          }}
        >
          Add
        </Button>
      </Stack>
    </div>
  );
}
