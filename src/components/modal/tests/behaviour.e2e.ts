import { newE2EPage } from '@stencil/core/testing';

const html = '<blaze-modal open dismissible>default</blaze-modal>';

describe('modal', () => {
  test('triggers close event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const modal = await page.find('blaze-modal');
    const closeButton = await modal.find('.c-button--close');
    const close = await modal.spyOnEvent('close');

    await closeButton.click();
    await page.waitForChanges();

    expect(close).toHaveReceivedEvent();
  });
});
