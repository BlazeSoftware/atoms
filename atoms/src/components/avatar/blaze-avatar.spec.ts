import { flush, render } from '@stencil/core/testing';
import { Avatar } from './blaze-avatar';

describe('Avatar', () => {
  it('should build', () => {
    expect(new Avatar()).toBeTruthy();
  });

  describe('renders', () => {
    let element;

    it('nothing if no attributes are set', async () => {
      element = await render({
        components: [Avatar],
        html: '<blaze-avatar></blaze-avatar>'
      });
      await flush(element);

      expect(element.innerHTML).toMatchSnapshot();
    });

    it('text inside', async () => {
      element = await render({
        components: [Avatar],
        html: '<blaze-avatar text="GP"></blaze-avatar>'
      });
      await flush(element);

      expect(element.innerHTML).toMatchSnapshot();
    });

    it('correctly sized circles', async () => {
      element = await render({
        components: [Avatar],
        html: '<blaze-avatar size="super" text="GP"></blaze-avatar>'
      });
      await flush(element);

      expect(element.innerHTML).toMatchSnapshot();
    });

    it('images, text and sizes it correctly', async () => {
      element = await render({
        components: [Avatar],
        html: '<blaze-avatar src="my-test-image.png" size="super" text="GP"></blaze-avatar>'
      });
      await flush(element);

      expect(element.innerHTML).toMatchSnapshot();
    });
  });
});
