import css from "./ResultComponent.css?inline";
import Store from "../../store";

export default class ResultComponent extends HTMLElement {
  constructor() {
    super();
    Store.subscribe(this);
    this.bmi = Store.bmi;
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  renderWelcomeMessage() {
    return `
      <section
        id="welcome-message"
        aria-labelledby="form-footer-title"
        aria-describedby="form-footer-description"
      >
        <h3 id="form-footer-title">Welcome!</h3>
        <p id="form-footer-description">
          Enter your height and weight and you’ll see your BMI result here
        </p>
      </section>
    `;
  }

  renderBMIResult() {
    return `
      <section
        id="bmi-result"
        aria-label="BMI Calculator result"
      >
        <p id="bmi-display">
          <span id="bmi-display-label">Your BMI is...</span>
          <span id="bmi-display-value">${this.bmi.toFixed(2)}</span>
        </p>
        <p id="bmi-classification">
          Your BMI suggests you're a ${Store.getClassification()}. Your ideal weight is between <strong>${this.getIdealWeight()}</strong>
        </p>
      </section>
    `;
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        ${css}
      </style>
      <section id="bmi-calculator-info" aria-label="BMI Calculator Info" aria-live="assertive" role="status" aria-atomic="true">
        ${
          this.bmi === 0 ? this.renderWelcomeMessage() : this.renderBMIResult()
        } 
      </section> 
    `;
  }

  update(bmi) {
    this.bmi = bmi;
    if (this.shadow) {
      const bmiInfoRegion = this.shadow.querySelector("#bmi-calculator-info");
      if (this.bmi === 0) {
        bmiInfoRegion.innerHTML = this.renderWelcomeMessage();
      } else {
        bmiInfoRegion.innerHTML = this.renderBMIResult();
      }
    }
  }

  getWeightInStonesAndPounds(weight) {
    const convertedWeight = weight / Store.CONVERSIONS.STONE_TO_KG;
    const weightInStones = Math.floor(convertedWeight);
    const remainingWeightInPounds =
      (convertedWeight - weightInStones) * Store.CONVERSIONS.STONE_TO_POUNDS;
    return `${weightInStones.toFixed(0)}st ${remainingWeightInPounds.toFixed(
      2
    )}lbs`;
  }

  getIdealWeight() {
    const minWeight = Store.getMinIdealWeight();
    const maxWeight = Store.getMaxIdealWeight();
    if (Store.unit === Store.UNIT.METRIC) {
      return `${minWeight.toFixed(2)}kgs - ${maxWeight.toFixed(2)}kgs.`;
    } else if (Store.unit === Store.UNIT.IMPERIAL) {
      const minWeightInStonesAndPounds =
        this.getWeightInStonesAndPounds(minWeight);
      const maxWeightInStonesAndPounds =
        this.getWeightInStonesAndPounds(maxWeight);
      return `${minWeightInStonesAndPounds} - ${maxWeightInStonesAndPounds}.`;
    }
  }
}
