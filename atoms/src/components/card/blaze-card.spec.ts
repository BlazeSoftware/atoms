import { flush, render } from '@stencil/core/testing';
import { Card } from './blaze-card';

describe('Card', () => {
  it('should build', () => {
    expect(new Card()).toBeTruthy();
  });

  let element;

  const snapIt = (name, html) => {
    it(name, async () => {
      element = await render({
        components: [Card],
        html
      });
      await flush(element);

      expect(element).toMatchSnapshot();
    });
  };

  snapIt(
    'renders a card',
    '<blaze-card></blaze-card>'
  );

  snapIt(
    'renders all the child elements correctly',
    `<blaze-card>
      <blaze-image></blaze-image>
      <blaze-card-header>
        <h2 class="c-heading u-xlarge">
          Heading
          <div class="c-heading__sub">Sub-heading</div>
        </h2>
      </blaze-card-header>
      <blaze-card-body>
        <p class="c-paragraph">
          Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
        </p>
      </blaze-card-body>
      <blaze-card-footer>
        <div class="c-input-group">
          <button class="c-button c-button--block c-button--brand">Button</button>
          <button class="c-button c-button--block c-button--info">Button</button>
        </div>
      </blaze-card-footer>
    </blaze-card>`
  );
});
