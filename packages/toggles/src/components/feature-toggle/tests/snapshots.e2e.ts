import { snapIt } from '../../../test';

const component = 'feature-toggle';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('nothing', '<feature-toggle>Hello, world</feature-toggle>');
  });
});
