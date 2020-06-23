const apiKey = '81d4397645ad96b495f4ebbeead1090d';
const baseUrl = 'https://api.themoviedb.org/3/';
import templateMovies from '../searchResults/main.hbs';
import {
  moviesUl
} from '../searchResults/main';
console.log('object', moviesUl)



export default {
  //   query: '',
  fetchMovies(query) {
    const requestParamas = `search/movie?api_key=${apiKey}&language=ru-RU&query=${query}&page=1&include_adult=false`
    return fetch(baseUrl + requestParamas)
      .then(res => res.json()).then(data => {
        console.log('data', data.results)
        // return data.results
        const markup = data.results.map(movie => templateMovies(movie)).join('');
        console.log(markup)
        const lvl = moviesUl.insertAdjacentHTML('beforeend', markup)
      })
  },
}