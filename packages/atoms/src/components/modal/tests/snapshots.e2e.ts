import { snapIt } from '../../../test';

const component = 'modal';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('renders correctly with no props', '<blaze-modal>default</blaze-modal>');
    snap('renders as open', '<blaze-modal open>default</blaze-modal>');
    snap('renders dismissible button and overlay', '<blaze-modal open dismissible>default</blaze-modal>');
  });
});
