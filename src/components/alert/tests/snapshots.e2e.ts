import { snapIt } from '../../../test';

const component = 'alert';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('without parameters', '<blaze-alert>test this!</blaze-alert>');
    snap('correct type', '<blaze-alert type="brand">test this!</blaze-alert>');
  });
});
