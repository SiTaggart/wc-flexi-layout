import { storiesOf, html } from '@open-wc/storybook';

import '../wc-flexi-layout.css';
import '../wc-flexi-layout.js';
import '../wc-flexi-demo-box.js';

storiesOf('Gutters', module)
  .add(
    'x-small',
    () => html`
      <wc-flexi-layout gutters="x-small">
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'small',
    () => html`
      <wc-flexi-layout gutters="small">
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'medium',
    () => html`
      <wc-flexi-layout gutters="medium">
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'large',
    () => html`
      <wc-flexi-layout gutters="large">
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'nested',
    () => html`
      <wc-flexi-layout gutters="small" wrap>
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/2">
          <wc-flexi-layout gutters="x-small">
            <wc-flexi-col size="1/2">
              <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
            </wc-flexi-col>
            <wc-flexi-col size="1/2">
              <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
            </wc-flexi-col>
          </wc-flexi-layout>
        </wc-flexi-col>
        <wc-flexi-col size="1/2">
          <wc-flexi-layout>
            <wc-flexi-col size="1/3">
              <wc-flexi-demo-box>1/3</wc-flexi-demo-box>
            </wc-flexi-col>
            <wc-flexi-col size="1/3">
              <wc-flexi-demo-box>1/3</wc-flexi-demo-box>
            </wc-flexi-col>
            <wc-flexi-col size="1/3">
              <wc-flexi-demo-box>1/3</wc-flexi-demo-box>
            </wc-flexi-col>
          </wc-flexi-layout>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  );
