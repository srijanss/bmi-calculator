import css from "./FormComponent.css?inline";

export default class FormComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
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
        <fieldset id="imperial-unit">
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
}
