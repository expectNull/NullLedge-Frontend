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
      user_id={item['user_id']}
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
          post_id={78}
          like={0}
          ans={0}
          view={0}
          post_nm={'[공지 - 업데이트 : Whyrano 질문 입력시 사진 첨부하는 방법]'}
          ymd={'2022-04-11 01:07:19'}
          user_nm={'관리자1'}
          content={'이제 Whyrano에 질문 작성시 이미지를 업로드할 수 있습니다!'}
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
