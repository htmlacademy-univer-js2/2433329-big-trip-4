import AbstractView from '../framework/view/abstract-view';
import { addNewPoint } from '../view/add-new-point-template';

export default class NewPoint extends AbstractView{
  get template() {
    return addNewPoint;
  }
}
