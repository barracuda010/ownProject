const apiKey = "81d4397645ad96b495f4ebbeead1090d";
const baseUrl = "https://api.themoviedb.org/3/";
import templateMovies from "../searchResults/main.hbs";

export default {
  //   query: '',
  fetchMovies(query) {
    const requestParamas = `search/movie?api_key=${apiKey}&language=ru-RU&query=${query}&page=1&include_adult=false`;
    return fetch(baseUrl + requestParamas)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.results);
        // return data.results
        const markup = data.results
          .map((movie) => templateMovies(movie))
          .join("");
        console.log(markup);
      });
  },
  fetchPopular() {
    const requestParams = `tv/on_the_air?api_key=${apiKey}&language=ru-RU&page=1`;
    return fetch(baseUrl + requestParams)
      .then((res) => res.json())
      .then((data) => {
        return data.results
      })
  }
};