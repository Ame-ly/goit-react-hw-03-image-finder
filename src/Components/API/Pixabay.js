import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const COUNT_ON_PAGE = 12;
const KEY = '21200739-c1a4d2f91a97c5d854a9d8dd6';
const OPTIONS = `&image_type=photo&orientation=horizontal&per_page=${COUNT_ON_PAGE}`;
// // https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

const fetchImg = async ({ query = '', pageNumber = 1 }) => {
  const r = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${query}&page=${pageNumber}${OPTIONS}`,
  );

  return r.data.hits;
};
export default fetchImg;
