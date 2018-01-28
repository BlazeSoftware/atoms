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

  snapIt(
    'renders as open',
    '<blaze-modal open>default</blaze-modal>'
  );

  snapIt(
    'renders dismissible button and overlay',
    '<blaze-modal open dismissible>default</blaze-modal>'
  );

  it('show modal method', async () => {
    element = await render({
      components: [Modal],
      html: '<blaze-modal>default</blaze-modal>'
    });
    await flush(element);
    expect(element).toMatchSnapshot();

    element.show();
    await flush(element);
    expect(element.isOpen()).toEqual(true);
    expect(element).toMatchSnapshot();
  });

  it('close modal method', async () => {
    element = await render({
      components: [Modal],
      html: '<blaze-modal open>default</blaze-modal>'
    });
    await flush(element);
    expect(element).toMatchSnapshot();

    element.close();
    await flush(element);
    expect(element.isOpen()).toEqual(false);
    expect(element).toMatchSnapshot();
  });

  it('close button', async () => {
    element = await render({
      components: [Modal],
      html: '<blaze-modal open dismissible>default</blaze-modal>'
    });
    await flush(element);
    expect(element).toMatchSnapshot();

    element.querySelector('.c-button--close').click();
    await flush(element);
    expect(element.isOpen()).toEqual(false);
    expect(element).toMatchSnapshot();
  });

  it('close by clicking overlay', async () => {
    element = await render({
      components: [Modal],
      html: '<blaze-modal open dismissible>default</blaze-modal>'
    });
    await flush(element);
    expect(element).toMatchSnapshot();

    element.querySelector('.c-overlay--visible').click();
    await flush(element);
    expect(element.isOpen()).toEqual(false);
    expect(element).toMatchSnapshot();
  });
});
