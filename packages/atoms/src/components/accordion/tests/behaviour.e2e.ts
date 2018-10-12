import { newE2EPage } from '@stencil/core/dist/testing';

const html = `
<blaze-accordion>
  <blaze-accordion-pane header="Click me">
    This is an accordion
  </blaze-accordion-pane>
</blaze-accordion>
`;

describe('accordion', async () => {
  test('pane opens when clicked on', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    let paneControl = await page.find('button[role=heading]');
    expect(paneControl).not.toHaveClass('c-card__control--active');
    expect(paneControl).toEqualAttribute('aria-expanded', 'false');

    await paneControl.click();
    await page.waitForChanges();

    paneControl = await page.find('button[role=heading]');
    expect(paneControl).toHaveClass('c-card__control--active');
    expect(paneControl).toEqualAttribute('aria-expanded', 'true');
  });

  test('triggers onToggle event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const accordion = await page.find('blaze-accordion');
    const pane = await accordion.find('blaze-accordion-pane');
    const paneControl = await pane.find('button[role=heading]');

    const onToggle = await accordion.spyOnEvent('onToggle');
    const onTogglePane = await pane.spyOnEvent('onTogglePane');

    await paneControl.click();
    await page.waitForChanges();

    expect(onTogglePane).toHaveReceivedEventDetail(true);
    expect(onToggle).toHaveReceivedEventDetail({
      idx: 0,
      open: true,
    });
  });
});
