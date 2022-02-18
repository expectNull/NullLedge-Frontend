import React from 'react';
import { Layout } from '../../utils/Layout/Layout';
import './Post.css';

function PostPage({}) {
  return (
    <>
      <Layout>
        <div className="titleDiv">
          <h1>
            바보들아 안궁금 바보들아 안궁금 바보들아 안궁금하다니까 바보들아 난
            큰 듯 해 헤이~
          </h1>
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
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <hr></hr>
        </div>
      </Layout>
    </>
  );
}

export default PostPage;
