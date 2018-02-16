import { Component, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'blaze-pagination'
})
export class Pagination {

  @Prop() page: number = 1;
  @Prop() pages: number = 1;
  @State() _currentPage: number;

  @Method()
  backwards() {
    if (this._currentPage > 1) {
      this._currentPage = this._currentPage - 1;
    }
  }

  @Method()
  forward() {
    if (this._currentPage < this.pages) {
      this._currentPage = this._currentPage + 1;
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
      <div class="c-pagination">
        <div class="c-pagination__controls c-pagination__controls--backward">
          <button class="c-pagination__control" onClick={() => this._currentPage = 1} disabled={this._currentPage === 1}>&laquo;</button>
          <button class="c-pagination__control" onClick={() => this.backwards()} disabled={this._currentPage === 1}>&lsaquo;</button>
        </div>
        <div class="c-pagination__controls">
          {this._currentPage > 1 && <span class="c-pagination__ellipsis">&hellip;</span>}
          {this._currentPage > 1 && <button onClick={() => this.backwards()} class="c-pagination__page">{this._currentPage - 1}</button>}
          <button class="c-pagination__page c-pagination__page--current">{this._currentPage}</button>
          {this._currentPage < this.pages && <button onClick={() => this.forward()} class="c-pagination__page">{this._currentPage + 1}</button>}
          {this._currentPage < this.pages && <span class="c-pagination__ellipsis">&hellip;</span>}
        </div>
        <div class="c-pagination__controls c-pagination__controls--forward">
          <button class="c-pagination__control" onClick={() => this.forward()} disabled={this._currentPage === this.pages}>&rsaquo;</button>
          <button class="c-pagination__control" onClick={() => this._currentPage = this.pages} disabled={this._currentPage === this.pages}>&raquo;</button>
        </div>
      </div>
    );
  }
}
