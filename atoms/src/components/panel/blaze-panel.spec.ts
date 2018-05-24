import { TestWindow } from '@stencil/core/testing';
import { Panel } from './blaze-panel';

describe('Panel', () => {
  it('should build', () => {
    expect(new Panel()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [Panel],
        html
      });
      window.flush();

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'renders correctly with no props',
    '<blaze-panel>default</blaze-panel>'
  );

  snapIt(
    'renders correctly with height set',
    '<blaze-panel height="350">default</blaze-panel>'
  );
});
