import { flush, render } from '@stencil/core/testing';
import { Drawer } from './blaze-drawer';

describe('Drawer', () => {
  it('should build', () => {
    expect(new Drawer()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      element = await render({
        components: [Drawer],
        html
      });
      await flush(element);

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
    element = await render({
      components: [Drawer],
      html: '<blaze-drawer>default</blaze-drawer>'
    });
    await flush(element);
    expect(element).toMatchSnapshot();

    element.show();
    await flush(element);
    expect(element.isOpen()).toEqual(true);
    expect(element).toMatchSnapshot();
  });

  it('close drawer method', async () => {
    element = await render({
      components: [Drawer],
      html: '<blaze-drawer open>default</blaze-drawer>'
    });
    await flush(element);
    expect(element).toMatchSnapshot();

    element.close();
    await flush(element);
    expect(element.isOpen()).toEqual(false);
    expect(element).toMatchSnapshot();
  });

  it('close by clicking overlay', async () => {
    element = await render({
      components: [Drawer],
      html: '<blaze-drawer open dismissible>default</blaze-drawer>'
    });
    await flush(element);
    expect(element).toMatchSnapshot();

    element.querySelector('.c-overlay--visible').click();
    await flush(element);
    expect(element.isOpen()).toEqual(false);
    expect(element).toMatchSnapshot();
  });
});
