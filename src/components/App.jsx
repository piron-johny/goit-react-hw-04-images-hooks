import { useEffect, useState } from 'react';
import { fetchMoviesWithQuery } from 'services/api';
import ImageGallery from './ImageGallery';
import SearchBar from './SearchBar';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (isPending) {
        try {
          setIsPending(true)
          const fetchImages = await fetchMoviesWithQuery(searchValue, page);
          setImages(prev => page > 1 ? [...prev, ...fetchImages] : fetchImages);
          setLoader(false);
          setIsPending(false);

          if (page > 1) {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [isPending, page, searchValue]);

  const handleFormSubmit = searchValue => {
    setSearchValue(searchValue);
    setIsPending(true);
    setPage(1);
    setLoader(true);

    window.scrollTo({
      top: '',
      behavior: 'smooth',
    });
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setIsPending(true);
    setLoader(true);
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} onLoadMore={onLoadMore} loader={loader} />
    </>
  );
};

export default App;

