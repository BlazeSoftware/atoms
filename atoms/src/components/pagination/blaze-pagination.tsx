import { Component, Event, EventEmitter, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-pagination'
})
export class Pagination {

  @Prop() page: number = 1;
  @Prop() pages: number = 1;
  @State() _currentPage: number;
  @Event() onPageChange: EventEmitter;

  @Method()
  goToPage(page: number) {
    if (page > 0 && page <= this.pages) {
      this._currentPage = page;
      this.onPageChange.emit(this._currentPage);
    }
  }

  @Method()
  currentPage() {
    return this._currentPage;
  }

  componentWillLoad() {
    this._currentPage = this.page;
  }

  render() {
    return (
      <nav class="c-pagination">
        <div class="c-pagination__controls c-pagination__controls--backward">
          <button class="c-pagination__control" onClick={() => this.goToPage(1)} disabled={this._currentPage === 1}>&laquo;</button>
          <button class="c-pagination__control" onClick={() => this.goToPage(this._currentPage - 1)} disabled={this._currentPage === 1}>&lsaquo;</button>
        </div>
        <div class="c-pagination__controls">
          {this._currentPage > 1 && <span class="c-pagination__ellipsis">&hellip;</span>}
          {this._currentPage > 1 && <button onClick={() => this.goToPage(this._currentPage - 1)} class="c-pagination__page">{this._currentPage - 1}</button>}
          <button class="c-pagination__page c-pagination__page--current">{this._currentPage}</button>
          {this._currentPage < this.pages && <button onClick={() => this.goToPage(this._currentPage + 1)} class="c-pagination__page">{this._currentPage + 1}</button>}
          {this._currentPage < this.pages && <span class="c-pagination__ellipsis">&hellip;</span>}
        </div>
        <div class="c-pagination__controls c-pagination__controls--forward">
          <button class="c-pagination__control" onClick={() => this.goToPage(this._currentPage + 1)} disabled={this._currentPage === this.pages}>&rsaquo;</button>
          <button class="c-pagination__control" onClick={() => this.goToPage(this.pages)} disabled={this._currentPage === this.pages}>&raquo;</button>
        </div>
      </nav>
    );
  }
}
