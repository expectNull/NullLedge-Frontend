import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Layout } from '../../utils/Layout/Layout';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PostViewer from '../../utils/PostViewer/PostViewer';
import { decode as base64_decode, encode as base64_encode } from 'base-64';

import './Post.css';

function PostPage() {
  let [posts, setPosts] = useState([]);

  useEffect(async () => {
    let ret = await (await getPostItem()).data;
    setPosts(ret);
  }, []);
  const { postid } = useParams();
  console.log(postid);

  async function getPostItem() {
    var response = await axios.post(process.env.REACT_APP_API_URL + '/getpost');
    return response;
  }

  return (
    <>
      <Layout>
        <div className="titleDiv">
          <h1>바보들아 안궁금 바보들아 안궁금 바보들아 안궁금하다니까</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <span className="key">Asked</span>
                  <span className="value">{9} days ago</span>
                </td>
                <td>
                  <span className="key">Active</span>
                  <span className="value">{6} days ago</span>
                </td>
                <td>
                  <span className="key">View</span>
                  <span className="value">{200} days ago</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="evaluation">
            <tbody>
              <tr>
                <td>
                  <span className="key">
                    <ThumbUpIcon className="icon" />
                  </span>
                  <span className="good">{'  ' + 200}</span>
                </td>
                <td>
                  <span className="key">
                    <ThumbDownIcon className="icon" />
                  </span>
                  <span className="bad">{'  ' + 200}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <hr></hr>
        </div>

        {/* {posts.map(item => ( */}
        <PostViewer
          content={`<h2>Heroku 서버</h2><p>Heroku는 백엔드 서버를 쉽게 만들수 있게 해주는 플랫폼이다. 이번 친구와 함께 하고 있는 설날 맞이 프로젝트를 위해 백엔드 서버는 Heroku를 사용하기로 하였다. Heroku 서버는 일정 시간 동안 접속이 없을 경우 서버가 멈춰버려서 다시 접근할 경우 시간이 더 걸리는 특징이 있다. 이를 방지하기 위해 할 수 있는 두 가지 방법을 소개하겠다.</p><h2>1. node-cron 사용</h2><ol><li><p>node cron을 설치한다.</p></li></ol><div data-language="shell" class="toastui-editor-ww-code-block-highlighting"><pre class="language-shell"><code data-language="shell" class="language-shell">   npm install node-cron --save</code></pre></div><ol start="2"><li><p>샘플 코드</p></li></ol><div data-language="javascript" class="toastui-editor-ww-code-block-highlighting"><pre class="language-javascript"><code data-language="javascript" class="language-javascript"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cron <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'node-cron'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

cron<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span><span class="token string">'*/20 23, 0-14 * * *'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'cron active'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'http://yourheroku.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div><p>위의 스크립트를 추가해주면 된다.</p><h2>2. 모니터링 사이트 이용</h2><p><a href="https://uptimerobot.com/">UptimeRobot</a>라는 사이트이다. 이 사이트는 내가 정해둔 시간마다 내 사이트로 요청을 보내주는 사이트이다.</p><p><img src="uptimer.png" alt="UptimeRobot.png" contenteditable="false"><img class="ProseMirror-separator"><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p><p>Friendly name에는 확인하고자 하는 사이트의 약칭을 작성한다. URL을 작성하고, Interval을 통해 시간을 설정할 수 있다.</p><p><br class="ProseMirror-trailingBreak"></p><p>설정 완료!</p><h2>내가 한 설정</h2><p>node-cron은 아무래도 http 요청을 보내서 그런 것인지 자꾸 다른 부분에서 오류가 발생해서 우선은 모니터링 사이트를 이용하는 방식으로 해두었다.</p>`}
        />
        {/* ))} */}
      </Layout>
    </>
  );
}

export default PostPage;
