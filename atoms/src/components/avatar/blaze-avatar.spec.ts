import { flush, render } from '@stencil/core/testing';
import { Avatar } from './blaze-avatar';

describe('Avatar', () => {
  it('should build', () => {
    expect(new Avatar()).toBeTruthy();
  });

  describe('renders', () => {
    let element;

    const snapIt = (name, html) => {
      it(name, async () => {
        element = await render({
          components: [Avatar],
          html
        });
        await flush(element);

        expect(element).toMatchSnapshot();
      });
    };

    snapIt(
      'nothing if no attributes are set',
      '<blaze-avatar></blaze-avatar>'
    );

    snapIt(
      'text inside',
      '<blaze-avatar text="GP"></blaze-avatar>'
    );

    snapIt(
      'correctly sized circles',
      '<blaze-avatar size="super" text="GP"></blaze-avatar>'
    );

    snapIt(
      'an image',
      '<blaze-avatar src="my-test-image.png"></blaze-avatar>'
    );

    snapIt(
      '2 images',
      '<blaze-avatar src="my-test-image.png" src2="my-second-test-image.png"></blaze-avatar>'
    );

    snapIt(
      'images, text and sizes it correctly',
      '<blaze-avatar src="my-test-image.png" src2="my-second-test-image.png" size="super" text="GP"></blaze-avatar>'
    );
  });
});
