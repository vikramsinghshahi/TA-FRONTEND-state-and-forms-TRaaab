// import '../styles/index.css';
import React from 'react';

class FormValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
      errors: {
        username: '',
        email: '',
        password1: '',
        password2: '',
      },
    };
  }

  validateEmail = (email) => {
    // eslint-disable-next-line
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'username':
        errors.username =
          value.length < 5 ? 'Username can not be less than 5 characters' : '';
        break;
      case 'email':
        errors.email = this.validateEmail(value) ? '' : 'Email is not valid!';
        break;
      case 'password':
        errors.password1 =
          value.length < 5 ? 'Password can not be less than 5 characters' : '';
        break;
      case 'password2':
        errors.password2 =
          this.state.password1 !== value ? "Password doesn't match" : '';
        break;
      default:
        break;
    }
    this.setState({
      errors,
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      this.state.username +
        ' ' +
        this.state.email +
        ' ' +
        this.state.password1 +
        ' ' +
        this.state.password2
    );
  };
  render() {
    let { username, email, password1, password2 } = this.state.errors;
    return (
      <>
        <div className="form">
          <h2>Form Validation</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className={username ? 'error' : 'form_input'}
              onChange={this.handleInput}
              value={this.state.value}
              placeholder="Enter Username"
            />
            <span>{username}</span>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={email ? 'error' : 'form_input'}
              placeholder="Enter email"
              onChange={this.handleInput}
              value={this.state.value}
            />
            <span>{email}</span>
            <label htmlFor="password1">Password</label>
            <input
              type="password"
              id="password1"
              name="password1"
              className={password1 ? 'error' : 'form_input'}
              onChange={this.handleInput}
              placeholder="Enter password"
              value={this.state.value}
            />
            <span>{password1}</span>
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              className={password2 ? 'error' : 'form_input'}
              onChange={this.handleInput}
              placeholder="Enter password again"
              value={this.state.value}
            />
            <span>{password2}</span>
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

export default FormValidation;