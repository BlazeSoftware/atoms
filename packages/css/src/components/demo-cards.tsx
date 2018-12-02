import { Component } from '@stencil/core';

@Component({
  tag: 'demo-cards',
})
export class Cards {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Cards</h2>
        <div class="c-card">
          <div class="c-card__item">
            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>
          </div>
        </div>
        <div class="c-card">
          <div role="separator" class="c-card__item c-card__item--divider">
            Header
          </div>
          <div class="c-card__item">
            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>

            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>
          </div>
          <div role="separator" class="c-card__item c-card__item--divider">
            Footer
          </div>
        </div>
        <div class="c-card">
          <div class="c-card__item c-card__item--info o-media">
            <div class="o-media__image">
              <img class="o-image" src="//placehold.it/80" />
            </div>
            <div class="o-media__body">
              <h2 class="c-heading">
                Title
                <span class="c-heading__sub">Subtitle</span>
              </h2>
              <p class="u-paragraph">
                Lorem ipsum dolor sit amet, feugiat corpora ex eam.Lorem ipsum dolor sit amet, feugiat corpora ex
                eam.Lorem ipsum dolor sit amet, feugiat corpora ex eam.Lorem ipsum dolor sit amet, feugiat corpora ex
                eam.Lorem ipsum dolor sit amet, feugiat corpora ex eam.
              </p>
            </div>
          </div>
        </div>
        <div class="c-card">
          <div role="separator" class="c-card__item c-card__item--divider">
            Header
          </div>
          <div class="c-card__item c-card__item--success">
            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>

            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>
          </div>
          <div role="separator" class="c-card__item c-card__item--divider">
            Footer
          </div>
        </div>
        <div class="c-card">
          <div role="separator" class="c-card__item c-card__item--divider">
            Header
          </div>
          <div class="c-card__item c-card__item--warning">
            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>

            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>
          </div>
          <div role="separator" class="c-card__item c-card__item--divider">
            Footer
          </div>
        </div>
        <div class="c-card u-high">
          <div role="separator" class="c-card__item c-card__item--divider">
            High
          </div>
          <div class="c-card__item">
            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>

            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>
          </div>
        </div>
        <div class="c-card u-higher">
          <div role="separator" class="c-card__item c-card__item--divider">
            Higher
          </div>
          <div class="c-card__item">
            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>

            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>
          </div>
        </div>
        <div class="c-card u-highest">
          <div role="separator" class="c-card__item c-card__item--divider">
            Highest
          </div>
          <div class="c-card__item">
            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>

            <p class="u-paragraph">
              Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
            </p>
          </div>
        </div>
        <div class="c-card u-highest">
          <div class="c-card__item">Item 1</div>
          <div class="c-card__item">Item 2</div>
          <div role="separator" class="c-card__item c-card__item--divider">
            Item divider
          </div>
          <div class="c-card__item">Item 3</div>
          <div class="c-card__item">Item 4</div>
        </div>
        <div class="c-card u-highest">
          <div class="c-card__item">Item 1</div>
          <div class="c-card__item">Item 2</div>
          <div role="separator" class="c-card__item c-card__item--divider c-card__item--error">
            Item divider
          </div>
          <div class="c-card__item">Item 3</div>
          <div class="c-card__item">Item 4</div>
        </div>
        <div class="c-card u-highest c-card--grouped">
          <div class="c-card__item">Item 1</div>
          <div class="c-card__item">Item 2</div>
          <div role="separator" class="c-card__divider" />
          <div class="c-card__item">Item 3</div>
          <div class="c-card__item">Item 4</div>
          <div class="c-card__item">Item 5</div>
          <div role="separator" class="c-card__divider" />
          <div class="c-card__item">Item 6</div>
          <div role="separator" class="c-card__group-divider" />
          <div class="c-card__item">Item 7</div>
          <div class="c-card__item">Item 8</div>
        </div>
        <div class="c-card u-highest">
          <img class="o-image" src="http://placehold.it/1024x963/3B6DC6/FFF" />
          <header class="c-card__header">
            <h2 class="c-heading">
              Heading
              <div class="c-heading__sub">Sub-heading</div>
            </h2>
          </header>
          <div class="c-card__body">
            To make a contribution to the world by making tools for the mind that advance humankind.
          </div>
          <footer class="c-card__footer">
            <div class="c-input-group">
              <button class="c-button c-button--brand c-button--block c-button--ghost-brand">Buy</button>
              <button class="c-button c-button--block c-button--ghost-brand">Buy</button>
              <button class="c-button c-button--block c-button--ghost-brand">Buy</button>
            </div>
          </footer>
        </div>
        <div class="c-card u-highest">
          <img class="o-image" src="http://placehold.it/1024x963/3B6DC6/FFF" />
          <header class="c-card__header">
            <h2 class="c-heading">
              Heading
              <span class="c-heading__sub">Sub-heading</span>
            </h2>
          </header>
          <div class="c-card__body">
            To make a contribution to the world by making tools for the mind that advance humankind.
          </div>
          <footer class="c-card__footer c-card__footer--block">
            <div class="c-input-group">
              <button class="c-button c-button--block c-button--success">Save</button>
              <button class="c-button c-button--block c-button--error">Cancel</button>
            </div>
          </footer>
        </div>
        <div class="c-card u-highest">
          <header class="c-card__header">
            <h2 class="c-heading">
              Heading
              <span class="c-heading__sub">Sub-heading</span>
            </h2>
          </header>
          <div class="c-card__body">
            To make a contribution to the world by making tools for the mind that advance humankind.
          </div>
          <footer class="c-card__footer c-card__footer--block">
            <div class="c-input-group">
              <button class="c-button c-button--block c-button--ghost-success">Save</button>
              <button class="c-button c-button--block c-button--ghost-error">Cancel</button>
            </div>
          </footer>
        </div>
        <h3 class="c-heading">Mega Card</h3>
        <div class="c-card u-highest">
          <img class="o-image" src="http://placehold.it/1024x963/3B6DC6/FFF" />
          <header class="c-card__header">
            <h2 class="c-heading">
              Heading
              <div class="c-heading__sub">Sub-heading</div>
            </h2>
          </header>
          <div class="c-card__body">
            To make a contribution to the world by making tools for the mind that advance humankind.
          </div>
          <div class="c-card__item">Item 1</div>
          <div class="c-card__item">Item 2</div>
          <div class="c-card__item c-card__item--divider c-card__item--info">Item divider</div>
          <div class="c-card__item">Item 3</div>
          <div class="c-card__item">Item 4</div>
          <footer class="c-card__footer c-card__footer--block">
            <div class="c-input-group">
              <button class="c-button c-button--block c-button--success">Save</button>
              <button class="c-button c-button--block c-button--error">Cancel</button>
            </div>
          </footer>
        </div>
      </section>
    );
  }
}
