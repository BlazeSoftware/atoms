import { newE2EPage } from '@stencil/core/dist/testing';

const html = '<blaze-modal open dismissible>default</blaze-modal>';

describe('modal', async () => {
  test('triggers onClose event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const modal = await page.find('blaze-modal');
    const closeButton = await modal.find('.c-button--close');
    const onClose = await modal.spyOnEvent('onClose');

    await closeButton.click();
    await page.waitForChanges();

    expect(onClose).toHaveReceivedEvent();
  });
});
