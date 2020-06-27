import SearchMovies from "../js/fetchMovies";
import popularTV from '../js/fetchMovies'
import popularListTV from './popular-list.hbs'

const popularUL = document.querySelector(".new_movies");
const form = document.querySelector("#search-form");

//  1.Отлавливаем инпут
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
// 4. Вызываем функцию с популярными сериалами,в неё же прокидываем готовую разметку
popularTV.fetchPopular().then(results => {
    const markUp = buildListItemsMarkup(results)
    insertHTML(markUp)
})
//  3. Возвращаем разметку и хбс
function buildListItemsMarkup(items) {
    return popularListTV(items)
}
// 2.Создаём функцию для выгрузки разметки в ДОМ
function insertHTML(items) {
    popularUL.insertAdjacentHTML('beforeend', items)
}