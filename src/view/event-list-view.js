import AbstractView from '../framework/view/abstract-view';
import { createEventListTemplate } from '../view/event-list-template';

export default class EventListView extends AbstractView{
  get template() {
    return createEventListTemplate;
  }
}
