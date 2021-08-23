import { newE2EPage } from '@stencil/core/testing';

const html = '<blaze-tags></blaze-tags>';

describe('tags', () => {
  test('triggers add event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const tags = await page.find('blaze-tags');
    const input = await tags.find('input');
    const add = await tags.spyOnEvent('add');

    await input.press('KeyT');
    await input.press('KeyE');
    await input.press('KeyS');
    await input.press('KeyT');
    await input.press('Enter');
    await page.waitForChanges();

    expect(add).toHaveReceivedEventDetail({ text: 'test' });
  });
});
