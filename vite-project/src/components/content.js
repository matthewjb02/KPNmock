import { LitElement, html, css } from 'lit';

class Content extends LitElement {
    static styles = css`
      main {
        border-radius: 30px;
        width: 65%;
        height: 80%;
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(1, 1fr);
        background-color: #E2E2E2;
      }

      .input {
        grid-area: 1 / 1 / 3 / 1;
        display: grid;
        grid-template: repeat(3, 1fr) / repeat(1, 1fr);
      }

      .locations {
        display: flex;
        justify-content: space-around;
        align-items: center;
        grid-area: 1 / 1 / 3 / 1;
      }

      .enter {
        grid-area: 3 / 1 / 3 / 1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }

      .locations > * {
        font-size: 17px;
        border-radius: 25px;
        width: 35%;
        padding: 7px;
      }

      .result {
        grid-area: 3 / 1 / 3 / 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .enter > * {
        font-size: 17px;
        border-radius: 25px;
        background-color: #00C300;
        padding: 7px;
        cursor: pointer; /* Voeg cursor pointer toe om aan te geven dat het een klikbare knop is */
      }
    `;

    // Voeg een property toe om de berekende afstand op te slaan
    static properties = {
        calculatedDistance: { type: String },
    };

    // Initialiseer de property
    constructor() {
        super();
        this.calculatedDistance = '';
    }

    // Voeg een event listener toe voor de knop klik
    handleClick() {
        this.calculatedDistance = `Hier komt de berekende afstand in km`;
    }

    render() {
        return html`
            <main>
                <div class="input">
                    <div class="locations">
                        <input type="text" class="start" placeholder="start">
                        <input type="text" class="end" placeholder="end">
                    </div>
                    <div class="enter" @click="${this.handleClick}">
                        <button>Bereken Afstand(km)</button>
                    </div>
                </div>
                <div class="result">
                    <h2>${this.calculatedDistance}</h2>
                </div>
            </main>
        `;
    }
}

customElements.define('app-content', Content);
