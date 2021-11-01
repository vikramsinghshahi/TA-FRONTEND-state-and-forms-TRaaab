import React from 'react';
import '../styles/index.css';

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 2 UI
    return (
      <div className="form-group">
        <h2 className="header">Message</h2>
        <div className="form2">
          <label htmlFor="message" className="flex flex-col mb-10">
            Message
            <textarea
              className="text_area"
              id="message"
              name="message"
              placeholder="Enter Message"
              rows="4"
              cols="60"
              value={this.props.message} // Prop: The message input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>

          <div className="choice">
            <div className="choice_col">
              <label htmlFor="choiceOne">The Number one choice</label>
              <input type="radio" checked name="choice" id="choiceOne" />
            </div>

            <div className="choice_col">
              <label htmlFor="choiceTwo">The Number two choice</label>
              <input type="radio" name="choice" id="choiceTwo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step2;