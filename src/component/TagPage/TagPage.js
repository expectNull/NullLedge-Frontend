import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Layout } from '../../utils/Layout/Layout';
import LoadingBar from '../../utils/LoadingBar/LoadingBar';
import Tag from '../../utils/Tag/Tag';
import { PostItem } from '../../utils/PostItem/PostItem';
import { TagHeader } from '../../utils/Header/Header';

async function getAllTag(value) {
  const info = {
    TAG_NM: value,
  };

  return await (
    await axios.post(`${process.env.REACT_APP_API_URL}/getTagPage`, info)
  ).data;
}

let idx = 0;
function TagPage(props) {
  //
  const [tags, setTags] = useState(-1);
  const { value } = useParams();

  useEffect(() => {
    const getStuff = async () => {
      setTags(await getAllTag(value));
    };
    getStuff();
  }, []);

  return (
    <>
      <Layout>
        <TagHeader value={value} />
        <div>
          {tags === -1 ? (
            <LoadingBar />
          ) : value ? (
            tags.map(item => {
              idx++;
              return (
                <PostItem
                  key={idx++}
                  post_id={item.post_id}
                  like={item.like_cnt}
                  ans={item.ans_cnt}
                  view={item.view_cnt}
                  post_nm={item.post_nm}
                  ymd={item.post_ymd}
                  user_nm={item.user_nm}
                  content={item.content}
                />
              );
            })
          ) : (
            tags.map(item => {
              // item.cnt를 통해 해당 태그의 글의 수를 알 수 있음.
              // 이미 던지게 해둠.
              return <Tag idx={idx++} value={item.tag_nm} />;
            })
          )}
        </div>
      </Layout>
    </>
  );
}

export default TagPage;
