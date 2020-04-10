import { snapIt } from '../../../test';

const component = 'toggle';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('renders correctly with no props', '<blaze-toggle>default</blaze-toggle>');
    snap('colours based on type', '<blaze-toggle type="success">default</blaze-toggle>');
    snap('should be toggle on when prop is present', '<blaze-toggle toggled type="success">default</blaze-toggle>');
  });
});
