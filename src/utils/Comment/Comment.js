import './Comment.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingBar from '../LoadingBar/LoadingBar';

async function getCommentItem(idx) {
  const info = {
    post_id: Number(idx),
  };
  return await (
    await axios.post(process.env.REACT_APP_API_URL + '/getCommentItem', info)
  ).data;
}

export default function Comment({ post_id, idx }) {
  // 여기 order_idx를 ol의 리스트 표시로 할 수 있나여??
  const [info, setInfo] = useState(-1);

  useEffect(() => {
    const getStuff = async () => {
      setInfo(await getCommentItem(post_id));
    };
    getStuff();
  }, []);

  return (
    <li className="comment_div">
      <hr />

      {info === -1 ? (
        <LoadingBar />
      ) : (
        <table>
          <tbody>
            <tr>
              {/* order_idx */}
              <td className="comment_idx">{idx}</td>
              <td className="comment">
                {info.content}

                <div className="ymd">
                  {' - '}
                  <Link className="name" to={`/mypage/${info.user_id}`}>
                    {info.user_nm}
                  </Link>
                  {'   '}
                  {info.post_ymd}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </li>
  );
}
