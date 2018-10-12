import { newE2EPage } from '@stencil/core/dist/testing';

const html = `
  <blaze-progress>
    <blaze-progress-bar value="30">30</blaze-progress-bar>
  </blaze-progress>
`;

describe('progress', async () => {
  test('triggers onChange event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const progress = await page.find('blaze-progress');
    const progressBar = await progress.find('blaze-progress-bar');
    const onChange = await progress.spyOnEvent('onChange');

    progressBar.setProperty('value', 40);
    await page.waitForChanges();

    expect(onChange).toHaveReceivedEventDetail({
      value: 40,
      oldValue: 30,
      idx: 0,
    });
  });
});
