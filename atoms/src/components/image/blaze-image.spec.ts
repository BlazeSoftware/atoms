import { flush, render } from '@stencil/core/testing';
import { Image } from './blaze-image';

describe('Image', () => {
  it('should build', () => {
    expect(new Image()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      element = await render({
        components: [Image],
        html
      });
      await flush(element);

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'renders a standard image with src and alt attributes',
    '<blaze-image src="https://www.blazeui.com/assets/img/blaze.png" alt="blaze logo"></blaze-image>'
  );

  snapIt(
    'falls back to a random placeholder image',
    '<blaze-image></blaze-image>'
  );

  snapIt(
    'falls back to a random placeholder image with a filter',
    '<blaze-image filter="space"></blaze-image>'
  );

  snapIt(
    'width and height',
    '<blaze-image width="1024" height="768"></blaze-image>'
  );

  snapIt(
    'with specific photo id',
    '<blaze-image photo="test-photo-id"></blaze-image>'
  );

  snapIt(
    'with specific photo id and width and height',
    '<blaze-image photo="test-photo-id" width="1024" height="768"></blaze-image>'
  );

  snapIt(
    'from a specific user',
    '<blaze-image user="test-user"></blaze-image>'
  );

  snapIt(
    'from a specific user with width and height',
    '<blaze-image user="test-user" width="1024" height="768"></blaze-image>'
  );

  snapIt(
    'from a specific user with width and height and an additional filter',
    '<blaze-image user="test-user" width="1024" height="768" filter="plane"></blaze-image>'
  );

  snapIt(
    'from the list of a specific user\'s like photos with additional attributes',
    '<blaze-image user="test-user" width="1024" height="768" filter="mountains" likes></blaze-image>'
  );
});
