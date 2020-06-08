const apiKey = '81d4397645ad96b495f4ebbeead1090d';
const baseUrl = 'https://api.themoviedb.org/3/';

export default {
  //   query: '',
  fetchMovies(query) {
    const requestParamas = `search/movie?api_key=${apiKey}&language=ru-RU&query=${query}&page=1&include_adult=false`
    return fetch(baseUrl + requestParamas)
      .then(res => res.json()).then(data => {
        console.log('data', data)
      })
  },
}
