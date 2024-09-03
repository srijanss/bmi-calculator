class Store {
  constructor() {
    this.UNIT = {
      METRIC: "metric",
      IMPERIAL: "imperial",
    };
    this._unit = this.UNIT.METRIC;
    this._bmi = 0;
  }

  get unit() {
    return this._unit;
  }

  set unit(value) {
    this._unit = value;
  }

  get bmi() {
    return this._bmi;
  }
  set bmi(value) {
    this._bmi = value;
  }
}

const store = new Store();
export default store;
