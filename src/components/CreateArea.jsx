import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    console.log(newTitle);
    setTitle(newTitle);
  }
  function handleContentChange(event) {
    const newContent = event.target.value;
    console.log(newContent);
    setContent(newContent);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitleChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button
          type="button"
          onClick={() => {
            props.onAdd({
              title: title,
              content: content
            });
            setTitle("");
            setContent("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
