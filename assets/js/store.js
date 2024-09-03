class Store {
  constructor() {
    this.UNIT = {
      METRIC: "metric",
      IMPERIAL: "imperial",
    };
    this.CONVERSIONS = {
      FOOT_TO_METER: 0.3048,
      INCH_TO_METER: 0.0254,
      STONE_TO_KG: 6.35029318,
      STONE_TO_POUNDS: 14,
    };
    this.MIN_IDEAL_WEIGHT = 18.5;
    this.MAX_IDEAL_WEIGHT = 24.9;
    this.MIN_OVER_WEIGHT = 25;
    this.MAX_OVER_WEIGHT = 29.9;
    this._unit = this.UNIT.METRIC;
    this._height = 0;
    this._minIdealWeight = 0;
    this._maxIdealWeight = 0;
    this._bmi = 0;
    this._observers = [];
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
    const result = value.weight / value.height ** 2;
    this._bmi = parseFloat(result.toFixed(2));
    this.notify();
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (this.unit === this.UNIT.IMPERIAL) {
      this._height = value.feet * 0.3048 + value.inches * 0.127;
    } else {
      this._height = value;
    }
  }

  getMinIdealWeight() {
    return this.MIN_IDEAL_WEIGHT * Math.pow(this._height, 2);
  }

  getMaxIdealWeight() {
    return this.MAX_IDEAL_WEIGHT * Math.pow(this._height, 2);
  }

  getClassification() {
    if (this.bmi < this.MIN_IDEAL_WEIGHT) {
      return "underweight";
    } else if (
      this.bmi >= this.MIN_IDEAL_WEIGHT &&
      this.bmi <= this.MAX_IDEAL_WEIGHT
    ) {
      return "healthy weight";
    } else if (
      this.bmi >= this.MIN_OVER_WEIGHT &&
      this.bmi <= this.MAX_OVER_WEIGHT
    ) {
      return "overweight";
    }
    return "obese";
  }

  subscribe(observer) {
    this._observers.push(observer);
  }

  notify() {
    this._observers.forEach((observer) => observer.update(this._bmi));
  }
}

const store = new Store();
export default store;
