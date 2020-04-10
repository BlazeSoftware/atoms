import { newE2EPage } from '@stencil/core/testing';

const html = '<blaze-calendar date="1982, January 14"></blaze-calendar>';

describe('calendar', () => {
  test('triggers select event', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const calendar = await page.find('blaze-calendar');
    const control = await calendar.find('.c-calendar__today');
    const select = await calendar.spyOnEvent('selected');

    await control.click();
    await page.waitForChanges();

    expect(select).toHaveReceivedEventDetail(new Date().toDateString());
  });

  test('previous year button', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const calendar = await page.find('blaze-calendar');
    const control = await calendar.find('.c-calendar__control--prev-year');

    await control.click();
    await page.waitForChanges();

    const value = await calendar.find('.c-calendar__header--year');
    expect(value.innerText).toEqual('1981');
  });

  test('next year button', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const calendar = await page.find('blaze-calendar');
    const control = await calendar.find('.c-calendar__control--next-year');

    await control.click();
    await page.waitForChanges();

    const value = await calendar.find('.c-calendar__header--year');
    expect(value.innerText).toEqual('1983');
  });

  test('prev month button', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const calendar = await page.find('blaze-calendar');
    const control = await calendar.find('.c-calendar__control--prev-month');

    await control.click();
    await page.waitForChanges();

    const value = await calendar.find('.c-calendar__header--month');
    expect(value.innerText).toEqual('December');
  });

  test('next month button', async () => {
    const page = await newE2EPage();
    await page.setContent(html);

    const calendar = await page.find('blaze-calendar');
    const control = await calendar.find('.c-calendar__control--next-month');

    await control.click();
    await page.waitForChanges();

    const value = await calendar.find('.c-calendar__header--month');
    expect(value.innerText).toEqual('February');
  });
});
