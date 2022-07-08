import React from 'react';
import NoteListTab from './NoteListTab';
import NoteList from './NoteList';
import NoteSearch from './NoteSearch';

class NoteListBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeHandler: 'catatan',

    };

    this.archiveHandler = this.archiveHandler.bind(this);
    this.notesHandler = this.notesHandler.bind(this);
  }

  render() {
    return (
      <div className="notes-list__body">
        <NoteSearch onSearchHandler={this.props.onSearchHandler} />

        <NoteListTab archiveHandler={this.archiveHandler} notesHandler={this.notesHandler} activeHandler={this.state.activeHandler} />

        <NoteList
          activeHandler={this.state.activeHandler}
          notes={this.props.data}
          input={this.props.input}
          onDelete={this.props.onDelete}
          archiveClick={this.props.archiveClick}
        />
      </div>

    );
  }

  archiveHandler() {
    this.setState({ activeHandler: 'arsip' });
  }

  notesHandler() {
    this.setState({ activeHandler: 'catatan' });
  }
}

export default NoteListBody;
