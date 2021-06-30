import { Component } from 'react';
import s from './App.module.css';

import fetchImg from './Components/API/Pixabay';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Modal from './Components/Modal';
import Button from './Components/Button';
import Looader from './Components/Loader';

class App extends Component {
  state = {
    isLoading: false,
    largeURL: '',
    images: [],
    query: '',
    pageNumber: 1,
    error: null,
  };

  componentDidUpdate(PrevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.FetchImages();
    }
    if (this.state.pageNumber > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  makeLargeImg = largeURL => this.setState({ largeURL });

  onSubmit = searchQuery => {
    this.setState({
      query: searchQuery,
      images: [],
      pageNumber: 1,
      largeURL: '',
      error: null,
    });
  };

  FetchImages = () => {
    const { query, pageNumber } = this.state;
    this.setState({ isLoading: true });

    fetchImg({ query, pageNumber })
      .then(newImages =>
        this.setState(({ images, pageNumber }) => {
          return {
            images: [...images, ...newImages],
            pageNumber: pageNumber + 1,
          };
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        return this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, isLoading, largeURL, error } = this.state;

    return (
      <div className={s.App}>
        {error && (
          <span style={{ color: 'red', fontSize: 46 }}>
            Something went wrong:{error.message}
          </span>
        )}
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery makeLargeImg={this.makeLargeImg} images={images} />

        {images.length > 0 && !isLoading && (
          <Button onClick={this.FetchImages} />
        )}

        {isLoading && <Looader />}

        {largeURL && (
          <Modal makeLargeImg={this.makeLargeImg}>
            <img src={largeURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
