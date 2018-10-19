import { Component, Event, EventEmitter, Prop, Method, State, Listen } from '@stencil/core';
import { IAutoCompleteItem } from './interfaces';

@Component({
  tag: 'blaze-autocomplete',
})
export class AutoComplete {
  @Prop()
  placeholder: string;

  @Event()
  onSelect: EventEmitter;

  @Event()
  onSearch: EventEmitter;

  @State()
  items: Array<IAutoCompleteItem> = [];

  @State()
  selectedItem: IAutoCompleteItem;

  @State()
  activeItem: IAutoCompleteItem;

  @State()
  _isOpen: boolean;

  @State()
  value: string;

  @Method()
  setItems(items: Array<IAutoCompleteItem>) {
    this.items = items;
    this.value ? this.open() : this.close();
  }

  select(item: IAutoCompleteItem) {
    this.activeItem = item;
    this.selectedItem = item;
    this.value = item.text;
    this.onSelect.emit(item);
    this.close();
  }

  search(e) {
    this.activeItem = null;
    this.value = e.target.value;
    const query = this.value;
    this.onSearch.emit(query);
  }

  open() {
    if (this.items.length) {
      this._isOpen = true;
    }
  }

  close() {
    this._isOpen = false;
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    let idx = this.items.indexOf(this.activeItem);

    switch (ev.key) {
      case 'ArrowDown': {
        ev.preventDefault();
        this.open();
        if (idx < this.items.length - 1) {
          this.activeItem = this.items[idx + 1];
        }
        break;
      }
      case 'ArrowUp': {
        ev.preventDefault();
        if (idx > 0) {
          this.activeItem = this.items[idx - 1];
        }
        break;
      }
      case 'Enter': {
        if (this.activeItem) {
          ev.preventDefault();
          this.select(this.activeItem);
        }
      }
      case 'Escape': {
        this.close();
      }
    }
  }

  render() {
    return (
      <div class="c-autocomplete">
        <input
          type="text"
          class="c-field"
          placeholder={this.placeholder}
          autocomplete="off"
          value={this.value}
          onInput={(e: UIEvent) => this.search(e)}
          onFocus={() => this.open()}
          onClick={() => this.open()}
        />
        {this._isOpen && (
          <div role="menu" class="c-card c-card--menu">
            {this.items.map((item) => {
              const isActiveClass = this.activeItem === item ? 'c-card__control--active' : '';
              return (
                <button role="menuitem" class={`c-card__control ${isActiveClass}`} onClick={() => this.select(item)}>
                  {item.text}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
