import React, { useState, useEffect } from 'react';
import marked from 'marked';
import './App.css';
import { render } from '@testing-library/react';


const sample =
  `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

function App() {
  const [content, setContent] = useState(sample);
  const handleChange = (e) => {
    console.log(content)
    return setContent(e.target.value)
  }
  marked.setOptions({
    breaks: true,
  });
  const handleClick = () => {

  }

  return (
    <div className="App">
      <div className="wraper">
        <ToolBar
          text="Editor"
          onClick={handleClick}
          iconClass={{ color: "red" }}
        />
        <Editor
          value={content}
          onChange={handleChange}

        />
      </div>
      <div className="wraper">
        <ToolBar
          text="Previewer"
          onClick={handleClick}
          iconClass={{ color: "pink" }}
        />
        <Preview
          content={content}
        />
      </div>
    </div>
  );
}

const ToolBar = (props) => {
  return (
    <div className="toolbar">
      <i title="no-stack-dub-sack" className="fa fa-free-code-camp" />
      {props.text}
      <i onClick={props.onClick} className={props.iconClass}></i>
    </div>

  )
}

const Editor = (props) => {
  return (
    <textarea id="editor"
      value={props.value}
      onChange={props.onChange}
      type="text"
    />
  )
}

const Preview = (props) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.content) }}></div>
  )
}


export default App;
