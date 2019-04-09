import { storiesOf, html } from '@open-wc/storybook';

import '../wc-flexi-layout.css';
import '../wc-flexi-layout.js';
import '../wc-flexi-demo-box.js';

const TwelveColumns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

storiesOf('Basics', module)
  .add(
    'default',
    () => html`
      <wc-flexi-layout>
        ${TwelveColumns.map(
          i => html`
            <wc-flexi-col>
              <wc-flexi-demo-box>${i}</wc-flexi-demo-box>
            </wc-flexi-col>
          `,
        )}
      </wc-flexi-layout>
    `,
  )
  .add(
    'wrap',
    () => html`
      <wc-flexi-layout wrap>
        ${TwelveColumns.map(
          i => html`
            <wc-flexi-col size="1">
              <wc-flexi-demo-box>${i}</wc-flexi-demo-box>
            </wc-flexi-col>
          `,
        )}
      </wc-flexi-layout>
    `,
  )
  .add(
    'column sizes',
    () => html`
      <wc-flexi-layout wrap>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="3">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="3">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="3">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="3">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="4">
          <wc-flexi-demo-box>4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="4">
          <wc-flexi-demo-box>4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="4">
          <wc-flexi-demo-box>4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="5">
          <wc-flexi-demo-box>5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="5">
          <wc-flexi-demo-box>5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="6">
          <wc-flexi-demo-box>6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="6">
          <wc-flexi-demo-box>6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="7">
          <wc-flexi-demo-box>7</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="5">
          <wc-flexi-demo-box>5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="8">
          <wc-flexi-demo-box>8</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="4">
          <wc-flexi-demo-box>4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="9">
          <wc-flexi-demo-box>9</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="3">
          <wc-flexi-demo-box>3</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="10">
          <wc-flexi-demo-box>10</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2">
          <wc-flexi-demo-box>2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="11">
          <wc-flexi-demo-box>11</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1">
          <wc-flexi-demo-box>1</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="12">
          <wc-flexi-demo-box>12</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="full">
          <wc-flexi-demo-box>full</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>1/3</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>1/3</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>1/3</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2/3">
          <wc-flexi-demo-box>2/3</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/3">
          <wc-flexi-demo-box>1/3</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/4">
          <wc-flexi-demo-box>1/4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/4">
          <wc-flexi-demo-box>1/4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/4">
          <wc-flexi-demo-box>1/4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/4">
          <wc-flexi-demo-box>1/4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2/4">
          <wc-flexi-demo-box>2/4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2/4">
          <wc-flexi-demo-box>2/4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="3/4">
          <wc-flexi-demo-box>3/4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/4">
          <wc-flexi-demo-box>1/4</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/5">
          <wc-flexi-demo-box>1/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/5">
          <wc-flexi-demo-box>1/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/5">
          <wc-flexi-demo-box>1/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/5">
          <wc-flexi-demo-box>1/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/5">
          <wc-flexi-demo-box>1/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2/5">
          <wc-flexi-demo-box>2/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2/5">
          <wc-flexi-demo-box>2/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/5">
          <wc-flexi-demo-box>1/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="3/5">
          <wc-flexi-demo-box>3/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2/5">
          <wc-flexi-demo-box>2/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="4/5">
          <wc-flexi-demo-box>4/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/5">
          <wc-flexi-demo-box>1/5</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/6">
          <wc-flexi-demo-box>1/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/6">
          <wc-flexi-demo-box>1/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/6">
          <wc-flexi-demo-box>1/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/6">
          <wc-flexi-demo-box>1/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/6">
          <wc-flexi-demo-box>1/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/6">
          <wc-flexi-demo-box>1/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2/6">
          <wc-flexi-demo-box>2/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2/6">
          <wc-flexi-demo-box>2/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2/6">
          <wc-flexi-demo-box>2/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="3/6">
          <wc-flexi-demo-box>3/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="3/6">
          <wc-flexi-demo-box>3/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="4/6">
          <wc-flexi-demo-box>4/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="2/6">
          <wc-flexi-demo-box>2/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="5/6">
          <wc-flexi-demo-box>5/6</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/6">
          <wc-flexi-demo-box>1/6</wc-flexi-demo-box>
        </wc-flexi-col>
      </wc-flexi-layout>
    `,
  )
  .add(
    'nested',
    () => html`
      <wc-flexi-layout wrap>
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/2">
          <wc-flexi-demo-box>1/2</wc-flexi-demo-box>
        </wc-flexi-col>
        <wc-flexi-col size="1/2">
          <wc-flexi-layout>
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
