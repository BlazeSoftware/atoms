import { newE2EPage } from '@stencil/core/testing';

describe('file-upload', () => {
  test('triggers no events on load', async () => {
    const page = await newE2EPage();
    await page.setContent('<blaze-file-upload drop url="/test"></blaze-file-upload>');

    const component = await page.find('blaze-file-upload');
    const spyUploadingEvent = await component.spyOnEvent('uploading');
    const spyCompletedEvent = await component.spyOnEvent('uploaded');

    expect(spyUploadingEvent).not.toHaveReceivedEvent();
    expect(spyCompletedEvent).not.toHaveReceivedEvent();
  });

  // todo: test change event is handled...
});
