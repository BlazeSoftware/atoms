import { flush, render } from '@stencil/core/testing';
import { Toggle } from './blaze-toggle';

describe('Toggle', () => {
  it('should build', () => {
    expect(new Toggle()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      element = await render({
        components: [Toggle],
        html
      });
      await flush(element);

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'renders correctly with no props',
    '<blaze-toggle>default</blaze-toggle>'
  );

  snapIt(
    'colours based on type',
    '<blaze-toggle type="success">default</blaze-toggle>'
  );

  snapIt(
    'should be toggle on when prop is present',
    '<blaze-toggle toggled type="success">default</blaze-toggle>'
  );

  it('toggles when clicked on', async () => {
    element = await render({
      components: [Toggle],
      html: '<blaze-toggle>default</blaze-toggle>'
    });
    await flush(element);
    expect(element.isToggled()).toEqual(false);

    element.querySelector('label').click();
    expect(element.isToggled()).toEqual(true);
  });
});
