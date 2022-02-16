import './LandingPage.css';
import React from 'react';
import axios from 'axios';

import { Layout } from '../../utils/Layout/Layout';
import { QuestionHeader } from '../../utils/Header/Header';
import { PostItem } from '../../utils/PostItem/PostItem';

function LandingPage(props) {
  const getPostItem = () => {
    var response = axios.post(process.env.REACT_APP_API_URL + '/getpost');
    console.log(response);
  };
  getPostItem();
  return (
    <>
      <Layout>
        <QuestionHeader />
        <PostItem
          name="질문인데 이걸로 어떻게 해야함"
          writer="Kim"
          postIdx="5"
        />
        <PostItem
          name="질문인데 이걸로 어떻게 해야함"
          writer="Kim"
          postIdx="5"
        />
        <PostItem
          name="질문인데 이걸로 어떻게 해야함"
          writer="Kim"
          postIdx="5"
        />
        <PostItem
          name="질문인데 이걸로 어떻게 해야함"
          writer="Kim"
          postIdx="5"
        />
        <hr />
      </Layout>
    </>
  );
}

export default LandingPage;
