import { snapIt } from '../../../test';

const component = 'demo';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('renders correctly with no props', '<blaze-demo></blaze-demo>');
    snap(
      'renders a badge component and a code area',
      `<blaze-demo language="language-html" code='<blaze-badge type="success">YO!</blaze-badge>'></blaze-demo>`
    );
  });
});
