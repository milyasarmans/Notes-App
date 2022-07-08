import React from 'react';
import { BsBookmarkFill, BsBookmark, BsFillTrashFill } from 'react-icons/bs';

function NoteItemAction({
  id, onDelete, isArchive, archiveClick,
}) {
  return (
    <div className="note-item__action">
      <button id={id} onClick={() => onDelete(id)} aria-label="Delete Button"><BsFillTrashFill /></button>
      <button id={id} onClick={() => archiveClick(id)} aria-label="Archive Button">{isArchive ? <BsBookmarkFill /> : <BsBookmark />}</button>
    </div>
  );
}

export default NoteItemAction;
