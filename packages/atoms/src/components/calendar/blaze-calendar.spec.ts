import { TestWindow } from '@stencil/core/testing';
import { Calendar } from './blaze-calendar';

describe('Calendar', () => {
  it('should build', () => {
    expect(new Calendar()).toBeTruthy();
  });

  let element;

  describe('renders', () => {
    const snapIt = (name, html) => {
      it(name, async () => {
        const window = new TestWindow();
        element = await window.load({
          components: [Calendar],
          html
        });
        window.flush();

        expect(element).toMatchSnapshot();
      });
    };

    snapIt('a default calendar', '<blaze-calendar date="1982, January 14"></blaze-calendar>');
    snapIt('a coloured calendar', '<blaze-calendar date="1982, January 14"></blaze-calendar>');
  });

  it('displays the correct date provided', async () => {
    const window = new TestWindow();
    element = await window.load({
      components: [Calendar],
      html: '<blaze-calendar date="1982, January 14"></blaze-calendar>'
    });
    window.flush();

    expect(element.querySelector('.c-calendar__header--year').innerHTML).toEqual('1982');
    expect(element.querySelector('.c-calendar__header--month').innerHTML).toEqual('January');
    expect(element.querySelector('button[aria-selected="true"]').innerHTML).toEqual('14');
  });

  it('changes years', async () => {
    const window = new TestWindow();
    element = await window.load({
      components: [Calendar],
      html: '<blaze-calendar date="1982, January 14"></blaze-calendar>'
    });
    window.flush();

    element.querySelector('.c-calendar__control--prev-year').click();
    window.flush();

    expect(element.querySelector('.c-calendar__header--year').innerHTML).toEqual('1981');

    element.querySelector('.c-calendar__control--next-year').click();
    element.querySelector('.c-calendar__control--next-year').click();
    window.flush();

    expect(element.querySelector('.c-calendar__header--year').innerHTML).toEqual('1983');
  });

  it('changes months', async () => {
    const window = new TestWindow();
    element = await window.load({
      components: [Calendar],
      html: '<blaze-calendar date="1982, January 14"></blaze-calendar>'
    });
    window.flush();

    element.querySelector('.c-calendar__control--prev-month').click();
    window.flush();

    expect(element.querySelector('.c-calendar__header--month').innerHTML).toEqual('December');

    element.querySelector('.c-calendar__control--next-month').click();
    element.querySelector('.c-calendar__control--next-month').click();
    window.flush();

    expect(element.querySelector('.c-calendar__header--month').innerHTML).toEqual('February');
  });

  it('triggers onSelect event', async (done) => {
    const window = new TestWindow();
    element = await window.load({
      components: [Calendar],
      html: '<blaze-calendar date="1982, January 14"></blaze-calendar>'
    });
    window.flush();

    element.addEventListener('onSelect', (e) => {
      try {
        expect(e.detail.toDateString()).toBe(new Date('1982, January 1').toDateString());
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    element.querySelector('button.c-calendar__date.c-calendar__date--in-month').click();
  });

  it('today button changed date', async (done) => {
    const window = new TestWindow();
    element = await window.load({
      components: [Calendar],
      html: '<blaze-calendar date="1982, January 14"></blaze-calendar>'
    });
    window.flush();

    element.addEventListener('onSelect', (e) => {
      try {
        expect(e.detail.toDateString()).toBe(new Date().toDateString());
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    element.querySelector('.c-calendar__today').click();
  });
});
