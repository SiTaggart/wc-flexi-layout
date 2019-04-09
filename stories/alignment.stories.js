import { storiesOf, html } from '@open-wc/storybook';

import '../wc-flexi-layout.css';
import '../wc-flexi-layout.js';
import '../wc-flexi-demo-box.js';

storiesOf('Alignment', module)
  .add(
    'default / horiontal start',
    () => html`
      <wc-flexi-layout align-x="start">
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'horizontal center',
    () => html`
      <wc-flexi-layout align-x="center">
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'horizontal center, fixed and fluid columns',
    () => html`
      <wc-flexi-layout align-x="center">
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col grow="none">
          <wc-flexi-demo-box>Fluid column</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'horizontal spaced',
    () => html`
      <wc-flexi-layout align-x="spaced">
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'horizontal spread',
    () => html`
      <wc-flexi-layout align-x="spread">
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'horizontal end',
    () => html`
      <wc-flexi-layout align-x="end">
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'vertical start',
    () => html`
      <wc-flexi-layout align-y="start" style="height:300px">
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'vertical center',
    () => html`
      <wc-flexi-layout align-y="center" style="height:300px">
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'vertical end',
    () => html`
      <wc-flexi-layout align-y="end" style="height:300px">
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'absolute middle',
    () => html`
      <wc-flexi-layout align-x="center" align-y="center" style="height:300px">
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'column alignment',
    () => html`
      <wc-flexi-layout style="height:300px">
        <wc-flexi-col align="start" size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col align="center" size="1">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col align="end" size="1">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  );
