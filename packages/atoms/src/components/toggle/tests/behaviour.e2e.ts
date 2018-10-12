import { newE2EPage } from '@stencil/core/dist/testing';

const html = '<blaze-toggle>default</blaze-toggle>';

describe('toggle', async () => {
  test('triggers onToggle event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const toggle = await page.find('blaze-toggle');
    const label = await toggle.find('label');
    const onToggle = await toggle.spyOnEvent('onToggle');

    await label.click();
    await page.waitForChanges();

    expect(onToggle).toHaveReceivedEventDetail(true);
  });
});
