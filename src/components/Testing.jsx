import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedContent = localStorage.getItem('draftEditorContent');
    if (savedContent) {
      return EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)));
    } else {
      return EditorState.createEmpty();
    }
  });

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    localStorage.setItem('draftEditorContent', JSON.stringify(convertToRaw(contentState)));
  }, [editorState]);

  const handleChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    localStorage.setItem('draftEditorContent', JSON.stringify(convertToRaw(contentState)));
    alert('Content saved successfully!');
  };

  return (
    <div>
      <h2>Title</h2>
      <button onClick={handleSave}>Save</button>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        <Editor
          editorState={editorState}
          onChange={handleChange}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
};

export default TextEditor;
