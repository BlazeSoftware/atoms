import { snapIt } from '../../../test';

const component = 'accordion';
const snap = snapIt(component);

snap('emtpy', `<blaze-accordion></blaze-accordion>`);
snap(
  'two headers and two panes',
  `<blaze-accordion>
      <blaze-accordion-pane header="Click me">
        This is an accordion
      </blaze-accordion-pane>
    </blaze-accordion>`
);
snap(
  'two headers and two panes',
  `<blaze-accordion>
      <blaze-accordion-pane open header="Click me">
        This is an accordion
      </blaze-accordion-pane>
    </blaze-accordion>`
);
