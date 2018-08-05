import { TestWindow } from '@stencil/core/dist/testing';
import { Pagination } from './blaze-pagination';

describe('Pagination', () => {
  it('should build', () => {
    expect(new Pagination()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [Pagination],
        html
      });
      window.flush();

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
    const window = new TestWindow();
      element = await window.load({
      components: [Pagination],
      html: '<blaze-pagination pages="15"></blaze-pagination>'
    });
    window.flush();
    expect(element).toMatchSnapshot();

    element.goToPage(4);
    window.flush();

    expect(element).toMatchSnapshot();
  });

  it('emits a page changed event', async () => {
    const window = new TestWindow();
      element = await window.load({
      components: [Pagination],
      html: '<blaze-pagination pages="15"></blaze-pagination>'
    });
    window.flush();

    element.addEventListener('onPageChange', (e) => {
      expect(e.detail).toEqual(4);
    });
    element.goToPage(4);
  });

});
