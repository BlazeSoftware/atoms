import { snapIt } from '../../../test';

const component = 'avatar';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('nothing if no attributes are set', '<blaze-avatar></blaze-avatar>');
    snap('text inside', '<blaze-avatar text="GP"></blaze-avatar>');
    snap('correctly sized circles', '<blaze-avatar size="super" text="GP"></blaze-avatar>');
    snap('an image', '<blaze-avatar src="my-test-image.png"></blaze-avatar>');
    snap('2 images', '<blaze-avatar src="my-test-image.png" src2="my-second-test-image.png"></blaze-avatar>');
    snap(
      'images, text and sizes it correctly',
      '<blaze-avatar src="my-test-image.png" src2="my-second-test-image.png" size="super" text="GP"></blaze-avatar>'
    );
  });
});
