import { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import { fetchMoviesWithQuery } from 'services/api';

class App extends Component {
  state = {
    searchValue: '',
    isPending: false,
    images: [],
    page: 1,
    loader: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { isPending, searchValue, page } = this.state;

    if (isPending) {
      try {
        const fetchImages = await fetchMoviesWithQuery(searchValue, page);
        this.setState(({ images }) => ({
          images: page > 1 ? [...images, ...fetchImages] : fetchImages,
          loader: false,
          isPending: false,
        }));

        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      } catch (error) {
        this.setState({ error: error.response.error });
      }
    }
  }

  handleFormSubmit = searchValue => {
    this.setState({ searchValue, isPending: true, page: 1, loader: true });
    window.scrollTo({
      top: '',
      behavior: 'smooth',
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isPending: true,
      loader: true,
    }));
  };

  // ======================== RENDER ==================================

  render() {
    const { loader, images } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={images}
          onLoadMore={this.onLoadMore}
          loader={loader}
        />
      </>
    );
  }
}

export default App;
