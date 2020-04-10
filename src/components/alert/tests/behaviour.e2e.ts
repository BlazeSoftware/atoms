import { newE2EPage } from '@stencil/core/testing';

const html = '<blaze-alert open dismissible>test this!</blaze-alert>';

describe('alert', () => {
  test('triggers close event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const alert = await page.find('blaze-alert');
    const closeButton = await page.find('button');
    const close = await alert.spyOnEvent('close');

    await closeButton.click();
    await page.waitForChanges();

    expect(close).toHaveReceivedEvent();
  });
});
