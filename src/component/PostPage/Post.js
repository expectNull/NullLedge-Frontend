import React from 'react';
import EditorPage from '../../utils/EditorPage/Editor';
import { Layout } from '../../utils/Layout/Layout';

function PostPage({}) {
  return (
    <Layout>
      <EditorPage props={'vertical'} />
      <EditorPage />
    </Layout>
  );
}

export default PostPage;
