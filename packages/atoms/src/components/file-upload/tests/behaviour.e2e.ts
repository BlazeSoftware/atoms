import { newE2EPage } from '@stencil/core/dist/testing';

describe.skip('file-upload', () => {
  test('triggers no events on load', async () => {
    const page = await newE2EPage();
    await page.setContent('<blaze-file-upload drop url="/test"></blaze-file-upload>');

    const component = await page.find('blaze-file-upload');
    const spyUploadingEvent = await component.spyOnEvent('uploading');
    const spyCompletedEvent = await component.spyOnEvent('completed');

    expect(spyUploadingEvent).not.toHaveReceivedEvent();
    expect(spyCompletedEvent).not.toHaveReceivedEvent();
  });

  test('uploading event is emitted on change', async () => {
    const page = await newE2EPage();
    await page.setContent('<blaze-file-upload></blaze-file-upload>');

    const component = await page.find('blaze-file-upload');
    const fileInput = await component.find('input[type=file]');
    const spyUploadingEvent = await component.spyOnEvent('uploading');

    fileInput.triggerEvent('change');

    expect(spyUploadingEvent).toHaveReceivedEvent();
  });
});
