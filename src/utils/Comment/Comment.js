import './Comment.css';
import { Link } from 'react-router-dom';

export default function Comment({ comment_idx, order_idx }) {
  return (
    <li className="comment_div">
      <hr />
      <table>
        <tbody>
          <tr>
            {/* order_idx */}
            <td className="comment_idx">{order_idx}</td>
            {/* get comment from comment_idx */}
            <td className="comment">
              your code is sucks. your code is sucks. your code is sucks. your
              code is sucks. your code is sucks. your code is sucks. your code
              is sucks. your code is sucks. your code is sucks. your code is
              sucks. your code is sucks. your code is sucks. your code is sucks.
              your code is sucks. your code is sucks. your code is sucks. your
              code is sucks. your code is sucks. your code is sucks. your code
              is sucks. your code is sucks. your code is sucks. your code is
              sucks. your code is sucks. your code is sucks. your code is sucks.
              your code is sucks. your code is sucks. your code is sucks. your
              code is sucks.
              {/* put ymd */}
              <div className="ymd">
                {' - '}
                <Link className="name" to={`/mypage/${'name'}`}>
                  {'name'}
                </Link>
                {'   '}
                {'2022-02-22 16:58'}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}
