import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import {render} from './render.js';
import BoardPresenter from './view/presenter/board-presenter.js';

const filtersElement = document.querySelector('.trip-controls__filters');
const tripElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: tripElement});

render(new FilterView(), filtersElement);
render(new SortView(), tripElement);

boardPresenter.init();
