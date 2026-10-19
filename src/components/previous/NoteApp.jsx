import React from 'react'
import { useState } from 'react'

const NoteApp = () => {

    const [notes, setNotes] = useState([]);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [showArchive, setShowArchive] = useState(false);
    const [archivedNotes, setArchivedNotes] = useState([]);

    
    const addNote = () => {
        if (title.trim() === "" || content.trim() === "") 
          return;

        const newNote = {
            title, content
        }
        setNotes([...notes, newNote]);

        setTitle("");
        setContent("");
    }

    const deleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    }

    const archiveNote = (index) => {
      const noteToArchive = notes[index];
      const updatedNotes = notes.filter((_, i) => i !== index);
      setNotes(updatedNotes);
      setArchivedNotes([...archivedNotes, noteToArchive]);
    }

    const unarchiveNote = (index) => {
      const noteToRestore = archivedNotes[index];
      const updatedArchived = archivedNotes.filter((_, i) => i !== index);
      setArchivedNotes(updatedArchived);
      setNotes([...notes, noteToRestore]);
    }
  return (
    <div style={{padding:"20px", maxWidth: "70%", margin:"auto"}}>
      <h1>A Simple Note Taking App</h1>

      <input type="text"
      placeholder='Note  title' 
      value = {title}
      onChange={(e) => setTitle(e.target.value)} style={{width: "100%", 
      marginBottom:"10px"}} />


      <textarea placeholder='Write your note...' value={content} 
      onChange={(e) => setContent(e.target.value)} style={{width: "100%", 
      marginBottom:"10px"}}/>

      <button onClick={addNote}>Add Note</button>

      <hr />
        <p style={{display:"inline", marginRight:"20px"}}>Your notes:</p>
        <button onClick={() => setShowArchive(!showArchive)}>Archived Notes</button>
        
      {notes.map((note, index) => (
        <div key={index} style={{marginBottom: "15px"}}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(index)}>Delete</button>
          <button style={{marginLeft:"7px"}} onClick={() => archiveNote(index)}>Archive</button>

        </div>))}
        <hr />

        

        <div style={{display: showArchive ? "block" : "none"}}>

          <h3>Archived Notes</h3>
          {archivedNotes.map((note, index) => (<div key={index} style={{marginBottom: "15px"}}>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button onClick={() => unarchiveNote(index)}>Unarchive</button>
        </div>
    ))}

      </div>
  
    </div>

  )}

 export default NoteApp;
