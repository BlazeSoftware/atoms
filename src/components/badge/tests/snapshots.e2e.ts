import { snapIt } from '../../../test';

const component = 'badge';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('renders correctly with no props', '<blaze-badge>default</blaze-badge>');
    snap('appends the color modifier class', '<blaze-badge type="brand">brand</blaze-badge>');
    snap('handles boolean rounded attribute', '<blaze-badge rounded>default</blaze-badge>');
    snap('handles both boolean rounded attribute and type', '<blaze-badge rounded type="brand">brand</blaze-badge>');
    snap('handles boolean ghost and boolean rounded', '<blaze-badge ghost rounded>default</blaze-badge>');
    snap('supports all the modifiers', '<blaze-badge ghost rounded type="brand">brand</blaze-badge>');
  });
});
