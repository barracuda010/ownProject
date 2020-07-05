import SearchMovies from "../js/fetchMovies";
import popularTV from '../js/fetchMovies'
import popularListTV from './popular-list.hbs'
import popularMovies from './pop-movies.hbs'

const popularUL = document.querySelector(".new_movies");
const popMovies = document.querySelector('.pop_movies');
const form = document.querySelector("#search-form");
const btnLeft = document.querySelector('.step_left');
const btnRight = document.querySelector('.step_right')
const clickLeft = document.querySelector('.click_left')
const clickRight = document.querySelector('.click_right')
let left = 0;

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
// ===========Слайдер
btnLeft.addEventListener('click', sliderLeft);
btnRight.addEventListener('click', sliderRight)

function sliderLeft() {
    if (left < -2550) {
        left = 0
    }
    left = left - 190;
    popularUL.style.left = left + 'px';
}

function sliderRight() {
    if (left >= 0) {
        left = -190
    }
    left = left + 190;
    popularUL.style.left = left + 'px';

}
clickLeft.addEventListener('click', stepLeft);
clickRight.addEventListener('click', stepRight)

function stepLeft() {
    if (left < -2550) {
        left = 0
    }
    left = left - 190;
    popMovies.style.left = left + 'px';
}

function stepRight() {
    if (left >= 0) {
        left = -190
    }
    left = left + 190;
    popMovies.style.left = left + 'px';

}
// =========Популярные фильмы
popularTV.fetchPopMovies().then(res => {
    const markUp = popMoviesList(res)
    putInHTML(markUp)
})

function popMoviesList(items) {
    return popularMovies(items)
}

function putInHTML(items) {
    popMovies.insertAdjacentHTML('beforeend', items)
}