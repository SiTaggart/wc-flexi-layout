import { LitElement, html, css } from 'lit-element';

export default class WcFlexiLayout extends LitElement {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: flex;
      }
      :host([wrap]) {
        align-items: flex-start;
        flex-wrap: wrap;
      }
      :host([gutters='x-small']) {
        margin: 0 calc(var(--wc-flexi-layout-gutters-x-small) * -1);
      }
      :host([gutters='x-small']) ::slotted(wc-flexi-col) {
        padding: 0 var(--wc-flexi-layout-gutters-x-small);
      }
      :host([gutters='small']) {
        margin: 0 calc(var(--wc-flexi-layout-gutters-small) * -1);
      }
      :host([gutters='small']) ::slotted(wc-flexi-col) {
        padding: 0 var(--wc-flexi-layout-gutters-small);
      }
      :host([gutters='medium']) {
        margin: 0 calc(var(--wc-flexi-layout-gutters-medium) * -1);
      }
      :host([gutters='medium']) ::slotted(wc-flexi-col) {
        padding: 0 var(--wc-flexi-layout-gutters-medium);
      }
      :host([gutters='large']) {
        margin: 0 calc(var(--wc-flexi-layout-gutters-large) * -1);
      }
      :host([gutters='large']) ::slotted(wc-flexi-col) {
        padding: 0 var(--wc-flexi-layout-gutters-large);
      }
      :host([direction='row']) {
        flex-direction: row;
      }
      :host([direction='column']) {
        flex-direction: column;
      }
      :host([direction='row-reverse']) {
        flex-direction: row-reverse;
      }
      :host([direction='column-reverse']) {
        flex-direction: column-reverse;
      }
      :host([align-x='center']) {
        justify-content: center;
      }
      :host([align-x='spaced']) {
        justify-content: space-around;
      }
      :host([align-x='spread']) {
        justify-content: space-between;
      }
      :host([align-x='start']) {
        justify-content: flex-start;
      }
      :host([align-x='end']) {
        justify-content: flex-end;
      }
      :host([align-y='start']) {
        align-content: flex-start;
        align-items: flex-start;
      }
      :host([align-y='center']) {
        align-content: center;
        align-items: center;
      }
      :host([align-y='end']) {
        align-content: end;
        align-items: flex-end;
      }
    `;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }
}
