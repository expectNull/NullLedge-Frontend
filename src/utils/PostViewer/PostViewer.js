import React from 'react';
import './PostViewer.css';
import Prism from 'prismjs';
import { Viewer } from '@toast-ui/react-editor';

import 'prismjs/themes/prism.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'prismjs/components/prism-latex.js';
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

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

function PostViewer({ content }) {
  return (
    <Viewer
      className="MyViewer"
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      initialValue={content}
    />
  );
}

export default PostViewer;
