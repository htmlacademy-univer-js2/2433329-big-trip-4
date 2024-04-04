//Модель для хранения данных для точек маршрута

export default class PointsModel {
  constructor(service) {
    this.service = service;
    this.points = this.service.getPoints();
  }

  get() {
    return this.points;
  }
}
