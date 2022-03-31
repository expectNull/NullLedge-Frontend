import React from 'react';
import Prism from 'prismjs';
import './MyEditor.css';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import 'prismjs/components/prism-python.js';
// import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-c.js';
import 'prismjs/components/prism-cmake.js';
import 'prismjs/components/prism-cpp';
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
import 'prismjs/components/prism-php.js';
// import 'prismjs/components/prism-regex.js';
// import 'prismjs/components/prism-ruby.js';
import 'prismjs/components/prism-sql.js';
// import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-tsx.js';
import 'prismjs/components/prism-vim.js';
// import 'prismjs/components/prism-csv.js';
// import 'prismjs/components/prism-yaml.js';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

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
      />
    </div>
  );
}

export default MyEditor;
