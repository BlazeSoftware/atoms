import { newE2EPage } from '@stencil/core/testing';

const html = `
  <blaze-progress>
    <blaze-progress-bar value="30">30</blaze-progress-bar>
  </blaze-progress>
`;

describe('progress', () => {
  test('triggers change event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const progress = await page.find('blaze-progress');
    const progressBar = await progress.find('blaze-progress-bar');
    const change = await progress.spyOnEvent('changed');

    progressBar.setProperty('value', 40);
    await page.waitForChanges();

    expect(change).toHaveReceivedEventDetail({
      value: 40,
      oldValue: 30,
      idx: 0,
    });
  });
});
