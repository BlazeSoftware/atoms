import { newE2EPage } from '@stencil/core/dist/testing';

const html = `
  <blaze-tabs>
    <blaze-tab header="Tab one">This is tab one</blaze-tab>
    <blaze-tab header="Tab two" open>This is tab two</blaze-tab>
  </blaze-tabs>
`;

describe('tabs', async () => {
  test('triggers onSwitch event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const tabs = await page.find('blaze-tabs');
    const tab = await tabs.find('.c-tab-heading');
    const onSwitch = await tabs.spyOnEvent('onSwitch');

    await tab.click();
    await page.waitForChanges();

    expect(onSwitch).toHaveReceivedEventDetail({
      idx: 0
    });
  });
});
