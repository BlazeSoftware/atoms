import { TestWindow } from '@stencil/core/testing';
import { Modal } from './blaze-modal';

describe('Modal', () => {
  it('should build', () => {
    expect(new Modal()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [Modal],
        html
      });
      window.flush();

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
    const window = new TestWindow();
      element = await window.load({
      components: [Modal],
      html: '<blaze-modal>default</blaze-modal>'
    });
    window.flush();
    expect(element).toMatchSnapshot();

    element.show();
    window.flush();
    expect(element.isOpen()).toEqual(true);
    expect(element).toMatchSnapshot();
  });

  it('close modal method', async () => {
    const window = new TestWindow();
      element = await window.load({
      components: [Modal],
      html: '<blaze-modal open>default</blaze-modal>'
    });
    window.flush();
    expect(element).toMatchSnapshot();

    element.close();
    window.flush();
    expect(element.isOpen()).toEqual(false);
    expect(element).toMatchSnapshot();
  });

  it('close button', async () => {
    const window = new TestWindow();
      element = await window.load({
      components: [Modal],
      html: '<blaze-modal open dismissible>default</blaze-modal>'
    });
    window.flush();
    expect(element).toMatchSnapshot();

    element.querySelector('.c-button--close').click();
    window.flush();
    expect(element.isOpen()).toEqual(false);
    expect(element).toMatchSnapshot();
  });

  it('close by clicking overlay', async () => {
    const window = new TestWindow();
      element = await window.load({
      components: [Modal],
      html: '<blaze-modal open dismissible>default</blaze-modal>'
    });
    window.flush();
    expect(element).toMatchSnapshot();

    element.querySelector('blaze-overlay').click();
    window.flush();
    expect(element.isOpen()).toEqual(false);
    expect(element).toMatchSnapshot();
  });

  it('triggers onClose event', async (done) => {
    const window = new TestWindow();
    element = await window.load({
      components: [Modal],
      html: `<blaze-modal open dismissible>default</blaze-modal>`
    });
    window.flush();

    element.addEventListener('onClose', () => {
      try {
        expect(element.isOpen()).toBe(false);
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    expect(element.isOpen()).toBe(true);
    element.querySelector('blaze-overlay').click();
  });
});
