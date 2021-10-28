import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      fontSize: '16',
    };
  }
  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };
  handleFontSize = (event) => {
    this.setState({
      fontSize: event.target.value,
    });
  };

  render() {
    let fonts = [
      'Roboto',
      'Poppins',
      'Open Sans',
      'Georama',
      'Noto Sans JP',
      'Oswald',
      'Style Script',
      'Palette Mosaic',
      'Merriweather',
      'Crimson Pro',
    ];
    let size = this.state.fontSize + 'px';
    return (
      <>
        <div className="container">
          <header className="header">
            <div className="user-input">
              <select className="select">
                <option value="Custom">Custom</option>
                <option value="Custom">one</option>
              </select>
              <input
                value={this.state.inputText}
                onChange={this.handleChange}
                type="text"
                placeholder="type something"
              />
            </div>
            <div className="slider">
              <p className="range_par">{this.state.fontSize}px</p>
              <input
                value={this.state.fontSize}
                type="range"
                min="16"
                max="100"
                onChange={this.handleFontSize}
              />
            </div>
          </header>
          <section>
            <ul className="fonts">
              {fonts.map((font) => (
                <li className="font" key={font}>
                  <h2>{font}</h2>
                  <p style={{ fontFamily:font, fontSize: size }}>
                    {this.state.inputText}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </>
    );
  }
}

export default App;