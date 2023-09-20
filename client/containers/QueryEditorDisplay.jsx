import React from 'react';

const QueryEditorDisplay = () => {
  return (
    <div>
      <div id="editor" contentEditable="true"></div>
      <button id="clear">Clear</button>
      <button id="submit">Submit</button>
    </div>
  )
};

export default QueryEditorDisplay;