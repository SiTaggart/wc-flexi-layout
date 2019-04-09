import { storiesOf, html } from '@open-wc/storybook';

import '../wc-flexi-layout.css';
import '../wc-flexi-layout.js';
import '../wc-flexi-demo-box.js';

storiesOf('Direction', module)
  .add(
    'default/row',
    () => html`
      <wc-flexi-layout>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'column',
    () => html`
      <wc-flexi-layout direction="column">
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'row reverse',
    () => html`
      <wc-flexi-layout direction="row-reverse">
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'column reverse',
    () => html`
      <wc-flexi-layout direction="column-reverse">
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  );
