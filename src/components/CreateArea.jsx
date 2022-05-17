import React, { useState } from "react";

function CreateArea() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    console.log(newTitle);
    setTitle(newTitle);
  }
  function handleBodyChange(event) {
    const newBody = event.target.value;
    console.log(newBody);
    setBody(newBody);
  }
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <div>
      <form onClick={handleClick}>
        <input onChange={handleTitleChange} name="title" placeholder="Title" />
        <textarea
          onChange={handleBodyChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
