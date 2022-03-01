import { h, Component, Event, EventEmitter, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-pagination',
})
export class Pagination {
  @Prop()
  page: number = 1;

  @Prop()
  pages: number = 1;

  @State()
  _currentPage: number;

  @Event({ eventName: 'page' })
  onPage: EventEmitter;

  @Method()
  async goToPage(page: number) {
    if (page > 0 && page <= this.pages) {
      this._currentPage = page;
      this.onPage.emit(this._currentPage);
    }
  }

  @Method()
  async currentPage() {
    return this._currentPage;
  }

  componentWillLoad() {
    this._currentPage = this.page;
  }

  render() {
    return (
      <nav class="c-pagination">
        <button
          class="c-pagination__control"
          onClick={() => this.goToPage(this._currentPage - 1)}
          disabled={this._currentPage === 1}
        >
          &lsaquo;
        </button>
        <div class="c-pagination__pages">
          {this._currentPage > 1 && (
            <button onClick={() => this.goToPage(this._currentPage - 1)} class="c-pagination__control">
              {this._currentPage - 1}
            </button>
          )}
          <button class="c-pagination__control" aria-current>
            {this._currentPage}
          </button>
          {this._currentPage < this.pages && (
            <button onClick={() => this.goToPage(this._currentPage + 1)} class="c-pagination__control">
              {this._currentPage + 1}
            </button>
          )}
        </div>
        <button
          class="c-pagination__control"
          onClick={() => this.goToPage(this._currentPage + 1)}
          disabled={this._currentPage === this.pages}
        >
          &rsaquo;
        </button>
      </nav>
    );
  }
}
