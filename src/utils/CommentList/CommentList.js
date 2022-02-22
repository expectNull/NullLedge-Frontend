import Comment from '../../utils/Comment/Comment';
import React, { memo, useRef, ReactText, useEffect } from 'react';
import { Button, Stack } from '@mui/material';
import textRef from 'react';
import { Link } from 'react-router-dom';
import './CommentList.css';
import { useCallback } from 'react';

export default function CommentList({ parent_page_idx }) {
  // get comment list from parent_page_idx
  function something() {
    return {
      /* comment li's */
    };
  }

  return (
    <div className="comment_list">
      <ul>
        {something}
        <Comment order_idx={1} />
        <Comment order_idx={2} />
        <Comment order_idx={3} />
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
