import { snapIt } from '../../../test';

const component = 'tags';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('renders correctly with no props', '<blaze-tags></blaze-tags>');
    snap('placeholder updates', '<blaze-tags placeholder="Test Placeholder"></blaze-tags>');
    snap(
      'options renders select dropdown',
      `<blaze-tags placeholder="Select a tag" options='[{ "text": "Test", "value": "test" }, { "text": "Test Two", "value": "test two" }, { "text": "Test Three", "value": "test three" }]'></blaze-tags>`
    );
  });
});
