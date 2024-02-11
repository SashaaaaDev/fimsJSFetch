import {
  renderMovies,
  movieAdd,
  inputSearch,
  clearMovies,
  checkboxTrigger,
} from "./dom.js";

let searchString = null;

const timeLine = (() => {
  let timer = null;
  return (cb, ms) => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    timer = setTimeout(cb, ms);
  };
})();

const getData = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.Search);

const inputSearchHandler = (e) => {
  timeLine(() => {
    const searchValue = e.target.value.trim();
    if (searchValue.length < 4 || searchString === searchValue) return;
    if (!checkboxTrigger) clearMovies();
    searchString = searchValue;
    getData(`https://www.omdbapi.com/?apikey=23c4ee8c&s=${searchValue}`)
      .then((data) => data.forEach((movie) => movieAdd(movie)))
      .catch((err) => console.log(err));
  }, 2000);
};

export const movieInit = () => {
  renderMovies();
  inputSearch.addEventListener("input", inputSearchHandler);
};
