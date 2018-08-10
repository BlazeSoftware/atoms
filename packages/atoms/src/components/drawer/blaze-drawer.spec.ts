import { TestWindow } from '@stencil/core/dist/testing';
import { Drawer } from './blaze-drawer';

describe('Drawer', () => {
  it('should build', () => {
    expect(new Drawer()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [Drawer],
        html
      });
      window.flush();

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'renders correctly with no props',
    '<blaze-drawer>default</blaze-drawer>'
  );

  snapIt(
    'renders as open',
    '<blaze-drawer open>default</blaze-drawer>'
  );

  snapIt(
    'renders dismissible overlay',
    '<blaze-drawer open dismissible>default</blaze-drawer>'
  );

  it('show drawer method', async () => {
    const window = new TestWindow();
      element = await window.load({
      components: [Drawer],
      html: '<blaze-drawer>default</blaze-drawer>'
    });
    window.flush();
    expect(element).toMatchSnapshot();

    element.show();
    window.flush();
    expect(element.isOpen()).toEqual(true);
    expect(element).toMatchSnapshot();
  });

  it('close drawer method', async () => {
    const window = new TestWindow();
      element = await window.load({
      components: [Drawer],
      html: '<blaze-drawer open>default</blaze-drawer>'
    });
    window.flush();
    expect(element).toMatchSnapshot();

    element.close();
    window.flush();
    expect(element.isOpen()).toEqual(false);
    expect(element).toMatchSnapshot();
  });

  it('close by clicking overlay', async () => {
    const window = new TestWindow();
      element = await window.load({
      components: [Drawer],
      html: '<blaze-drawer open dismissible>default</blaze-drawer>'
    });
    window.flush();
    expect(element).toMatchSnapshot();

    element.querySelector('.c-overlay').click();
    window.flush();
    expect(element.isOpen()).toEqual(false);
    expect(element).toMatchSnapshot();
  });

  it('triggers onClose event', async (done) => {
    const window = new TestWindow();
    element = await window.load({
      components: [Drawer],
      html: `<blaze-drawer open dismissible>default</blaze-drawer>`
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
    element.querySelector('.c-overlay').click();
  });
});
