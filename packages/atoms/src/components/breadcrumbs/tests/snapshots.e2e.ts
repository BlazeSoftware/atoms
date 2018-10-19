import { snapIt } from '../../../test';

const component = 'breadcrumbs';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('nothing is rendered with no crumbs', '<blaze-breadcrumbs></blaze-breadcrumbs>');
    snap(
      'one crumb',
      `<blaze-breadcrumbs>
      <blaze-breadcrumb>Home</blaze-breadcrumb>
    </blaze-breadcrumbs>`
    );
    snap(
      'two crumbs with a separator',
      `<blaze-breadcrumbs>
      <blaze-breadcrumb>Home</blaze-breadcrumb>
      <blaze-breadcrumb>Sub-section</blaze-breadcrumb>
    </blaze-breadcrumbs>`
    );
    snap(
      'linked crumb',
      `<blaze-breadcrumbs>
      <blaze-breadcrumb href="home.html">Home</blaze-breadcrumb>
      <blaze-breadcrumb href="another-page.html">Another page</blaze-breadcrumb>
      <blaze-breadcrumb>Sub-section</blaze-breadcrumb>
    </blaze-breadcrumbs>`
    );
  });
});
