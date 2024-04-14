import { render, replace } from '../render';
import EventListView from '../view/event-list-view';
import ListSortElement from '../view/sort-view';
import NewPoint from '../view/add-new-point';
import PointView from '../view/point-view';
import EditPoint from '../view/edit-point-view';

export default class BoardPresenter {
  #container = null;

  #sortComponent = new ListSortElement();
  #eventListComponent = new EventListView();

  constructor({container}) {
    this.#container = container;
  }

  init(){
    this.#renderBoard();
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };
    const pointComponent = new PointView({
      point,
      onEditClick: () => {
        replaceCardToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });
    const pointEditComponent = new EditPoint({
      point,
      onFormSubmit: () => {
        replaceFormToCard();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceCardToForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceFormToCard() {
      replace(pointComponent, pointEditComponent);
    }
  // this.point.array.forEach(element => {
  //   render(
  //     new PointView ({
  //       point,
  //       pointDestination: this.destinationModel.getById(point.destination),
  //       pointOffers: this.offersModel.getByType(point.type)
  //     }),
  //     this.eventListComponent.getElement()
  //   );
  // });
  }

  #renderBoard() {
    // render(this.#boardComponent, this.#boardContainer);

    // if (this.#boardPoint.every((point) => point.isArchive)) {
    //   render(new NoTaskView(), this.#boardComponent.element);
    //   return;
    // }

    render(this.#sortComponent, this.#container);
    render(this.#eventListComponent, this.#container);

    render(new EditPoint(), this.#eventListComponent.getElement());
    render(new NewPoint(), this.#eventListComponent.getElement());

    for(let i = 0; i < 3; i++){
      render(new PointView(), this.#eventListComponent.getElement());
    }
  }
}
