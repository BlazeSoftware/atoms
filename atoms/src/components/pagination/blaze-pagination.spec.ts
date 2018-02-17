import { flush, render } from '@stencil/core/testing';
import { Pagination } from './blaze-pagination';

describe('Pagination', () => {
  it('should build', () => {
    expect(new Pagination()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      element = await render({
        components: [Pagination],
        html
      });
      await flush(element);

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'should work without parameters',
    '<blaze-pagination></blaze-pagination>'
  );

  snapIt(
    'renders the correct buttons when pages set',
    '<blaze-pagination pages="15"></blaze-pagination>'
  );

  it('has a go to page function', async () => {
    element = await render({
      components: [Pagination],
      html: '<blaze-pagination pages="15"></blaze-pagination>'
    });
    await flush(element);
    expect(element).toMatchSnapshot();

    element.goToPage(4);
    await flush(element);

    expect(element).toMatchSnapshot();
  });

  it('emits a page changed event', async () => {
    element = await render({
      components: [Pagination],
      html: '<blaze-pagination pages="15"></blaze-pagination>'
    });
    await flush(element);

    element.addEventListener('onPageChange', (e) => {
      expect(e.detail).toEqual(4);
    });
    element.goToPage(4);
  });

});
