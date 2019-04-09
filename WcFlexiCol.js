import { LitElement, html, css } from 'lit-element';

export default class WcFlexiCol extends LitElement {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        flex: 1 1 auto;
      }
      :host([size]) {
        flex: none;
      }
      :host([size='1']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 1);
      }
      :host([size='2']),
      :host([size='1/6']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 2);
      }
      :host([size='3']),
      :host([size='1/4']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 3);
      }
      :host([size='4']),
      :host([size='1/3']),
      :host([size='2/6']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 4);
      }
      :host([size='5']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 5);
      }
      :host([size='6']),
      :host([size='1/2']),
      :host([size='2/4']),
      :host([size='3/6']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 6);
      }
      :host([size='7']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 7);
      }
      :host([size='8']),
      :host([size='2/3']),
      :host([size='4/6']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 8);
      }
      :host([size='9']),
      :host([size='3/4']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 9);
      }
      :host([size='10']),
      :host([size='5/6']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 10);
      }
      :host([size='11']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 11);
      }
      :host([size='12']),
      :host([size='full']) {
        width: calc(100% / var(--wc-flexi-layout-columns) * 12);
      }
      :host([size='1/5']) {
        width: calc(100% / 5 * 1);
      }
      :host([size='2/5']) {
        width: calc(100% / 5 * 2);
      }
      :host([size='3/5']) {
        width: calc(100% / 5 * 3);
      }
      :host([size='4/5']) {
        width: calc(100% / 5 * 4);
      }
      :host([grow='none']) {
        flex-grow: 0;
      }
      :host([align='start']) {
        align-self: flex-start;
      }
      :host([align='center']) {
        align-self: center;
      }
      :host([align='end']) {
        align-self: flex-end;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
