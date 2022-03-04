import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';
import { fetchMoviesWithQuery } from 'services/api';

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
          const fetchImages = await fetchMoviesWithQuery(searchValue, page);
          setImages(page > 1 ? [...images, ...fetchImages] : fetchImages);
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
  }, [images, isPending, page, searchValue]);

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
    setPage();
    setIsPending(true);
    setLoader(true);
  };

  // ======================== RENDER ==================================

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} onLoadMore={onLoadMore} loader={loader} />
    </>
  );
};

export default App;

// ===============================================
// class App extends Component {
//   state = {
//     searchValue: '',
//     isPending: false,
//     images: [],
//     page: 1,
//     loader: false,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const { isPending, searchValue, page } = this.state;

//     if (isPending) {
//       try {
//         const fetchImages = await fetchMoviesWithQuery(searchValue, page);
//         this.setState(({ images }) => ({
//           images: page > 1 ? [...images, ...fetchImages] : fetchImages,
//           loader: false,
//           isPending: false,
//         }));

//         if (page > 1) {
//           window.scrollTo({
//             top: document.documentElement.scrollHeight,
//             behavior: 'smooth',
//           });
//         }
//       } catch (error) {
//         this.setState({ error: error.response.error });
//       }
//     }
//   }

//   handleFormSubmit = searchValue => {
//     this.setState({ searchValue, isPending: true, page: 1, loader: true });
//     window.scrollTo({
//       top: '',
//       behavior: 'smooth',
//     });
//   };

//   onLoadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//       isPending: true,
//       loader: true,
//     }));
//   };

//   // ======================== RENDER ==================================

//   render() {
//     const { loader, images } = this.state;
//     return (
//       <>
//         <SearchBar onSubmit={this.handleFormSubmit} />
//         <ImageGallery
//           images={images}
//           onLoadMore={this.onLoadMore}
//           loader={loader}
//         />
//       </>
//     );
//   }
// }

// export default App;
