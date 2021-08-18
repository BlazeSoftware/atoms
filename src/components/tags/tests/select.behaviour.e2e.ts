import { newE2EPage } from '@stencil/core/testing';

const html = `<blaze-tags placeholder="Select a tag" options='[{ "text": "Test", "value": "test" }, { "text": "Test Two", "value": "test two" }, { "text": "Test Three", "value": "test three" }]'></blaze-tags>`;

describe('tags', () => {
  test('triggers add event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const tags = await page.find('blaze-tags');
    const add = await tags.spyOnEvent('add');

    await page.select('select', 'test two');
    await page.waitForChanges();

    expect(add).toHaveReceivedEventDetail({ text: 'Test Two', value: 'test two' });
  });
});
