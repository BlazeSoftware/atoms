import { newE2EPage } from '@stencil/core/dist/testing';

const html = '<blaze-autocomplete></blaze-autocomplete>';

describe('autocomplete', () => {
  let page, autocomplete, input;
  const items = [
    {
      text: 'item 1',
    },
    {
      text: 'item 2',
    },
    {
      text: 'item 3',
    },
    {
      text: 'item 4',
    },
    {
      text: 'item 5',
    },
  ];

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(html);

    autocomplete = await page.find('blaze-autocomplete');
    input = await page.find('input');

    await autocomplete.callMethod('setItems', items);
    await input.click();
  });

  test('triggers search event when typing', async () => {
    const search = await autocomplete.spyOnEvent('search');

    await input.type('some text');

    expect(search).toHaveReceivedEventDetail('some text');
  });

  describe('menu', () => {
    test('opens on click', async () => {
      const resultsList = await page.findAll('.c-card__control');

      expect(resultsList.length).toBe(items.length);
    });

    test('closes on escape', async () => {
      await input.press('Escape');
      const resultsList = await page.findAll('.c-card--menu');

      expect(resultsList.length).toBe(0);
    });

    test('cycles through active items', async () => {
      for (let i = 1; i <= items.length; i++) {
        await input.press('ArrowDown');
        const item = await page.find(`.c-card__control:nth-child(${i})`);

        expect(item).toHaveClass('c-card__control--active');
      }
    });

    test('triggers select on item click', async () => {
      const select = await autocomplete.spyOnEvent('selected');
      const item = await page.find(`.c-card__control:nth-child(3)`);

      await item.click();

      expect(select).toHaveReceivedEventDetail(items[2]);
    });

    test('triggers select on enter', async () => {
      const select = await autocomplete.spyOnEvent('selected');
      await input.press('ArrowDown');
      await input.press('Enter');

      expect(select).toHaveReceivedEventDetail(items[0]);
    });
  });
});
