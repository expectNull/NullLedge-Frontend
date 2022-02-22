import React, { useEffect, useState } from 'react';

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

export default function CommentList({ parent_id }) {
  const [comments, setComments] = useState(-1);

  useEffect(() => {
    const getStuff = async () => {
      setComments(await getSomething(parent_id, 'getCommentList'));
    };
    getStuff();
  }, []);
  return (
    <div className="comment_list">
      <ul>
        {comments === -1 ? (
          <LoadingBar />
        ) : (
          comments.map(item => <Comment post_id={item} />)
        )}
      </ul>
      <Stack direction="row" spacing={2}>
        <textarea placeholder="Add a comment"></textarea>
        <Button className="save_btn" variant="contained">
          Add
        </Button>
      </Stack>
    </div>
  );
}
