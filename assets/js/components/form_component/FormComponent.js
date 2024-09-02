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
        <fieldset>
          <legend>Choose your unit of measurement</legend>
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
        <fieldset>
          <legend>Metric measurements</legend>
          <label for="height">Height</label>
          <input type="number" id="height" name="height" placeholder="0" />
          <label for="weight">Weight</label>
          <input type="number" id="weight" name="weight" placeholder="0" />
        </fieldset>
        <fieldset>
          <legend>Imperial measurements</legend>
          <fieldset>
            <legend>Height</legend>
            <label for="feet">Feet</label>
            <input type="number" id="feet" name="feet" placeholder="0" />
            <label for="inches">Inches</label>
            <input type="number" id="inches" name="inches" placeholder="0" />
          </fieldset>
          <fieldset>
            <legend>Weight</legend>
            <label for="stones">Stones</label>
            <input type="number" id="stones" name="stones" placeholder="0" />
            <label for="pounds">Pounds</label>
            <input type="number" id="pounds" name="pounds" placeholder="0" />
          </fieldset>
        </fieldset>
      </form>
    `;
  }
}
