import { snapIt } from '../../../test';

const component = 'timeline';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('without items', '<blaze-timeline></blaze-timeline>');
    snap(
      'with items',
      `<blaze-timeline>
        <blaze-timeline-item>Item 1</blaze-timeline-item>
        <blaze-timeline-item>Item 2</blaze-timeline-item>
        <blaze-timeline-item>Item 3</blaze-timeline-item>
      </blaze-timeline>`
    );
    snap(
      'all the attributes set',
      `<blaze-timeline alternate loading>
        <blaze-timeline-item left type="brand">Item 1</blaze-timeline-item>
        <blaze-timeline-item last>Item 2</blaze-timeline-item>
        <blaze-timeline-item loading>Item 3</blaze-timeline-item>
      </blaze-timeline>`
    );
  });
});
