import { h, Component, Event, EventEmitter, Prop, Method, State, Listen, Element } from '@stencil/core';
import { IAutoCompleteItem } from './interfaces';

@Component({
  tag: 'blaze-autocomplete',
})
export class AutoComplete {
  @Element()
  el: HTMLDivElement;

  @Prop()
  placeholder: string;

  @Event({ eventName: 'selected' })
  onSelected: EventEmitter;

  @Event({ eventName: 'filter' })
  onFilter: EventEmitter;

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

  componentDidLoad() {
    document.addEventListener('click', (e) => {
      e.target !== this.el && !this.el.contains(e.target as any) && this.close();
    });
  }

  @Method()
  async setItems(items: Array<IAutoCompleteItem>) {
    this.items = items;
    this.value ? this.open() : this.close();
  }

  @Method()
  async reset() {
    this.items = [];
    this.value = null;
    this.close();
  }

  select(item: IAutoCompleteItem) {
    if (item.disabled) return;
    this.activeItem = item;
    this.selectedItem = item;
    this.value = item.text;
    this.onSelected.emit(item);
    this.close();
  }

  filter(e) {
    this.activeItem = null;
    this.value = e.target.value;
    const query = this.value;
    this.onFilter.emit(query);
  }

  open() {
    if (this.items && this.items.length) {
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
        this.open();
        if (idx > 0 && this._isOpen) {
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
      <div class="o-field o-field--autocomplete">
        <input
          type="search"
          class="c-field"
          placeholder={this.placeholder}
          autocomplete="off"
          value={this.value}
          onInput={(e: UIEvent) => this.filter(e)}
          onFocus={() => this.open()}
          onClick={() => this.open()}
        />
        {this._isOpen && (
          <div role="menu" class="c-card c-card--menu" style={{ width: '320px' }}>
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
