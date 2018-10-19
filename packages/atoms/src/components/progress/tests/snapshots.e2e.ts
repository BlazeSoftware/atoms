import { snapIt } from '../../../test';

const component = 'progress';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('basic progress bar', '<blaze-progress percentage="5">5%</blaze-progress>');
    snap('size correctly', '<blaze-progress size="small" percentage="15">15%</blaze-progress>');
    snap('type correctly', '<blaze-progress size="medium" type="info" percentage="20">20%</blaze-progress>');
    snap(
      'rounded ends correctly',
      '<blaze-progress size="large" type="success" percentage="25" rounded>25%</blaze-progress>'
    );
  });
});
