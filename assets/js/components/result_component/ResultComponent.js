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
      <template id="bmi-display-sr-only-template">
        <p id="bmi-display-sr-only" class="visually-hidden"></p>
      </template>
      <section
        id="bmi-result"
        aria-label="BMI Calculator result"
        class="hidden" 
        aria-live="polite" role="status" aria-atomic="true"
      >
      </section>
    `;
  }

  renderResultContent() {
    return `
      <p id="bmi-display" aria-hidden="true">
        <span id="bmi-display-label">Your BMI is...</span>
        <span id="bmi-display-value">${this.bmi.toFixed(2)}</span>
      </p>
      <p id="bmi-classification" aria-hidden="true">
        Your BMI suggests you're a ${Store.getClassification()}. Your ideal weight is between <strong id="ideal-weight">${this.getIdealWeight()}</strong>
      </p>
      `;
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        ${css}
      </style>
      <section id="bmi-calculator-info" aria-label="BMI Calculator Info" >
        ${this.renderWelcomeMessage()}
        ${this.renderBMIResult()} 
      </section> 
    `;
  }

  update(bmi) {
    this.bmi = bmi;
    if (this.shadow) {
      const welcomeMessage = this.shadow.querySelector("#welcome-message");
      const bmiResult = this.shadow.querySelector("#bmi-result");
      if (this.bmi === 0) {
        welcomeMessage.classList.remove("hidden");
        bmiResult.classList.add("hidden");
      } else {
        welcomeMessage.classList.add("hidden");
        bmiResult.classList.remove("hidden");
        bmiResult.innerHTML = this.renderResultContent();
        const bmiDisplayTemplate = this.shadow.querySelector(
          "#bmi-display-sr-only-template"
        );
        const clonedNode = bmiResult.querySelector("#bmi-display-sr-only");
        if (!clonedNode) {
          const clone = bmiDisplayTemplate.content.cloneNode(true);
          bmiResult.appendChild(clone);
        }

        setTimeout(() => {
          const idealWeightRange = this.getIdealWeight();
          const cloneTextNode = this.shadow.querySelector(
            "#bmi-display-sr-only"
          );
          if (cloneTextNode) {
            cloneTextNode.textContent = `Your BMI is ${this.bmi.toFixed(
              2
            )}. Your BMI suggests you're a ${Store.getClassification()}. Your ideal weight is between ${idealWeightRange}`;
          }
        }, 1500);
      }
    }
  }

  getIdealWeight() {
    const minWeight = Store.getMinIdealWeight();
    const maxWeight = Store.getMaxIdealWeight();
    if (Store.unit === Store.UNIT.METRIC) {
      return `${minWeight.toFixed(2)}kgs - ${maxWeight.toFixed(2)}kgs.`;
    } else if (Store.unit === Store.UNIT.IMPERIAL) {
      const minCalculatedWeight = Store.getWeightInStonesAndPounds(minWeight);
      const maxCalculatedWeight = Store.getWeightInStonesAndPounds(maxWeight);
      return `${
        minCalculatedWeight.stones
      }st ${minCalculatedWeight.pounds.toFixed(2)}lbs - ${
        maxCalculatedWeight.stones
      }st ${maxCalculatedWeight.pounds.toFixed(2)}lbs`;
    }
  }
}
