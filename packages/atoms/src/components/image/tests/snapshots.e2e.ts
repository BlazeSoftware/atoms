import { snapIt } from '../../../test';

const component = 'image';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap(
      'a standard image with src and alt attributes',
      '<blaze-image src="https://www.blazeui.com/assets/img/blaze.png" alt="blaze logo"></blaze-image>'
    );
    snap('fall back to a random placeholder image', '<blaze-image></blaze-image>');
    snap('fall back to a random placeholder image with a filter', '<blaze-image filter="space"></blaze-image>');
    snap('width and height', '<blaze-image width="1024" height="768"></blaze-image>');
    snap('with specific photo id', '<blaze-image photo="test-photo-id"></blaze-image>');
    snap(
      'specific photo id and width and height',
      '<blaze-image photo="test-photo-id" width="1024" height="768"></blaze-image>'
    );
    snap('specific user', '<blaze-image user="test-user"></blaze-image>');
    snap(
      'specific user with width and height',
      '<blaze-image user="test-user" width="1024" height="768"></blaze-image>'
    );
    snap(
      'specific user with width and height and an additional filter',
      '<blaze-image user="test-user" width="1024" height="768" filter="plane"></blaze-image>'
    );
    snap(
      "from the list of a specific user's like photos with additional attributes",
      '<blaze-image user="test-user" width="1024" height="768" filter="mountains" likes></blaze-image>'
    );
  });
});
