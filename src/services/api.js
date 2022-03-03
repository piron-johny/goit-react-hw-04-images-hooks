import axios from 'axios';

export const fetchMoviesWithQuery = async (searchValue, page = 1) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=cat&page=1&key=24644022-4984203066fb287d0befab6c3&image_type=photo&orientation=horizontal&per_page=12&page=${page}&q=${searchValue}`
  );
  return response.data.hits;
};
