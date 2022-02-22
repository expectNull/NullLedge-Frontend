import React from 'react';
import { Viewer } from '@toast-ui/react-editor';
import './PostViewer.css';

function PostViewer({ content }) {
  return <Viewer className="MyViewer" initialValue={content} />;
}

export default PostViewer;
