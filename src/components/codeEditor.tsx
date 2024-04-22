import React from 'react'
import Editor  from 'react-simple-code-editor';
// import 'prismjs/components/prism-clike';
// import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-dark.css';
import { Languages, highlight, languages } from 'prismjs';
//Example style, you can use another
type Props = {
    code:string;
    setCode:any;

}

const CodeEditor = ({code,setCode}: Props) => {
    // function highlightCode(code:string, language) {
    //     return highlight(code, language.cpp, language);
    //   }
    
    return (
        <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          backgroundColor: '#1e1e1e',
          color:'#d4d4d4',
          width:'50%',

        }}
      />
  )
}

export default CodeEditor