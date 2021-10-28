import '../styles/index.css';

import React from 'react';

class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      dateInput: '',
      textarea: '',
    };
    this.fileInput = React.createRef();
  }
  handleInput = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      this.state.textInput +
        ' ' +
        this.state.dateInput +
        ' ' +
        this.state.textarea
    );
    console.log(this.fileInput.current.files[0].name);
  };
  render() {
    return (
      <>
        <div className="form">
          <h2>Multiple Input</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="textInput">Text Input</label>
            <input
              type="text"
              id="textInput"
              name="textInput"
              className="form_input"
              onChange={this.handleInput}
              value={this.state.value}
            />

            <label htmlFor="dateInput">Date Input</label>
            <input
              type="date"
              id="dateInput"
              name="dateInput"
              className="form_input"
              onChange={this.handleInput}
              value={this.state.value}
            />
            <label htmlFor="fileInput">File Input</label>
            <input
              type="file"
              id="fileInput"
              name="fileInput"
              className="form_input"
              onChange={this.handleInput}
              ref={this.fileInput}
            />
            <label htmlFor="readOnlyInput">Read-Only-Input</label>
            <input
              type="text"
              id="readonlyInput"
              name="readOnlyInput"
              readOnly
              value="This can only be Read"
              className="form_input"
              onChange={this.handleInput}
            />
            <label htmlFor="disabledInput">Disabled Input</label>
            <input
              type="text"
              id="disabledInput"
              name="disabledInput"
              disabled
              onChange={this.handleInput}
              className="form_input"
            />
            <label htmlFor="textarea">Textarea </label>
            <textarea
              id="textarea"
              onChange={this.handleInput}
              name="textarea"
              value={this.state.value}
              className="form_input"
            ></textarea>
            <label htmlFor="disabledTextarea">Textarea Disabled</label>
            <textarea
              id="disabledTextarea"
              disabled
              onChange={this.handleInput}
              className="form_input"
            ></textarea>
            <div className="center">
              <button type="submit" value="Submit" className="btn-submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default MultipleInput;


