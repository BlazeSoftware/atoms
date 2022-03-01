import { snapIt } from '../../../test';

const component = 'card';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('a card', '<blaze-card></blaze-card>');
    snap(
      'all the child elements correctly',
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
    snap(
      'all the child elements correctly',
      `<blaze-card>
      <blaze-media-item>
        <blaze-media-image src="https://via.placeholder.com/80"></blaze-media-image>
        <blaze-media-body>
          <h2 class="c-heading">Title
            <span class="c-heading__sub">Subtitle</span>
          </h2>
          <p class="c-paragraph">
            Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor sit amet, feugiat corpora ex eam. Lorem ipsum dolor
            sit amet, feugiat corpora ex eam.
          </p>
        </blaze-media-body>
      </blaze-media-item>
    </blaze-card>`
    );
  });
});
