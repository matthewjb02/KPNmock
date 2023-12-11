import { LitElement, html, css } from 'lit';

class Header extends LitElement {
    static styles = css`
      header {
        border: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    `;

    static properties = {
        backgroundColor: { type: String } // Define a property for the background color
    };

    constructor() {
        super();
        this.backgroundColor = '#00C300'; // Default background color
    }

    render() {
        return html`
            <header style="background-color: ${this.backgroundColor}">
                <h1><slot></slot></h1>
            </header>
        `;
    }
}

customElements.define('app-header', Header);
