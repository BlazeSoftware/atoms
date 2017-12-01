import { flush, render } from '@stencil/core/testing';
import { Alert } from './blaze-alert';

describe('Alert', () => {
  it('should build', () => {
    expect(new Alert()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;

    it('should work without parameters', async () => {
      element = await render({
        components: [Alert],
        html: '<blaze-alert>test this!</blaze-alert>'
      });
      await flush(element);

      expect(element).toMatchSnapshot();
    });

    it('should work with type set', async () => {
      element = await render({
        components: [Alert],
        html: '<blaze-alert type="brand">test this!</blaze-alert>'
      });
      await flush(element);

      expect(element).toMatchSnapshot();
    });

    it('renders nothing when closed', async () => {
      element = await render({
        components: [Alert],
        html: '<blaze-alert type="brand">test this!</blaze-alert>'
      });
      await flush(element);

      expect(element).toMatchSnapshot();

      element.close();
      await flush(element);

      expect(element).toMatchSnapshot();
    });

    it('renders everything when opened', async () => {
      element = await render({
        components: [Alert],
        html: '<blaze-alert type="brand">test this!</blaze-alert>'
      });
      await flush(element);

      element.close();
      await flush(element);

      element.open();
      await flush(element);

      expect(element).toMatchSnapshot();
    });
  });
});
