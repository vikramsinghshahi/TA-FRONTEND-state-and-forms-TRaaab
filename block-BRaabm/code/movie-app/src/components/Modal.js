import React from 'react';

class Modal extends React.Component {
  render() {
    let movie = this.props;
   
    return (
      <>
        <div className="modal" id="movieinfo">
          <h2 className="info">Title: {movie.Title}</h2>
          <h2 className="info">Released Year: {movie.Released}</h2>
          <div className="info">
            {movie.Genre.split(',').map((data) => (
              <h2 className="info">{data}</h2>
            ))}
          </div>
          <h2 className="info">Director: {movie.Director}</h2>
          <h2 className="info">Actors: {movie.Actors}</h2>
          <h2 className="info">{movie.Plot}</h2>
          <h2 className="info">Language: {movie.Language}</h2>
          <h2 className="info">Awards: {movie.Awards}</h2>
          <h2 className="info">IMDB Rating: {movie.imdbRating}</h2>
          <div className="images">
            {movie.Images.map((img, i) => (
              <div className="image-container" key={i}>
                <img src={img} alt={movie.Title} />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Modal;