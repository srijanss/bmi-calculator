import css from "./FormComponent.css?inline";
import Store from "../../store";

export default class FormComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
    this.handleEvents();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        ${css}
      </style>
      <h2 id="form-heading">Enter your details below</h2>
      <form
        id="bmi-calculator-form"
        action=""
        aria-labelledby="form-heading"
        novalidate
      >
        <fieldset id="unit-of-measure-group">
          <legend class="visually-hidden">Choose your unit of measurement</legend>
          <ul>
            <li>
              <input
                type="radio"
                id="metric"
                name="unit"
                value="metric"
                checked
              />
              <label for="metric">Metric</label>
            </li>
            <li>
              <input
                type="radio"
                id="imperial"
                name="unit"
                value="imperial"
              />
              <label for="imperial">Imperial</label>
            </li>
          </ul>
        </fieldset>
        <fieldset id="metric-unit">
          <legend class="visually-hidden">Metric measurements</legend>
          <label for="height">Height
            <div class="unit-input-wrapper" data-unit="cm">
              <input type="number" id="height" name="height" placeholder="0" />
            </div>
          </label>
          <label for="weight">Weight
            <div class="unit-input-wrapper" data-unit="kg">
              <input type="number" id="weight" name="weight" placeholder="0" />
            </div>
          </label>
        </fieldset>
        <fieldset id="imperial-unit" class="hidden">
          <legend class="visually-hidden">Imperial measurements</legend>
          <fieldset id="imperial-unit-height">
            <legend>Height</legend>
            <label for="feet" class="visually-hidden">Feet</label>
            <div class="unit-input-wrapper" data-unit="ft">
              <input type="number" id="feet" name="feet" placeholder="0" />
            </div>
            <label for="inches" class="visually-hidden">Inches</label>
            <div class="unit-input-wrapper" data-unit="in">
              <input type="number" id="inches" name="inches" placeholder="0"/>
            </div>
          </fieldset>
          <fieldset id="imperial-unit-weight">
            <legend>Weight</legend>
            <label for="stones" class="visually-hidden">Stones</label>
            <div class="unit-input-wrapper" data-unit="st">
              <input type="number" id="stones" name="stones" placeholder="0"/>
            </div>
            <label for="pounds" class="visually-hidden">Pounds</label>
            <div class="unit-input-wrapper" data-unit="lbs">
              <input type="number" id="pounds" name="pounds" placeholder="0" />
            </div>
          </fieldset>
        </fieldset>
      </form>
    `;
  }

  calculateBmi(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    for (const key in data) {
      if (data[key] === "") {
        data[key] = 0;
      }
    }
    if (Store.unit === Store.UNIT.METRIC) {
      if (data.height && data.weight) {
        const height = parseFloat(data.height) / 100;
        const weight = parseFloat(data.weight);
        Store.bmi = { weight, height };
        Store.height = parseFloat(height.toFixed(2));
      }
    } else if (Store.unit === Store.UNIT.IMPERIAL) {
      if (
        (data.feet && data.stones) ||
        (data.feet && data.pounds) ||
        (data.inches && data.stones) ||
        (data.inches && data.pounds)
      ) {
        const height =
          parseFloat(data.feet) * Store.CONVERSIONS.FOOT_TO_METER +
          parseFloat(data.inches) * Store.CONVERSIONS.INCH_TO_METER;
        const weight =
          (parseFloat(data.stones) +
            parseFloat(data.pounds) / Store.CONVERSIONS.STONE_TO_POUNDS) *
          Store.CONVERSIONS.STONE_TO_KG;
        Store.bmi = { weight, height };
        Store.height = {
          feet: parseFloat(data.feet),
          inches: parseFloat(data.inches),
        };
      }
    }
  }

  handleEvents() {
    const form = this.shadow.getElementById("bmi-calculator-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    const metricUnitFieldSet = this.shadow.getElementById("metric-unit");
    const imperialUnitFieldSet = this.shadow.getElementById("imperial-unit");

    const metricRadio = this.shadow.getElementById("metric");
    metricRadio.addEventListener("change", (e) => {
      if (e.currentTarget.checked) {
        Store.unit = Store.UNIT.METRIC;
        metricUnitFieldSet.classList.remove("hidden");
        imperialUnitFieldSet.classList.add("hidden");
      }
    });
    const imperialRadio = this.shadow.getElementById("imperial");
    imperialRadio.addEventListener("change", (e) => {
      if (e.currentTarget.checked) {
        Store.unit = Store.UNIT.IMPERIAL;
        metricUnitFieldSet.classList.add("hidden");
        imperialUnitFieldSet.classList.remove("hidden");
      }
    });

    const numberInputs = this.shadow.querySelectorAll("input[type='number']");
    Array.from(numberInputs).forEach((input) => {
      input.addEventListener("input", (e) => {
        this.calculateBmi(form);
      });
    });
  }
}
