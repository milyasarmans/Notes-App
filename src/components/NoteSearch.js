import React from 'react';

function NoteSearch({ onSearchHandler }) {
  return (
    <div className="note-search">
      <input type="text" placeholder="Tuliskan judul yang dicari..." className="search-input" onChange={onSearchHandler} />
    </div>
  );
}

export default NoteSearch;
