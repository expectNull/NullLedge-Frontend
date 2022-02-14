import React from 'react';
import { Link } from 'react-router-dom';
import './RankCard.css';

const RankCard = ({ idx, name, status, point, reply, ask }) => {
  return (
    <tr className="rank_row">
      <td className="rank_idx">{idx}</td>
      <td className="rank_name">
        <Link to={`/mypage/${name}`}>{name}</Link>
      </td>
      <td className="rank_status">{status}</td>
      <td className="rank_point">{point}</td>
      <td className="rank_reply">{reply}</td>
      <td className="rank_ask">{ask}</td>
    </tr>
  );
};

export default RankCard;
