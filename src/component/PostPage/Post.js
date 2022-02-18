import React from 'react';
import { Layout } from '../../utils/Layout/Layout';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import './Post.css';

function PostPage({}) {
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
            </tbody>
          </table>
          <hr></hr>
        </div>
      </Layout>
    </>
  );
}

export default PostPage;
