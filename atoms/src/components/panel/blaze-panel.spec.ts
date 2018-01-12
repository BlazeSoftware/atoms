import { flush, render } from '@stencil/core/testing';
import { Panel } from './blaze-panel';

describe('Panel', () => {
  it('should build', () => {
    expect(new Panel()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      element = await render({
        components: [Panel],
        html
      });
      await flush(element);

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
