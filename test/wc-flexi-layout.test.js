import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';

import '../wc-flexi-layout';

describe('<wc-flexi-layout>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<wc-flexi-layout></wc-flexi-layout>');
    expect(el.header).to.equal('My Example');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <wc-flexi-layout .header=${'different'}></wc-flexi-layout>
    `);
    expect(el.header).to.equal('different');
  });
});
