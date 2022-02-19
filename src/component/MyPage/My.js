import React from 'react';
import { useParams } from 'react-router-dom';
import { PostItem } from '../../utils/PostItem/PostItem';
import './My.css';

function MyPage() {
  const { name } = useParams();

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
              name="질문인데 이걸로 어떻게 해야함"
              writer="Kim"
              postIdx="5"
            />
          </div>
          <h2>My Answer</h2>
          <div className="answerList">
            <PostItem
              name="질문인데 이걸로 어떻게 해야함"
              writer="Kim"
              postIdx="5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
