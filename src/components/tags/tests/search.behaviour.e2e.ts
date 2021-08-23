import { newE2EPage } from '@stencil/core/testing';

const html = '<blaze-tags autocomplete></blaze-tags>';

describe('tags', () => {
  let page, tags, input;
  const options = [
    {
      text: 'item 1',
      value: 'item 1',
    },
    {
      text: 'item 2',
      value: 'item 2',
    },
    {
      text: 'item 3',
      value: 'item 3',
    },
    {
      text: 'item 4',
      value: 'item 4',
    },
    {
      text: 'item 5',
      value: 'item 5',
    },
  ];

  beforeEach(async () => {
    page = await newE2EPage();
    await page.setContent(html);

    tags = await page.find('blaze-tags');
    input = await page.find('input');

    await tags.callMethod('setOptions', options);
    await input.click();
  });

  test('triggers filter event when typing', async () => {
    const filter = await tags.spyOnEvent('filter');
    await input.type('some text');

    expect(filter).toHaveReceivedEventDetail('some text');
  });

  describe('menu', () => {
    test('opens on click', async () => {
      const resultsList = await page.findAll('.c-card__control');

      expect(resultsList.length).toBe(options.length);
    });

    test('closes on escape', async () => {
      await input.press('Escape');
      const resultsList = await page.findAll('.c-card--menu');

      expect(resultsList.length).toBe(0);
    });

    test('cycles through active items', async () => {
      for (let i = 1; i <= options.length; i++) {
        await input.press('ArrowDown');
        const item = await page.find(`.c-card__control:nth-child(${i})`);

        expect(item).toHaveClass('c-card__control--active');
      }
    });

    test('triggers add on item click', async () => {
      const select = await tags.spyOnEvent('add');
      const item = await page.find(`.c-card__control:nth-child(3)`);

      await item.click();

      expect(select).toHaveReceivedEventDetail(options[2]);
    });

    test('triggers select on enter', async () => {
      const select = await tags.spyOnEvent('add');
      await input.press('ArrowDown');
      await input.press('Enter');

      expect(select).toHaveReceivedEventDetail(options[0]);
    });
  });
});
