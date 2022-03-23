import React, { useRef, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MyEditor from '../../utils/MyEditor/MyEditor';
import Tag from '../../utils/Tag/Tag';
import { Alert } from '../../utils/Alert/Alert';
import { checkCookie } from '../../utils/checkCookie';

import './EditorPage.css';

let tags = {};

function getAll() {
  let ret = [];
  console.log(tags);
  for (let tag in tags) {
    ret.push(tag);
  }
  return ret;
}

function EditorPage(props) {
  const [title, setTitle] = useState('');
  const [ProId, setProId] = useState('');
  const [html_content, setContent] = useState('');

  // let tags = {};
  const editorRef = useRef();

  async function savePost() {
    const info = {
      title: title,
      tags: getAll(tags),
      html_content: html_content,
      problem_id: Number(ProId),
      type_gb: 0,
      //view_cnt -> mysql 초기값 0 설정
      //kind_point_amt -> 초기값 -1 설정 VS NULL
      //PARENT_POST_ID -> NULL
    };
    var response = await axios.post(
      process.env.REACT_APP_API_URL + '/setpost',
      info,
      { withCredentials: true },
    );
    if (response.data.length === 0) {
      Alert('success', '작성이 완료되었습니다.');
    }
    return response;
  }

  const onTitleChange = e => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  const onProIdChange = e => {
    e.preventDefault();
    setProId(e.target.value);
  };
  const onKeyUp = e => {
    let tagValue = e.target.value;
    if (e.keyCode === 13 && tagValue.trim() !== '') {
      const tagInput = document.querySelector('#tag_txt');
      const tagWrap = document.querySelector('#tag_list');
      const tagDiv = document.createElement('div');
      tagDiv.className = 'tags';

      tagDiv.addEventListener('click', () => {
        tagWrap.removeChild(tagDiv);
        delete tags[tagValue];
      });

      tagDiv.innerHTML = tagValue;
      tagWrap.appendChild(tagDiv);
      tags[tagValue] = 1;
      tagInput.value = '';
    }
  };
  const handleSave = async () => {
    if (title.length == 0) {
      Alert('error', '제목은 공백일 수 없습니다.');
      return;
    }
    const editorInstance = await editorRef.current.getInstance();
    // const getContent_html = await editorInstance.getHTML();
    const getContent_html = await editorInstance.getMarkdown();
    // alert(getContent_html);
    setContent(getContent_html);
  };

  useEffect(async () => {
    if (html_content.length != 0) {
      await savePost();
      window.location.href = `/`;
    }
  }, [html_content]);
  return (
    <div className="layout">
      <div className="EditorForm">
        <input
          type="text"
          id="title_txt"
          placeholder="제목을 입력하세요"
          onChange={onTitleChange}
          value={title}
        />

        <div className="tagGroup">
          <select type="text" id="problem_id_txt">
            <option value="none">카테고리</option>
            <option value="컴퓨터 프로그래밍">컴퓨터 프로그래밍</option>
            <option value="확률과 통계">확률과 통계</option>
            <option value="자료구조">자료구조</option>
            <option value="컴퓨터구조">컴퓨터구조</option>
            <option value="알고리즘">알고리즘</option>
            <option value="이산수학">이산수학</option>
            <option value="선형대수">선형대수</option>
            <option value="논리회로">논리회로</option>
            <option value="계산이론">계산이론</option>
            <option value="디지털신호처리">디지털신호처리</option>
            <option value="객체지향설계">객체지향설계</option>
            <option value="시스템프로그래밍">시스템프로그래밍</option>
            <option value="수치프로그래밍">수치프로그래밍</option>
            <option value="웹프로그래밍">웹프로그래밍</option>
            <option value="데이터베이스">데이터베이스</option>
            <option value="운영체제">운영체제</option>
            <option value="데이터통신">데이터통신</option>
            <option value="프로그래밍언어개론">프로그래밍언어개론</option>
            <option value="전자회로">전자회로</option>
            <option value="영상처리">영상처리</option>
            <option value="컴파일러개론">컴파일러개론</option>
            <option value="컴퓨터네트워크">컴퓨터네트워크</option>
            <option value="컴퓨터그래픽스">컴퓨터그래픽스</option>
            <option value="기계학습">기계학습</option>
            <option value="임베디드소프트웨어">임베디드소프트웨어</option>
            <option value="데이터과학">데이터과학</option>
            <option value="딥러닝">딥러닝</option>
            <option value="인공지능">인공지능</option>
            <option value="시스템 및 네트워크 보안">
              시스템 및 네트워크 보안
            </option>
            <option value="정보보호">정보보호</option>
          </select>
          <input
            type="text"
            id="tag_txt"
            placeholder="태그 입력"
            onKeyUp={onKeyUp}
          />

          <div id="tag_container">
            <div id="tag_list"></div>
          </div>
        </div>
        <MyEditor
          // initialProps={'# 내용을 입력해주세요. '}
          previewProps={'vertical'}
          refProps={editorRef}
          widthProps={'100vh'}
          heightProps={'75vh'}
        />
        <br />

        <Button id="save_btn" onClick={handleSave} variant="contained">
          Save
        </Button>
      </div>
    </div>
  );
}

export default EditorPage;
