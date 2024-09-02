import css from "./ResultComponent.css?inline";

export default class ResultComponent extends HTMLElement {
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
      <section aria-label="BMI Calculator Info">
        <section
          aria-labelledby="form-footer-title"
          aria-describedby="form-footer-description"
        >
          <h3 id="form-footer-title">Welcome!</h3>
          <p id="form-footer-description">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </section>
        <section
          aria-label="BMI Calculator result"
          aria-describedby="bmi-result-description"
        >
          <p id="bmi-result-desciption">
            Your BMI is...

            <!-- add score -->

            Your BMI suggests you're
            <!-- add classification -->. Your ideal weight is between
            <!-- add range -->.
          </p>
        </section>
      </section> 
    `;
  }
}
