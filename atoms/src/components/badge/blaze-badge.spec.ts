import { flush, render } from '@stencil/core/testing';
import { Badge } from './blaze-badge';

describe('Badge', () => {
  it('should build', () => {
    expect(new Badge()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      element = await render({
        components: [Badge],
        html
      });
      await flush(element);

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'renders correctly with no props',
    '<blaze-badge>default</blaze-badge>'
  );

  snapIt(
    'appends the color modifier class',
    '<blaze-badge type="brand">brand</blaze-badge>'
  );

  snapIt(
    'handles boolean rounded attribute',
    '<blaze-badge rounded>default</blaze-badge>'
  );

  snapIt(
    'handles both boolean rounded attribute and type',
    '<blaze-badge rounded type="brand">brand</blaze-badge>'
  );

  snapIt(
    'handles boolean ghost and boolean rounded',
    '<blaze-badge ghost rounded>default</blaze-badge>'
  );

  snapIt(
    'supports all the modifiers',
    '<blaze-badge ghost rounded type="brand">brand</blaze-badge>'
  );
});
