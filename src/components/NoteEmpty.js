import React from 'react';
import { FcDeleteDatabase } from 'react-icons/fc';

function NoteEmpty() {
  return (
    <div className="note__empty">
      <div className="note__empty-icon"><FcDeleteDatabase/></div>
      <h2>Tidak Ada Data</h2>
    </div>
  );
}

export default NoteEmpty;
