(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const p='a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:inherit;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}:host *,:host :after,:host :before{box-sizing:border-box}:host .visually-hidden{height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;clip:rect(0,0,0,0);border-width:0;white-space:nowrap}:host .hidden{display:none!important}:host h2{font-size:1.5rem;font-variation-settings:"wght" var(--fw-semi-bold);letter-spacing:-.7px;line-height:1}:host #bmi-calculator-form{--radio-size:31px;display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;gap:1.5rem}:host #bmi-calculator-form fieldset#unit-of-measure-group{margin-top:1.5rem}:host #bmi-calculator-form fieldset#unit-of-measure-group ul{display:-webkit-box;display:-ms-flexbox;display:flex;list-style:none}:host #bmi-calculator-form fieldset#unit-of-measure-group ul li{align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;flex:1;font-size:1rem;font-variation-settings:"wght" var(--fw-semi-bold);gap:1.125rem;line-height:1.5}:host #bmi-calculator-form fieldset#unit-of-measure-group ul input[type=radio]{-webkit-appearance:none;appearance:none;-webki-appearance:none;-moz-appearance:none;border:1px solid var(--color-dark-electric-blue);border-radius:50%;height:var(--radio-size);margin:0;width:var(--radio-size)}:host #bmi-calculator-form fieldset#unit-of-measure-group ul input[type=radio]:hover{border-color:var(--color-blue)}:host #bmi-calculator-form fieldset#unit-of-measure-group ul input[type=radio]:checked{background-color:var(--color-blue-15);border:none;position:relative}:host #bmi-calculator-form fieldset#unit-of-measure-group ul input[type=radio]:checked:after{background-color:var(--color-blue);border-radius:50%;content:"";height:15px;left:calc(50% - 7.5px);position:absolute;top:calc(50% - 7.5px);width:15px}:host #bmi-calculator-form fieldset#imperial-unit,:host #bmi-calculator-form fieldset#metric-unit{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;gap:1rem}:host #bmi-calculator-form fieldset#imperial-unit label,:host #bmi-calculator-form fieldset#imperial-unit legend,:host #bmi-calculator-form fieldset#metric-unit label,:host #bmi-calculator-form fieldset#metric-unit legend{color:var(--color-dark-electric-blue);font-size:.875rem;font-variation-settings:"wght" var(--fw-regular);line-height:1.5}:host #bmi-calculator-form fieldset#imperial-unit .unit-input-wrapper,:host #bmi-calculator-form fieldset#metric-unit .unit-input-wrapper{margin-top:.5rem;position:relative}:host #bmi-calculator-form fieldset#imperial-unit .unit-input-wrapper:after,:host #bmi-calculator-form fieldset#metric-unit .unit-input-wrapper:after{color:var(--color-blue);content:attr(data-unit);font-size:1.5rem;font-variation-settings:"wght" var(--fw-semi-bold);height:36px;letter-spacing:.7px;line-height:1.5;position:absolute;right:1.25rem;top:calc(50% - 18px)}:host #bmi-calculator-form fieldset#imperial-unit input[type=number],:host #bmi-calculator-form fieldset#metric-unit input[type=number]{appearance:none;-webkit-appearance:none;-moz-appearance:textfield;border:1px solid #d8e2e7;border-radius:12px;color:var(--color-gunmetal);font-family:var(--default-font-family);font-size:1.5rem;font-variation-settings:"wght" var(--fw-semi-bold);height:69px;letter-spacing:-.7px;padding:1.25rem 3.5rem 1.25rem 1.25rem;width:100%}:host #bmi-calculator-form fieldset#imperial-unit input[type=number]::-moz-placeholder,:host #bmi-calculator-form fieldset#metric-unit input[type=number]::-moz-placeholder{opacity:.25}:host #bmi-calculator-form fieldset#imperial-unit input[type=number]::placeholder,:host #bmi-calculator-form fieldset#metric-unit input[type=number]::placeholder{opacity:.25}:host #bmi-calculator-form fieldset#imperial-unit input[type=number]:not(:-moz-placeholder-shown),:host #bmi-calculator-form fieldset#metric-unit input[type=number]:not(:-moz-placeholder-shown){border-color:var(--color-dark-electric-blue)}:host #bmi-calculator-form fieldset#imperial-unit input[type=number]:not(:placeholder-shown),:host #bmi-calculator-form fieldset#metric-unit input[type=number]:not(:placeholder-shown){border-color:var(--color-dark-electric-blue)}:host #bmi-calculator-form fieldset#imperial-unit input[type=number]::-webkit-inner-spin-button,:host #bmi-calculator-form fieldset#imperial-unit input[type=number]::-webkit-outer-spin-button,:host #bmi-calculator-form fieldset#metric-unit input[type=number]::-webkit-inner-spin-button,:host #bmi-calculator-form fieldset#metric-unit input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}:host #bmi-calculator-form fieldset#imperial-unit input[type=number]:focus,:host #bmi-calculator-form fieldset#metric-unit input[type=number]:focus{border:none;outline:none;outline:1px solid var(--color-blue)}:host #bmi-calculator-form fieldset#imperial-unit-height,:host #bmi-calculator-form fieldset#imperial-unit-weight{display:-webkit-box;display:-ms-flexbox;display:flex;gap:1rem}@media (min-width:768px){:host #bmi-calculator-form{gap:2rem}:host #bmi-calculator-form fieldset#unit-of-measure-group{margin-top:2rem}:host #bmi-calculator-form fieldset#metric-unit{flex-direction:row;gap:1.5rem}:host #bmi-calculator-form fieldset#imperial-unit{gap:1.5rem}:host #bmi-calculator-form fieldset#imperial-unit-height,:host #bmi-calculator-form fieldset#imperial-unit-weight{gap:1.5rem}}';class f{constructor(){this.UNIT={METRIC:"metric",IMPERIAL:"imperial"},this.CONVERSIONS={FOOT_TO_METER:.3048,INCH_TO_METER:.0254,FOOT_TO_INCH:12,STONE_TO_KG:6.35029318,STONE_TO_POUNDS:14},this.MIN_IDEAL_WEIGHT=18.5,this.MAX_IDEAL_WEIGHT=24.9,this.MIN_OVER_WEIGHT=25,this.MAX_OVER_WEIGHT=29.9,this._unit=this.UNIT.METRIC,this._height={meters:0,feet:0,inches:0},this._weight={kgs:0,stones:0,pounds:0},this._minIdealWeight=0,this._maxIdealWeight=0,this._bmi=0,this._observers=[]}get unit(){return this._unit}set unit(e){this._unit=e}get bmi(){return this._bmi}set bmi(e){const o=e.weight/e.height**2;this._bmi=parseFloat(o.toFixed(2)),this.notify()}get height(){return this._height}set height(e){if(this.unit===this.UNIT.IMPERIAL)this._height.feet=parseFloat(e.feet),this._height.inches=parseFloat(e.inches),this._height.meters=this.getFixedValue(e.feet*this.CONVERSIONS.FOOT_TO_METER+e.inches*this.CONVERSIONS.INCH_TO_METER);else{this._height.meters=e/100;const o=this._height.meters/this.CONVERSIONS.FOOT_TO_METER;this._height.feet=Math.floor(o),this._height.inches=this.getFixedValue((o-this._height.feet)*this.CONVERSIONS.FOOT_TO_INCH)}}get weight(){return this._weight}set weight(e){if(this.unit===this.UNIT.IMPERIAL)this._weight.stones=parseFloat(e.stones),this._weight.pounds=parseFloat(e.pounds),this._weight.kgs=this.getFixedValue((parseFloat(e.stones)+parseFloat(e.pounds)/this.CONVERSIONS.STONE_TO_POUNDS)*this.CONVERSIONS.STONE_TO_KG);else{this._weight.kgs=e;const o=this._weight.kgs/this.CONVERSIONS.STONE_TO_KG;this._weight.stones=Math.floor(o),this._weight.pounds=this.getFixedValue((o-this._weight.stones)*this.CONVERSIONS.STONE_TO_POUNDS)}}getFixedValue(e){return parseFloat(e.toFixed(4))}getMinIdealWeight(){return this.MIN_IDEAL_WEIGHT*Math.pow(this._height.meters,2)}getMaxIdealWeight(){return this.MAX_IDEAL_WEIGHT*Math.pow(this._height.meters,2)}getClassification(){return this.bmi<this.MIN_IDEAL_WEIGHT?"underweight":this.bmi>=this.MIN_IDEAL_WEIGHT&&this.bmi<=this.MAX_IDEAL_WEIGHT?"healthy weight":this.bmi>this.MAX_IDEAL_WEIGHT&&this.bmi<=this.MAX_OVER_WEIGHT?"overweight":"obese"}getWeightInStonesAndPounds(e){const o=e/this.CONVERSIONS.STONE_TO_KG,i=Math.floor(o),s=(o-i)*this.CONVERSIONS.STONE_TO_POUNDS;return{stones:i,pounds:s}}subscribe(e){this._observers.push(e)}notify(){this._observers.forEach(e=>e.update(this._bmi))}}const t=new f;class b extends HTMLElement{constructor(){super()}connectedCallback(){this.shadow=this.attachShadow({mode:"open"}),this.render(),this.handleEvents()}render(){this.shadow.innerHTML=`
      <style>
        ${p}
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
    `}calculateBmi(e){const o=new FormData(e),i=Object.fromEntries(o.entries());for(const s in i)i[s]===""&&(i[s]=0);t.unit===t.UNIT.METRIC?(t.height=parseFloat(i.height),t.weight=parseFloat(i.weight)):t.unit===t.UNIT.IMPERIAL&&(t.height={feet:parseFloat(i.feet),inches:parseFloat(i.inches)},t.weight={stones:parseFloat(i.stones),pounds:parseFloat(i.pounds)}),t.weight.kgs>0&&t.height.meters>0&&(t.bmi={weight:t.weight.kgs,height:t.height.meters})}handleEvents(){const e=this.shadow.getElementById("bmi-calculator-form");e.addEventListener("submit",l=>{l.preventDefault()});const o=this.shadow.getElementById("metric-unit"),i=this.shadow.getElementById("imperial-unit");this.shadow.getElementById("metric").addEventListener("change",l=>{l.currentTarget.checked&&(t.unit=t.UNIT.METRIC,o.classList.remove("hidden"),i.classList.add("hidden"))}),this.shadow.getElementById("imperial").addEventListener("change",l=>{l.currentTarget.checked&&(t.unit=t.UNIT.IMPERIAL,o.classList.add("hidden"),i.classList.remove("hidden"))});const a=this.shadow.getElementById("height"),n=this.shadow.getElementById("weight"),h=this.shadow.getElementById("feet"),c=this.shadow.getElementById("inches"),u=this.shadow.getElementById("stones"),m=this.shadow.getElementById("pounds");a.addEventListener("input",l=>{this.calculateBmi(e),h.value=t.height.feet,c.value=t.height.inches}),n.addEventListener("input",l=>{this.calculateBmi(e),u.value=t.weight.stones,m.value=t.weight.pounds}),h.addEventListener("input",l=>{this.calculateBmi(e),a.value=t.height.meters*100}),c.addEventListener("input",l=>{this.calculateBmi(e),a.value=t.height.meters*100}),u.addEventListener("input",l=>{this.calculateBmi(e),n.value=t.weight.kgs}),m.addEventListener("input",l=>{this.calculateBmi(e),n.value=t.weight.kgs})}}const g='a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{border:0;font-size:100%;font:inherit;margin:0;padding:0;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}:host *,:host :after,:host :before{box-sizing:border-box}:host .visually-hidden{height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;clip:rect(0,0,0,0);border-width:0;white-space:nowrap}:host .hidden{display:none!important}:host #bmi-calculator-info{background-color:var(--color-blue);border-radius:16px;color:var(--color-white);min-height:135px;padding:2rem}:host #bmi-calculator-info #welcome-message{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;gap:1rem}:host #bmi-calculator-info #welcome-message h3{font-size:1.5rem;font-variation-settings:"wght" var(--fw-semi-bold);letter-spacing:-.7px}:host #bmi-calculator-info #welcome-message p{font-size:.875rem;font-variation-settings:"wght" var(--fw-regular);line-height:1.5}:host #bmi-calculator-info #bmi-result{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;gap:1.5rem}:host #bmi-calculator-info #bmi-result #bmi-display{display:-webkit-box;display:-ms-flexbox;display:flex;flex-direction:column;gap:.5rem}:host #bmi-calculator-info #bmi-result #bmi-display #bmi-display-label{font-size:1rem;font-variation-settings:"wght" var(--fw-semi-bold);line-height:1.5}:host #bmi-calculator-info #bmi-result #bmi-display #bmi-display-value{font-size:3rem;font-variation-settings:"wght" var(--fw-semi-bold);letter-spacing:-.7px;line-height:1.1}:host #bmi-calculator-info #bmi-result #bmi-classification{font-size:.875rem;line-height:1.5}:host #bmi-calculator-info #bmi-result #bmi-classification strong{font-variation-settings:"wght" var(--fw-semi-bold)}@media (min-width:768px){:host #bmi-calculator-info{--circle-radius:150px;border-radius:16px 150px 150px 16px;border-radius:16px var(--circle-radius) var(--circle-radius) 16px}:host #bmi-calculator-info #bmi-result{align-items:center;flex-direction:row}:host #bmi-calculator-info #bmi-result #bmi-display{flex:1}:host #bmi-calculator-info #bmi-result #bmi-classification{flex:1}}@media (min-width:1200px){:host #bmi-calculator-info #bmi-result #bmi-display #bmi-display-value{font-size:4rem}}';class y extends HTMLElement{constructor(){super(),t.subscribe(this),this.bmi=t.bmi}connectedCallback(){this.shadow=this.attachShadow({mode:"open"}),this.render()}renderWelcomeMessage(){return`
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
    `}renderBMIResult(){return`
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
    `}renderResultContent(){return`
      <p id="bmi-display" aria-hidden="true">
        <span id="bmi-display-label">Your BMI is...</span>
        <span id="bmi-display-value">${this.bmi.toFixed(2)}</span>
      </p>
      <p id="bmi-classification" aria-hidden="true">
        Your BMI suggests you're a ${t.getClassification()}. Your ideal weight is between <strong id="ideal-weight">${this.getIdealWeight()}</strong>
      </p>
      `}render(){this.shadow.innerHTML=`
      <style>
        ${g}
      </style>
      <section id="bmi-calculator-info" aria-label="BMI Calculator Info" >
        ${this.renderWelcomeMessage()}
        ${this.renderBMIResult()} 
      </section> 
    `}update(e){if(this.bmi=e,this.shadow){const o=this.shadow.querySelector("#welcome-message"),i=this.shadow.querySelector("#bmi-result");if(this.bmi===0)o.classList.remove("hidden"),i.classList.add("hidden");else{o.classList.add("hidden"),i.classList.remove("hidden"),i.innerHTML=this.renderResultContent();const s=this.shadow.querySelector("#bmi-display-sr-only-template");if(!i.querySelector("#bmi-display-sr-only")){const a=s.content.cloneNode(!0);i.appendChild(a)}setTimeout(()=>{const a=this.getIdealWeight(),n=this.shadow.querySelector("#bmi-display-sr-only");n&&(n.textContent=`Your BMI is ${this.bmi.toFixed(2)}. Your BMI suggests you're a ${t.getClassification()}. Your ideal weight is between ${a}`)},1500)}}}getIdealWeight(){const e=t.getMinIdealWeight(),o=t.getMaxIdealWeight();if(t.unit===t.UNIT.METRIC)return`${e.toFixed(2)}kgs - ${o.toFixed(2)}kgs.`;if(t.unit===t.UNIT.IMPERIAL){const i=t.getWeightInStonesAndPounds(e),s=t.getWeightInStonesAndPounds(o);return`${i.stones}st ${i.pounds.toFixed(2)}lbs - ${s.stones}st ${s.pounds.toFixed(2)}lbs`}}}customElements.define("bmi-form",b);customElements.define("bmi-result",y);
