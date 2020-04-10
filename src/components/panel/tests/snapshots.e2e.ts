import { snapIt } from '../../../test';

const component = 'panel';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('correctly with no props', '<blaze-panel>default</blaze-panel>');
    snap('correctly with height set', '<blaze-panel height="350">default</blaze-panel>');
  });
});
