import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNote] = useState([]);

  function addNote(noteObj) {
    setNote((prevNotes) => {
      return [
        ...prevNotes,
        {
          key: uuidv4(),
          title: noteObj.title,
          content: noteObj.content
        }
      ];
    });
  }

  function removeNote(id) {
    console.log("clicked");
    setNote((prevNotes) => {
      return prevNotes.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note.key}
          id={note.key}
          onDelete={removeNote}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
