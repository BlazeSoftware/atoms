import { TestWindow } from '@stencil/core/testing';
import { Demo } from './blaze-demo';

describe('Demo', () => {
  it('should build', () => {
    expect(new Demo()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      const window = new TestWindow();
      element = await window.load({
        components: [Demo],
        html
      });
      window.flush();

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'renders correctly with no props',
    '<blaze-demo></blaze-demo>'
  );

  snapIt(
    'renders a badge component and a code area',
    `<blaze-demo language="html" code='<blaze-badge type="success">YO!</blaze-badge>'></blaze-demo>`
  )
});
