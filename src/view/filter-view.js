import AbstractView from '../framework/view/abstract-view';
import { createListFilterElement } from '../view/filter-template';


export default class ListFilterElement extends AbstractView{
  get template() {
    return createListFilterElement ;
  }
}
