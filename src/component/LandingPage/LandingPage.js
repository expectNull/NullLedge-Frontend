import './LandingPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Layout } from '../../utils/Layout/Layout';
import { QuestionHeader } from '../../utils/Header/Header';
import { PostItem } from '../../utils/PostItem/PostItem';
import LoadingBar from '../../utils/LoadingBar/LoadingBar';
import Notice from '../../utils/Notice/Notice';
import './LandingPage.css';

let idx = 0;

async function getPostItem() {
  var response = await axios.post(
    process.env.REACT_APP_API_URL + '/getLandingPost',
  );
  return response;
}

function spreadDiv(item) {
  return (
    <PostItem
      key={idx++}
      post_id={item['post_id']}
      like={item['like_cnt']}
      ans={item['ans_cnt']}
      view={item['view_cnt']}
      post_nm={item['post_nm']}
      ymd={item['post_ymd']}
      user_nm={item['user_nm']}
      content={item['content']}
    />
  );
}

function LandingPage() {
  let [posts, setPosts] = useState(-1);

  useEffect(() => {
    const getStuff = async () => {
      let ret = await (await getPostItem()).data;
      setPosts(ret);
    };
    getStuff();
  }, []);

  return (
    <>
      {/* <Notice /> */}
      <Layout>
        <QuestionHeader />
        <PostItem
          key={-1}
          post_id={4}
          like={0}
          ans={0}
          view={120}
          post_nm={'[공지 WhyRano : 한국형 스택오버 플로우]'}
          ymd={'2022-03-28 15:42:48'}
          user_nm={'관리자1'}
          content={
            'WhyRano : 한국형 스택오버 플로우 팀 ExpectNull에서 충남대학교 컴퓨터융합학부, 인공지능학과 학생들을 위한 질의응답 서비스 한국형 스택오버플로우 "Whyrano" 가 3월 28일 정식 런칭했습니다!!'
          }
        />
        <PostItem
          key={-1}
          post_id={44}
          like={0}
          ans={0}
          view={0}
          post_nm={'[공지 : Whyrano 질문 입력시 사진 첨부하는 방법]'}
          ymd={'2022-03-31 04:05:48'}
          user_nm={'관리자1'}
          content={
            '질문 작성 시 사진 첨부하는 방법  현재 Whyrano 사이트에서는 사진을 바로 업로드하는 기능이 구현중에 있어, 이와 관련한 불편함을 드려 대단히 죄송합니다.  그래서 글에 사진을 게재하기 위해서는 이미지의 링크를 첨부하는 형식으로 진행해야합니다.  먼저 Github 계정을 이용하여, [https://github.com/expectNull/Whyrano-image/issues](https://github.com/expectNull/Whyrano-image/issues)에 접속 합니다.'
          }
        />
        {posts === -1 ? (
          <div className="loadingBar">
            <LoadingBar />
            <LoadingBar />
            <LoadingBar />
            <LoadingBar />
          </div>
        ) : posts.length === 0 ? (
          <h2>게시글이 아직 없어요. 질문을 작성 해 볼까요?</h2>
        ) : (
          posts.map(item => spreadDiv(item))
        )}
        <hr />
      </Layout>
    </>
  );
}

export default LandingPage;
