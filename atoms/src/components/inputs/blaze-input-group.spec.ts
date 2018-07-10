import { TestWindow } from '@stencil/core/testing';
import { InputGroup } from './blaze-input-group';

describe('InputGroup', () => {
  it('should build', () => {
    expect(new InputGroup()).toBeTruthy();
  });

  describe('renders', () => {
    let element;

    const snapIt = (name, html) => {
      it(name, async () => {
        const window = new TestWindow();
        element = await window.load({
          components: [InputGroup],
          html
        });
        window.flush();

        expect(element).toMatchSnapshot();
      });
    };

    snapIt(
      'an empty input-group',
      '<blaze-input-group></blaze-input-group>'
    );

    snapIt(
      'with different tag',
      `<blaze-input-group tag="span">
       <button class="c-button c-button--brand">Action</button>
       <input type="text" class="c-field">
       <button class="c-button c-button--brand">Action</button>
     </blaze-input-group>`
    );

    snapIt(
      'stacked modifier class',
      `<blaze-input-group stacked>
       <button class="c-button c-button--brand">Action</button>
       <input type="text" class="c-field">
       <button class="c-button c-button--brand">Action</button>
     </blaze-input-group>`
    );

    snapIt(
      'rounded modifier class',
      `<blaze-input-group rounded>
       <button class="c-button c-button--brand">Action</button>
       <input type="text" class="c-field">
       <button class="c-button c-button--brand">Action</button>
     </blaze-input-group>`
    );

    snapIt(
      'rounded modifier class with edge',
      `<blaze-input-group rounded edge="left">
       <button class="c-button c-button--brand">Action</button>
       <input type="text" class="c-field">
       <button class="c-button c-button--brand">Action</button>
     </blaze-input-group>`
    );
  });
});
