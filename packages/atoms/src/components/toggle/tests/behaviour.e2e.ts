import { newE2EPage } from '@stencil/core/dist/testing';

const html = '<blaze-toggle>default</blaze-toggle>';

describe('toggle', () => {
  test('triggers change event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const toggle = await page.find('blaze-toggle');
    const label = await toggle.find('label');
    const change = await toggle.spyOnEvent('changed');

    await label.click();
    await page.waitForChanges();

    expect(change).toHaveReceivedEventDetail(true);
  });
});
