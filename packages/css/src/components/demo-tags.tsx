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
            <select class="c-field">
              <option>England</option>
              <option>Scotland</option>
              <option>Wales</option>
            </select>
          </div>
        </div>
      </section>
    );
  }
}
