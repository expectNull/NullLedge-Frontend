import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { PostItem } from '../../utils/PostItem/PostItem';
import { checkCookie } from '../../utils/checkCookie';
import LoadingBar from '../../utils/LoadingBar/LoadingBar';
import './My.css';

let idx = 0;

function MyPage({}) {
  const { name } = useParams();
  const [info, setInfo] = useState(-1);
  const [ask, setAsk] = useState(-1);
  const [reply, setReply] = useState(-1);

  async function getPost(res, type) {
    const info = {
      user_id: res.user_id,
      type: type,
    };

    let response = await (
      await axios.post(process.env.REACT_APP_API_URL + '/getUserPost', info)
    ).data;

    if (type == 0) {
      setAsk(response);
    } else {
      setReply(response);
    }
  }
  async function getInfo() {
    const info = {
      user: name,
      token: await checkCookie(),
    };

    let response = await (
      await axios.post(process.env.REACT_APP_API_URL + '/getUser', info)
    ).data;
    setInfo(response);

    // type gb를 통해서 질문, 답변 한 모든 글들을 가져오기.
    getPost(response, 0);
    getPost(response, 1);
  }

  useEffect(() => {
    // 유저 등록한 날짜도 추가할까요??
    // info.user_sign에 들어있음.
    getInfo();
  }, []);

  return (
    <div className="MyPage">
      <div className="helper">
        <h1>Information</h1>
        <hr></hr>
        <table className="userInfo1">
          <tbody>
            <tr>
              <td className="imgbox" rowSpan={3}>
                <img src="/images/userimg.png" className="userImg"></img>
              </td>
              <td className="nickname">{info === -1 ? '...' : info.user_nm}</td>
            </tr>
            <tr>
              <td className="intro">
                {info === -1 ? '...' : info.user_status}
              </td>
            </tr>
            <tr>
              <td className="nullPoint">
                nullPoint : {info === -1 ? '...' : info.user_np}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="userInfo2">
          <h2>My Question</h2>
          <div className="questionList">
            {ask === -1 ? (
              <div className="loadingBar">
                <LoadingBar />
                <LoadingBar />
              </div>
            ) : ask.length === 0 ? (
              <h2>작성한 질문이 아직 없어요.</h2>
            ) : (
              ask.map(item => (
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
              ))
            )}
          </div>
          <h2>My Answer</h2>
          <div className="answerList">
            {reply === -1 ? (
              <div className="loadingBar">
                <LoadingBar />
                <LoadingBar />
              </div>
            ) : reply.length === 0 ? (
              <h2>답변이 아직 없어요. 답변을 작성 해 볼까요?</h2>
            ) : (
              reply.map(item => (
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
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
