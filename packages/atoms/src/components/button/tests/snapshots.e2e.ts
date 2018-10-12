import snapIt from '../../../test/snap-it';

const component = 'button';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('a default button', `<blaze-button>Action</blaze-button>`);
    snap('an a button', `<blaze-button href="nowhere.com" value="Action"></blaze-button>`);
    snap('a colored button', `<blaze-button type="info">Action</blaze-button>`);
    snap('a sized button', `<blaze-button size="small">Action</blaze-button>`);
    snap('a full-width button', `<blaze-button full>Action</blaze-button>`);
    snap('a ghost button', `<blaze-button ghost>Action</blaze-button>`);
    snap('a colored ghost button', `<blaze-button ghost type="info">Action</blaze-button>`);
    snap('a rounded button', `<blaze-button rounded>Action</blaze-button>`);
    snap('a rounded ghost button', `<blaze-button rounded ghost>Action</blaze-button>`);
    snap('an active button', `<blaze-button active>Action</blaze-button>`);
  });
});
