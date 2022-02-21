import React from 'react';
import { useParams } from 'react-router-dom';
import { PostItem } from '../../utils/PostItem/PostItem';
import './My.css';

function MyPage({ children }) {
  const { name } = useParams();
  console.log(name);

  return (
    <div className="MyPage">
      <div className="helper">
        <h1>Information</h1>
        <hr></hr>
        <table className="userInfo1">
          <tbody>
            <tr>
              <td className="imgbox" rowSpan={3}>
                <img src="userimg.png" className="userImg"></img>
              </td>
              <td className="nickname">{'nickname'}</td>
            </tr>
            <tr>
              <td className="intro">{'intro'}</td>
            </tr>
            <tr>
              <td className="nullPoint">nullPoint : {0}</td>
            </tr>
          </tbody>
        </table>
        <div className="userInfo2">
          <h2>My Question</h2>
          <div className="questionList">
            <PostItem
              post_id="1"
              like="0"
              ans="0"
              view="0"
              post_nm="name"
              ymd="2022-02-21"
              user_nm="hi"
              content="hello"
            />
          </div>
          <h2>My Answer</h2>
          <div className="answerList">
            <PostItem
              post_id="1"
              like="0"
              ans="0"
              view="0"
              post_nm="name"
              ymd="2022-02-21"
              user_nm="hi"
              content="hello"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
