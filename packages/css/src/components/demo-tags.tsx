import { Component } from '@stencil/core';

@Component({
  tag: 'demo-tags',
})
export class Tags {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Tags</h2>
        <div class="c-tags">
          <span class="c-tags__container">
            <button type="button" class="c-button c-button--black c-tag">
              Tag one
              <span class="c-tag__close">&times;</span>
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag two
              <span class="c-tag__close">&times;</span>
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag three
              <span class="c-tag__close">&times;</span>
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag four
              <span class="c-tag__close">&times;</span>
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag five
              <span class="c-tag__close">&times;</span>
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag six
              <span class="c-tag__close">&times;</span>
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag seven
              <span class="c-tag__close">&times;</span>
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag eight
              <span class="c-tag__close">&times;</span>
            </button>
          </span>

          <div class="c-tags__field-container">
            <input class="c-field" />
            <div role="menu" class="c-card c-card--menu u-higher">
              <button role="menuitem" type="button" class="c-card__control">
                England
              </button>
              <button role="menuitem" type="button" class="c-card__control">
                Scotland
              </button>
              <button role="menuitem" type="button" class="c-card__control">
                Wales
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
