import { snapIt } from '../../../test';

const component = 'drawer';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('renders correctly with no props', '<blaze-drawer>default</blaze-drawer>');
    snap('renders as open', '<blaze-drawer open>default</blaze-drawer>');
    snap('renders dismissible overlay', '<blaze-drawer open dismissible>default</blaze-drawer>');
  });
});
