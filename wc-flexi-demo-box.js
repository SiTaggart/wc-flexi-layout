import { LitElement, html, css } from 'lit-element';

export default class WcFlexiDemoBox extends LitElement {
  static get styles() {
    return css`
      :host {
        background: #ddd;
        box-shadow: 0 0 0 1px #fff;
        box-sizing: border-box;
        display: flex;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
          Cantarell, 'Helvetica Neue', sans-serif;
        font-size: 2rem;
        height: 100%;
        min-height: 50px;
        text-align: center;
        width: 100%;
      }

      span {
        align-self: center;
        padding: 1rem 2rem;
        margin: auto;
      }
    `;
  }

  render() {
    return html`
      <span>
        <slot></slot>
      </span>
    `;
  }
}

window.customElements.define('wc-flexi-demo-box', WcFlexiDemoBox);
