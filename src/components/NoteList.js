import React from 'react';
import NoteItem from './NoteItem';
import NoteEmpty from './NoteEmpty';

function NoteList({
  notes, onDelete, activeHandler, archiveClick, input,
  }) {
  const searchData = notes.filter((el) => {
    if (input === '') {
      return el;
    }
    return el.title.toLowerCase().includes(input);
  });

  const notesItem = (data) => {
    const noteItem = data.filter((note) => !note.archived);

    const result = noteItem.map((item) => (
      <NoteItem key={item.id} {...item} id={item.id} onDelete={onDelete} archiveClick={archiveClick} />
    ));

    if (noteItem.length >= 1) {
      return result;
    }
    return <NoteEmpty />;
  };

  const archivesItem = (data) => {
    const archiveItem = data.filter((note) => note.archived);

    const result = archiveItem.map((item) => (
      <NoteItem key={item.id} {...item} id={item.id} onDelete={onDelete} archiveClick={archiveClick} />
    ));

    if (archiveItem.length >= 1) {
      return result;
    }
    return <NoteEmpty />;
  };

  return (
    <div className="notes-list__wrapper">
      {activeHandler === 'catatan' && notesItem([...searchData])}
      {activeHandler === 'arsip' && archivesItem([...searchData])}
    </div>
  );
}

export default NoteList;
