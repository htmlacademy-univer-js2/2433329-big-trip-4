import ListFilterElement from './view/filter-view';
import {render, RenderPosition} from './render';
// import ListSortElement from './view/sort-view';
// import ListElement from './view/point-view';
// import NewPoint from './view/add-new-point';
// import EventListView from './view/event-list-view';
import BoardPresenter from './presenter/board-presenter';
import MainInfo from './view/info-view';

import MockService from './service/mock-service';
import DestinationsModel from './model/destinations-model';
import OffersModel from './model/offers-model';
import PointsModel from './model/points-model';

const bodyElement = document.querySelector('body');
const headerElement = bodyElement.querySelector('.page-header');
const siteListFilter = headerElement.querySelector('.trip-controls__filters');
const tripMain = headerElement.querySelector('.trip-main');
const eventsList = bodyElement.querySelector('.trip-events');

// const tripInfoElement = headerElement.querySelector('.trip-main');
// const filterElement = tripInfoElement.querySelector('.trip-controls__filters');

const mockService = new MockService();
const destinationsModel = new DestinationsModel(mockService);
const offerModel = new OffersModel(mockService);
const pointModel = new PointsModel(mockService);

const boardPresenter = new BoardPresenter({
  container: eventsList,
  destinationsModel,
  offerModel,
  pointModel
});

render(new MainInfo(), tripMain, RenderPosition.AFTERBEGIN);
render(new ListFilterElement(), siteListFilter);

boardPresenter.init();
