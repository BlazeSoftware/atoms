import { flush, render } from '@stencil/core/testing';
import { Toasts } from './blaze-toasts';
import { Alert } from '../alert/blaze-alert';

describe('Toasts', () => {
  it('should build', () => {
    expect(new Toasts()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      element = await render({
        components: [Toasts, Alert],
        html
      });
      await flush(element);

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'renders correctly with no props',
    `<blaze-toasts position="bottomright">
      <blaze-alert dismissable="false" type="warning">You can not remove this toast</blaze-alert>
      <blaze-alert type="info">This is some information</blaze-alert>
    </blaze-toasts>`
  );
});
