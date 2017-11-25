import { flush, render } from '@stencil/core/testing';
import { Alert } from './blaze-alert';

describe('blaze-alert', () => {
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

      expect(element.textContent.trim()).toContain('test this!');
    });

    it('should work with type set', async () => {
      element = await render({
        components: [Alert],
        html: '<blaze-alert type="brand">test this!</blaze-alert>'
      });
      await flush(element);

      expect(element.textContent.trim()).toContain('test this!');
      expect(element.querySelector('.c-alert--brand')).toBeTruthy();
    });

    it('renders nothing when closed', async () => {
      element = await render({
        components: [Alert],
        html: '<blaze-alert type="brand">test this!</blaze-alert>'
      });
      await flush(element);

      expect(element.textContent.trim()).toContain('test this!');
      expect(element.querySelector('.c-alert--brand')).toBeTruthy();

      element.close();
      await flush(element);

      expect(element.children.length).toEqual(0);
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

      expect(element.textContent.trim()).toContain('test this!');
      expect(element.querySelector('.c-alert--brand')).toBeTruthy();
    });
  });
});
