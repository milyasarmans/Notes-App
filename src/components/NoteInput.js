import React from 'react';
import { RiEraserLine } from 'react-icons/ri';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleError: false,
      bodyError: false,
      title: '',
      body: '',
      count: 50,
      isSuccess: false,
    };

    this.TitleHandler = this.TitleHandler.bind(this);
    this.BodyHandler = this.BodyHandler.bind(this);
    this.SubmitHandle = this.SubmitHandle.bind(this);
    this.ResetHandler = this.ResetHandler.bind(this);
  }

  render() {
    let errorTitle;
    if (this.state.titleError) {
      errorTitle = (
        <p className="note-title__error">*silahkan tuliskan judul catatan</p>
      );
    }

    let errorBody;
    if (this.state.bodyError) {
      errorBody = (
        <p className="note-body__error">*silahkan tuliskan deskripsi catatan</p>
      );
    }

    let successMessage;
    if (this.state.isSuccess) {
      successMessage = (
        <p className="note-success">Data tersimpan.</p>
      );
    }

    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.SubmitHandle}>

          <p>
            Sisa Karakter:
            {' '}
            <b>{this.state.count}</b>
          </p>
          <input type="text" placeholder="Ini adalah judul..." className="note-input__title" onChange={this.TitleHandler} value={this.state.title} />
          {errorTitle}

          <textarea type="text" placeholder="Tuliskan catatanmu disini..." className="note-input__body" value={this.state.body} onChange={this.BodyHandler} />
          {errorBody}

          <div className="note-btn-input__container">
            <button type="submit" className="note-btn__submit" aria-label="Tombol Buat Catatan">Buat</button>
            <button type="reset" className="note-btn__reset" aria-label="Tombol Reset" onClick={this.ResetHandler}><RiEraserLine /></button>
          </div>

        </form>
          {successMessage}
      </div>
    );
  }

  TitleHandler(event) {
    const maxLength = 50;
    const inputValue = event.target.value.slice(0, maxLength);
    const inputLength = inputValue.length;
    const isEmpty = inputValue === '';
    this.setState((prevState) => ({
      ...prevState,
      titleError: isEmpty,
      title: inputValue,
      count: maxLength - inputLength,
    }));
  }

  BodyHandler(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState((prevState) => ({
      ...prevState,
      bodyError: isEmpty,
      body: inputValue,
    }));
  }

  SubmitHandle(event) {
    event.preventDefault();
    if (this.state.title === '' || this.state.body === '') {
      this.setState({
        titleError: true,
        bodyError: true,
      });
    } else {
      this.props.addNote(this.state);
      this.setState({
        title: '',
        body: '',
        count: 50,
        isSuccess: true,
      });
    }
  }

  ResetHandler() {
    this.setState({
      title: '',
      body: '',
      count: 50,
    });
  }

}

export default NoteInput;
