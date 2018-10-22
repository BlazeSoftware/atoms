import { newE2EPage } from '@stencil/core/dist/testing';

const html = '<blaze-drawer open dismissible>default</blaze-drawer>';

describe('drawer', async () => {
  test.skip('triggers close event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const drawer = await page.find('blaze-drawer');
    const overlay = await drawer.find('.c-overlay');
    const close = await drawer.spyOnEvent('close');

    await overlay.click();
    await page.waitForChanges();

    expect(close).toHaveReceivedEvent();
  });
});
