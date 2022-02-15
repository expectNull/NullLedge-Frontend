import React from 'react';
import { Link } from 'react-router-dom';
import './RankCard.css';

const RankCard = ({ idx, name, status, point, reply, ask }) => {
  return (
    <tr className="rank_row">
      <td className="rank_idx">{idx}</td>
      <td className="rank_name">
        <Link
          to={`/mypage/${name}`}
          style={{ color: '#1976d2', textDecoration: 'none' }}
        >
          {name}
        </Link>
      </td>
      <td className="rank_status">{status}</td>
      <td className="rank_point">{point}</td>
      <td className="rank_reply">
        <Link
          to={`/mypage/${name}`}
          style={{ color: '#1976d2', textDecoration: 'none' }}
        >
          {reply}
        </Link>
      </td>
      <td className="rank_ask">
        <Link
          to={`/mypage/${name}`}
          style={{ color: '#1976d2', textDecoration: 'none' }}
        >
          {ask}
        </Link>
      </td>
    </tr>
  );
};

export default RankCard;
