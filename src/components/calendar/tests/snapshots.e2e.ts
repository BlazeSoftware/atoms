import { snapIt } from '../../../test';

const component = 'calendar';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('a default calendar', '<blaze-calendar date="1982, January 14"></blaze-calendar>');
    snap('a coloured calendar', '<blaze-calendar type="info" date="1982, January 14"></blaze-calendar>');
  });
});
