import { snapIt } from '../../../test';

const component = 'pagination';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('should work without parameters', '<blaze-pagination></blaze-pagination>');
    snap('renders the correct buttons when pages set', '<blaze-pagination pages="15"></blaze-pagination>');
  });
});
