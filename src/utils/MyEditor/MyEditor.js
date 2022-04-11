import React from 'react';
import Prism from 'prismjs';
import axios from 'axios';
import './MyEditor.css';

import 'prismjs/themes/prism.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import 'prismjs/components/prism-python.js';
// import 'prismjs/components/prism-django.js';
import 'prismjs/components/prism-docker.js';
// import 'prismjs/components/prism-fortran.js';
// import 'prismjs/components/prism-git.js';
// import 'prismjs/components/prism-go.js';
// import 'prismjs/components/prism-cshtml.js';
import 'prismjs/components/prism-java.js';
// import 'prismjs/components/prism-json.js';
// import 'prismjs/components/prism-kotlin';
// import 'prismjs/components/prism-log.js';
import 'prismjs/components/prism-nginx.js';
import 'prismjs/components/prism-ocaml.js';
// import 'prismjs/components/prism-regex.js';
// import 'prismjs/components/prism-ruby.js';
import 'prismjs/components/prism-sql.js';
// import 'prismjs/components/prism-swift';
// import 'prismjs/components/prism-tsx.js';
// import 'prismjs/components/prism-vim.js';
// import 'prismjs/components/prism-csv.js';
// import 'prismjs/components/prism-yaml.js';

import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

const uploadImage = async blob => {
  const formData = new FormData();
  formData.append('image', blob);

  // 출력을 위한 코드
  // for (let key of formData.keys()) {
  //   console.log(key);
  // }
  // 서버로부터 이미지 주소 받아옴
  let url = await axios.post(
    process.env.REACT_APP_API_URL + '/setImg',
    formData,
    {
      withCredentials: true,
    },
  );

  return url.data.url;
};

function MyEditor({
  // initialProps,
  previewProps,
  widthProps,
  refProps,
  heightProps,
}) {
  return (
    <div className="Editor">
      <Editor
        placeholder="# 답변을 작성해주세요."
        // initialValue={initialProps}
        previewStyle={previewProps}
        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
        width={widthProps}
        height={heightProps}
        ref={refProps}
        hooks={{
          addImageBlobHook: async (Blob, callback) => {
            const img_url = await uploadImage(Blob);
            callback(`${process.env.REACT_APP_API_URL}${img_url}`, ' ');
          },
        }}
      />
    </div>
  );
}

export default MyEditor;
