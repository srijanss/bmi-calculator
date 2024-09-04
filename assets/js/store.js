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
    this._height = {
      meters: 0,
      feet: 0,
      inches: 0,
    };
    this._weight = {
      kgs: 0,
      stones: 0,
      pounds: 0,
    };
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
      this._height.feet = parseFloat(value.feet);
      this._height.inches = parseFloat(value.inches);
      this._height.meters = this.getFixedValue(
        value.feet * this.CONVERSIONS.FOOT_TO_METER +
          value.inches * this.CONVERSIONS.INCH_TO_METER
      );
    } else {
      this._height.meters = value / 100;
      const heightInFeet = this._height.meters / this.CONVERSIONS.FOOT_TO_METER;
      this._height.feet = Math.floor(heightInFeet);
      this._height.inches = this.getFixedValue(
        (heightInFeet - this._height.feet) * 12
      );
    }
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    if (this.unit === this.UNIT.IMPERIAL) {
      this._weight.stones = parseFloat(value.stones);
      this._weight.pounds = parseFloat(value.pounds);
      this._weight.kgs = this.getFixedValue(
        (parseFloat(value.stones) +
          parseFloat(value.pounds) / this.CONVERSIONS.STONE_TO_POUNDS) *
          this.CONVERSIONS.STONE_TO_KG
      );
    } else {
      this._weight.kgs = value;
      const weightInStones = this._weight.kgs / this.CONVERSIONS.STONE_TO_KG;
      this._weight.stones = Math.floor(weightInStones);
      this._weight.pounds = this.getFixedValue(
        (weightInStones - this._weight.stones) * 14
      );
    }
  }

  getFixedValue(value) {
    return parseFloat(value.toFixed(4));
  }

  getMinIdealWeight() {
    return this.MIN_IDEAL_WEIGHT * Math.pow(this._height.meters, 2);
  }

  getMaxIdealWeight() {
    return this.MAX_IDEAL_WEIGHT * Math.pow(this._height.meters, 2);
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
      this.bmi > this.MAX_IDEAL_WEIGHT &&
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
