import AbstractView from '../framework/view/abstract-view';
import { createPointTemplate } from '../view/point-template';

export default class PointView extends AbstractView {
  #point = null;
  #pointDestination = null;
  #pointOffers = null;
  #handleEditClick = null;

  constructor({point, pointDestination, pointOffers, onEditClick}) {
    super();
    this.#point = point;
    this.#pointDestination = pointDestination;
    this.#pointOffers = pointOffers;
    this.#handleEditClick = onEditClick;

    this.element.querySelector('.event__rollup-btn') //не точно этот класс
      .addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createPointTemplate(this.#point);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
