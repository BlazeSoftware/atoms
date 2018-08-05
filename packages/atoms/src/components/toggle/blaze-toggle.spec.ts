import { TestWindow } from '@stencil/core/dist/testing';
import { Toggle } from './blaze-toggle';

describe('Toggle', () => {
  it('should build', () => {
    expect(new Toggle()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [Toggle],
        html
      });
      window.flush();

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
    const window = new TestWindow();
    element = await window.load({
      components: [Toggle],
      html: '<blaze-toggle>default</blaze-toggle>'
    });
    window.flush();
    expect(element.isToggled()).toEqual(false);

    element.querySelector('label').click();
    expect(element.isToggled()).toEqual(true);
  });

  it('triggers onToggle event', async (done) => {
    const window = new TestWindow();
    element = await window.load({
      components: [Toggle],
      html: '<blaze-toggle>default</blaze-toggle>'
    });
    window.flush();

    element.addEventListener('onToggle', ({ detail }) => {
      try {
        expect(element.isToggled()).toBe(true);
        expect(detail).toBe(true);
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    expect(element.isToggled()).toBe(false);
    element.querySelector('label').click();
  });
});
