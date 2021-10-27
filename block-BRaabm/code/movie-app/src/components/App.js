import React from 'react';
import data from './data.json';
import Modal from './Modal';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      selectedIndex: null,
      modalClose: false,
    };
  }
  handleClick = (index) => {
    this.setState({
      selectedIndex: index,
      modalClose: false,
    });
  };

  handleMouseOver = (i) => {
    this.setState({
      activeIndex: i,
    });
  };

  handleMouseLeave = (i) => {
    this.setState({
      activeIndex: null,
    });
  };
  render() {
    var array = data.map((movie) => movie);

    return (
      <>
        <div className="container">
          <h1>Movie App</h1>
          <ul className="movielist">
            {array.map((movie, i) => {
              return (
                <li
                  className="movie"
                  key={i}
                  onMouseOver={() => this.handleMouseOver(i)}
                  onMouseLeave={() => this.handleMouseLeave(i)}
                >
                  <img src={movie.Images[0]} alt={movie.Title} />
                  <h2 className="name">{movie.Title}</h2>
                  <p>{movie.Released}</p>
                  <div className="more-info">
                    {this.state.activeIndex === i ? (
                      <a href="#movieinfo">
                        {' '}
                        <button onClick={() => this.handleClick(i)}>
                          More Info 👇️
                        </button>
                      </a>
                    ) : (
                      ''
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
          <section
            className={
              this.state.selectedIndex && !this.state.modalClose
                ? 'close'
                : 'hidden'
            }
          >
            <div className="btn-close">
              <button
                className=""
                onClick={() =>
                  this.setState({
                    selectedIndex: null,
                    modalClose: true,
                  })
                }
              >
                Close
              </button>
            </div>
            {this.state.selectedIndex ? (
              <Modal {...data[this.state.selectedIndex]} state={false} />
            ) : (
              ''
            )}
          </section>
        </div>
      </>
    );
  }
}

export default App;