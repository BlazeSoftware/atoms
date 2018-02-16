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

  snapIt('should work without parameters', '<blaze-pagination></blaze-pagination>');
  snapIt('renders the correct buttons when pages set', '<blaze-pagination pages="15"></blaze-pagination>');
});
