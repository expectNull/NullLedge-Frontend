import React from 'react';
import { Layout } from '../../utils/Layout/Layout';
import './Post.css';

function PostPage({}) {
  return (
    <>
      <Layout>
        <div className="titleDiv">
          <h1>Hi</h1>
          <span>Asked {9} days ago</span>
          <span>Active {6} days ago</span>
          <span>Viewed {200} times</span>
          <hr></hr>
        </div>
      </Layout>
    </>
  );
}

export default PostPage;
