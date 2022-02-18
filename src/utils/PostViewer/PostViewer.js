import React from 'react';
import { Viewer } from '@toast-ui/react-editor';

function PostViewer({ content }) {
  return <Viewer initialValue={content} />;
}

export default PostViewer;
