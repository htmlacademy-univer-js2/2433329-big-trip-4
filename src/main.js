import ListFilterElement from './view/filter-view';
import {render, RenderPosition} from './render';
// import ListSortElement from './view/sort-view';
// import ListElement from './view/point-view';
// import NewPoint from './view/add-new-point';
// import EventListView from './view/event-list-view';
import BoardPresenter from './presenter/board-presenter';
import MainInfo from './view/info-view';

const bodyElement = document.querySelector('body');
const headerElement = bodyElement.querySelector('.page-header');
const siteListFilter = headerElement.querySelector('.trip-controls__filters');
const tripMain = headerElement.querySelector('.trip-main');
const eventsList = bodyElement.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({
  container: eventsList
});
render(new MainInfo(), tripMain, RenderPosition.AFTERBEGIN);
render(new ListFilterElement(), siteListFilter);

boardPresenter.init();
