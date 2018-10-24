import { snapIt } from '../../../test';

const component = 'divider';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('correctly', '<blaze-divider></blaze-divider>');
    snap('content', '<blaze-divider>Hello, world</blaze-divider>');
  });
});
