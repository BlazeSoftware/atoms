import { newE2EPage } from '@stencil/core/testing';

const html = `
  <blaze-tabs>
    <blaze-tab header="Tab one">This is tab one</blaze-tab>
    <blaze-tab header="Tab two" open>This is tab two</blaze-tab>
  </blaze-tabs>
`;

describe('tabs', () => {
  test('triggers change event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const tabs = await page.find('blaze-tabs');
    const tab = await tabs.find('.c-tab-heading');
    const change = await tabs.spyOnEvent('tab');

    await tab.click();
    await page.waitForChanges();

    expect(change).toHaveReceivedEventDetail({
      idx: 0,
    });
  });
});
