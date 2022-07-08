import React from 'react';

function NoteListTab({ archiveHandler, notesHandler, activeHandler }) {
  return (
    <div className="notes-tab">
      <button onClick={notesHandler} className={`btn-tab ${activeHandler === 'catatan' ? 'active' : ''}`}>Catatan</button>
      <button onClick={archiveHandler} className={`btn-tab ${activeHandler === 'arsip' ? 'active' : ''}`}>Arsip</button>
    </div>
  );
}

export default NoteListTab;
