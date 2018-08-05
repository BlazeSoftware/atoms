import { TestWindow } from '@stencil/core/dist/testing';
import { Alert } from './blaze-alert';

describe('Alert', () => {
  it('should build', () => {
    expect(new Alert()).toBeTruthy();
  });

  let element;

  it('should work without parameters', async () => {
    const window = new TestWindow();
    element = await window.load({
      components: [Alert],
      html: '<blaze-alert>test this!</blaze-alert>'
    });
    window.flush();

    expect(element).toMatchSnapshot();
  });

  it('should work with type set', async () => {
    const window = new TestWindow();
    element = await window.load({
      components: [Alert],
      html: '<blaze-alert type="brand">test this!</blaze-alert>'
    });
    window.flush();

    expect(element).toMatchSnapshot();
  });

  it('renders nothing when closed', async () => {
    const window = new TestWindow();
    element = await window.load({
      components: [Alert],
      html: '<blaze-alert type="brand">test this!</blaze-alert>'
    });
    window.flush();

    expect(element).toMatchSnapshot();

    element.close();
    window.flush();

    expect(element).toMatchSnapshot();
  });

  it('renders everything when opened', async () => {
    const window = new TestWindow();
    element = await window.load({
      components: [Alert],
      html: '<blaze-alert type="brand">test this!</blaze-alert>'
    });
    window.flush();

    element.close();
    window.flush();

    element.show();
    window.flush();

    expect(element).toMatchSnapshot();
  });

  it('triggers onClose event', async (done) => {
    const window = new TestWindow();
    element = await window.load({
      components: [Alert],
      html: '<blaze-alert open dismissible>test this!</blaze-alert>'
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
    element.querySelector('button').click();
  });
});
