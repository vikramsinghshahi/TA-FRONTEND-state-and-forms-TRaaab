import React from 'react';
import '../styles/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      postal: '',
      city: '',
      country: '',
      checked: false,
      errors: {
        address: '',
      },
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    errors.address =
      name === 'address' && value.length < 8
        ? 'You need to enter at-least 8 characters'
        : '';
    this.setState({ errors, [name]: value });
  };

  handleChecked = ({ target }) => {
    let { name, checked } = target;
    this.setState({ [name]: checked });
  };

  render() {
    let { address } = this.state.errors;
    return (
      <>
        <div className="form">
          <h2>Shipping Address</h2>
          <form>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className={!address ? 'form_input' : 'error'}
              placeholder="Enter Username"
              onChange={this.handleInput}
              value={this.state.address}
            />
            <span>{address}</span>
            <label htmlFor="postal">ZIP/Postal Code</label>
            <input
              className="form_input"
              type="text"
              id="postal"
              name="postal"
              onChange={this.handleInput}
              value={this.state.postal}
            />

            <label htmlFor="city">City</label>
            <input
              className="form_input"
              type="text"
              id="city"
              name="city"
              onChange={this.handleInput}
              value={this.state.city}
            />

            <label htmlFor="country">Country</label>
            <input
              className="form_input"
              type="text"
              id="country"
              name="country"
              onChange={this.handleInput}
              value={this.state.country}
            />
          </form>
        </div>
        <div className="form">
          <h2>Billing Address</h2>
          <form>
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                onChange={this.handleChecked}
                checked={this.state.checked}
                name="checked"
              />
              Same as the Shipping Address?
            </label>
            <label htmlFor="address">Address</label>

            <input
              type="text"
              id="address"
              name="address"
              className={!address ? 'form_input' : 'error'}
              placeholder="Enter Username"
              onChange={this.handleInput}
              value={this.state.checked ? this.state.address : ''}
            />
            <span>{address}</span>
            <label htmlFor="postal">ZIP/Postal Code</label>
            <input
              className="form_input"
              type="text"
              id="postal"
              name="postal"
              onChange={this.handleInput}
              value={this.state.checked ? this.state.postal : ''}
            />

            <label htmlFor="city">City</label>
            <input
              className="form_input"
              type="text"
              id="city"
              name="city"
              onChange={this.handleInput}
              value={this.state.checked ? this.state.city : ''}
            />

            <label htmlFor="country">Country</label>
            <input
              className="form_input"
              type="text"
              id="country"
              name="country"
              onChange={this.handleInput}
              value={this.state.checked ? this.state.country : ''}
            />
          </form>
        </div>
      </>
    );
  }
}
export default App;