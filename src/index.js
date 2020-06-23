import SearchMovies from "./js/fetchMovies";


const movieUL = document.querySelector(".new_movies");
const form = document.querySelector("#search-form");


form.addEventListener("submit", handleInput);

export function handleInput(event) {
    event.preventDefault();
    const formData = new FormData(form);
    let inputValue;
    formData.forEach((value) => {
        inputValue = value;
    });
    SearchMovies.fetchMovies(inputValue);
}