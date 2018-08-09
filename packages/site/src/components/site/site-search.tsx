import { Component, Element, Method, State } from '@stencil/core';

declare const algoliasearch: any;

@Component({
  tag: 'site-search'
})
export class SiteSearch {
  @Element() el: HTMLElement;
  @State() results: Array<any> = [];
  @State() searchOpen: boolean;
  client: any;
  index: any;

  constructor() {
    if (typeof algoliasearch !== 'undefined') {
      this.client = algoliasearch('OR1F7EOMDJ', '30a5e5272fc8cf7cc47aadeeb6aec522');
      this.index = this.client.initIndex('pages');
    }
  }

  @Method()
  show() {
    this.searchOpen = true;
    this.el.querySelector('input').focus();
  }

  @Method()
  close() {
    this.results = [];
    this.searchOpen = false;
  }

  search(e) {
    const query = e.target.value;
    if (query === '') {
      return (this.results = []);
    }

    this.index.search(query, (err, content) => {
      this.results = [];
      if (!err && content.hits) {
        return content.hits.forEach((hit) => {
          this.results.push(
            <li class="c-card__item">
              <stencil-route-link url={hit.url} onClick={() => this.close()}>
                {hit.title}
              </stencil-route-link>
            </li>
          );
        });
      }
    });
  }

  render() {
    const classes = this.searchOpen ? 'c-search c-search--open' : 'c-search';

    return (
      <div class={classes}>
        <button
          aria-label="Open search form"
          class="o-page-header__button o-page-header__button--right c-button c-button--nude"
          onClick={() => this.show()}>
          <i aria-hidden class="fas fa-search" />
        </button>
        <div aria-label="Search form" class="c-search__container o-grid o-grid--center o-grid--no-gutter">
          <form role="search" class="o-grid__cell c-search__input">
            <label class="u-visually-hidden" htmlFor="search">
              Search
            </label>
            <input
              id="search"
              type="search"
              class="c-field"
              placeholder="Search"
              autocomplete="off"
              tabindex="0"
              onInput={(e: UIEvent) => this.search(e)}
              onFocus={(e: UIEvent) => this.search(e)}
            />
            {this.results.length > 0 && (
              <ul aria-label="Search results" class="c-search__results c-card c-card--menu u-high">
                {this.results}
              </ul>
            )}
          </form>
          <div class="c-search__close o-grid__cell--width-fixed u-centered">
            <button class="c-button c-button--brand" onClick={() => this.close()}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}
