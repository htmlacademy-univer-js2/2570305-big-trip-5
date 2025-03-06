import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import FormEditPointView from '../view/form-edit-point-view.js';
import FormAddPointView from '../view/form-add-point-view.js';
import PointView from '../view/point-view.js';

import {render} from '../render.js';
import { RenderPosition } from '../render.js';

export default class BoardPresenter {
  constructor({boardContainer, filterContainer}) {
    this.boardContainer = boardContainer;
    this.filterContainer = filterContainer;
  }

  init() {
    render(new FilterView(), this.filterContainer);
    render(new SortView(), this.boardContainer);
    render(new FormEditPointView(), this.boardContainer, RenderPosition.BEFOREEND);
    render(new FormAddPointView(), this.boardContainer, RenderPosition.BEFOREEND);
    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.boardContainer, RenderPosition.BEFOREEND);
    }
  }
}
