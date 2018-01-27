import { flush, render } from '@stencil/core/testing';
import { Modal } from './blaze-modal';

describe('Modal', () => {
  it('should build', () => {
    expect(new Modal()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      element = await render({
        components: [Modal],
        html
      });
      await flush(element);

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'renders correctly with no props',
    '<blaze-modal>default</blaze-modal>'
  );
});
