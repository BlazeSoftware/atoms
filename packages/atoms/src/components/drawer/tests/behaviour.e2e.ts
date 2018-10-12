import { newE2EPage } from '@stencil/core/dist/testing';

const html = '<blaze-drawer open dismissible>default</blaze-drawer>';

describe('drawer', async () => {
  test.skip('triggers onClose event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const drawer = await page.find('blaze-drawer');
    const overlay = await drawer.find('.c-overlay');
    const onClose = await drawer.spyOnEvent('onClose');

    await overlay.click();
    await page.waitForChanges();

    expect(onClose).toHaveReceivedEvent();
  });
});
