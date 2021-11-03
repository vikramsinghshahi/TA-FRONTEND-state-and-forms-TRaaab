import React from 'react';
import '../styles/index.css';

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 3 UI
    return (
      <div className="form-group">
        <h2 className="header">Checkbox</h2>
        <div className="image-option">
          <label className="option">
            <input type="radio" name="test" value="small" checked />
            <img src="../images/image1.jpg" alt="Select" />
          </label>
          <label className="option">
            <input type="radio" name="test" value="small" />
            <img src="../images/image2.jpg" alt="Select" />
          </label>
        </div>
        <div className="option_col">
          <label className="options">
            <input type="radio" name="option" className="" />I want to add this
            option
          </label>
          <label className="options">
            <input type="radio" name="option" />
            Let me click on this checkbox and choose some cool stuf
          </label>
        </div>
        <button type="submit" className="btn_sub">
          Submit
        </button>
      </div>
    );
  }
}

export default Step3;