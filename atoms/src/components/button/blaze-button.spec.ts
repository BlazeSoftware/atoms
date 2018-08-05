import { TestWindow } from '@stencil/core/testing';
import { Button } from './blaze-button';

describe('Button', () => {
  it('should build', () => {
    expect(new Button()).toBeTruthy();
  });

  describe('renders', () => {
    let element;

    const snapIt = (name, html) => {
      it(name, async () => {
        const window = new TestWindow();
        element = await window.load({
          components: [Button],
          html
        });
        window.flush();

        expect(element).toMatchSnapshot();
      });
    };

    snapIt(
      'a default button',
      `<blaze-button>Action</blaze-button>`
    );

    snapIt(
      'an a button',
      `<blaze-button href="#" value="Action"></blaze-button>`
    );

    snapIt(
      'a colored button',
      `<blaze-button type="info">Action</blaze-button>`
    );

    snapIt(
      'a sized button',
      `<blaze-button size="small">Action</blaze-button>`
    );

    snapIt(
      'a full-width button',
      `<blaze-button full>Action</blaze-button>`
    );

    snapIt(
      'a ghost button',
      `<blaze-button ghost>Action</blaze-button>`
    );

    snapIt(
      'a colored ghost button',
      `<blaze-button ghost type="info">Action</blaze-button>`
    );

    snapIt(
      'a rounded button',
      `<blaze-button rounded>Action</blaze-button>`
    );

    snapIt(
      'a rounded ghost button',
      `<blaze-button rounded ghost>Action</blaze-button>`
    );

    snapIt(
      'an active button',
      `<blaze-button active>Action</blaze-button>`
    );
  });
});
