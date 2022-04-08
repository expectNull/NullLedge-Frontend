import React from 'react';
import { useParams } from 'react-router-dom';

function MyPage({}) {
  const { userId, date, path } = useParams();

  return (
    <div className="ImgPage">
      <img
        src={`${process.env.REACT_APP_API_URL}/img/${userId}/${date}/${path}`}
      ></img>
    </div>
  );
}

export default MyPage;
