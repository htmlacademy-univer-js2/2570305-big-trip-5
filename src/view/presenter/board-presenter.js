import FormEditPointView from '../form-edit-point-view.js';
import FormAddPointView from '../form-add-point-view.js';
import PointView from '../point-view.js';

import {render} from '../../render.js';
import { RenderPosition } from '../../render.js';

export default class BoardPresenter {
  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new FormEditPointView(), this.boardContainer, RenderPosition.BEFOREEND);
    render(new FormAddPointView(), this.boardContainer, RenderPosition.BEFOREEND);
    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.boardContainer, RenderPosition.BEFOREEND);
    }
  }
}
