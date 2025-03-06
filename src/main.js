import BoardPresenter from './presenter/board-presenter.js';

const filtersElement = document.querySelector('.trip-controls__filters');
const tripElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: tripElement, filterContainer: filtersElement});

boardPresenter.init();
