import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../utils/Layout/Layout';

function MyPage({ children }) {
  const { name } = useParams();
  console.log(name);

  return (
    <>
      <Layout>
        User Slug
        {name}
      </Layout>
    </>
  );
}

export default MyPage;
