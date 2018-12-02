import { Component } from '@stencil/core';

@Component({
  tag: 'demo-menus',
})
export class Menus {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Menus</h2>
        <h3 class="c-heading">Menu as list</h3>
        <ul role="menu" class="c-card c-card--menu u-high">
          <li role="menuitem" class="c-card__item">
            Menu 1
          </li>
          <li role="menuitem" class="c-card__item">
            Menu 2
          </li>
          <li role="separator" class="c-card__item c-card__item--divider">
            Divider
          </li>
          <li role="menuitem" class="c-card__item">
            Menu 3
          </li>
          <li role="menuitem" class="c-card__item">
            Menu 4
          </li>
          <li role="menuitem" class="c-card__item">
            Menu item disabled
          </li>
          <li role="menuitem" class="c-card__item c-card__item--active">
            Menu item active
          </li>
          <li role="menuitem" class="c-card__item">
            Menu 5
          </li>
          <li role="menuitem" class="c-card__item">
            Menu 6
          </li>
          <li role="menuitem" class="c-card__item">
            Menu 7
          </li>
          <li role="menuitem" class="c-card__item">
            Menu 8
          </li>
          <li role="menuitem" class="c-card__item">
            Menu 9
          </li>
          <li role="menuitem" class="c-card__item">
            Menu 10
          </li>
        </ul>
        <h3 class="c-heading">Menu buttons</h3>
        <div role="menu" class="c-card c-card--menu">
          <button role="menuitem" class="c-card__control c-card__control--brand">
            Menu 1
          </button>
          <button role="menuitem" class="c-card__control c-card__control--brand">
            Menu 2
          </button>
          <div role="separator" class="c-card__item c-card__item--divider">
            Divider
          </div>
          <button role="menuitem" class="c-card__control c-card__control--brand">
            Menu 3
          </button>
          <button role="menuitem" class="c-card__control c-card__control--brand">
            Menu 4
          </button>
          <button role="menuitem" class="c-card__control c-card__control--brand" disabled={true}>
            Menu item disabled
          </button>
          <button role="menuitem" class="c-card__control c-card__control--brand c-card__control--active">
            Menu item active
          </button>
          <button role="menuitem" class="c-card__control c-card__control--brand">
            Menu 5
          </button>
          <button role="menuitem" class="c-card__control c-card__control--brand">
            Menu 6
          </button>
          <button role="menuitem" class="c-card__control c-card__control--brand">
            Menu 7
          </button>
          <button role="menuitem" class="c-card__control c-card__control--brand">
            Menu 8
          </button>
          <button role="menuitem" class="c-card__control c-card__control--brand">
            Menu 9
          </button>
          <button role="menuitem" class="c-card__control c-card__control--brand">
            Menu 10
          </button>
        </div>
        <h3 class="c-heading">Menu buttons grouped</h3>
        <div role="menu" class="c-card c-card--menu u-high c-card--grouped">
          <button role="menuitem" class="c-card__control">
            Menu 1
          </button>
          <button role="menuitem" class="c-card__control">
            Menu 2
          </button>
          <button role="menuitem" class="c-card__control">
            Menu 3
          </button>
          <button role="menuitem" class="c-card__control">
            Menu 4
          </button>
          <div role="separator" class="c-card__divider" />
          <button role="menuitem" class="c-card__control" disabled={true}>
            Menu control disabled
          </button>
          <button role="menuitem" class="c-card__control c-card__control--active">
            Menu control active
          </button>
          <div role="separator" class="c-card__divider" />
          <button role="menuitem" class="c-card__control">
            Menu 5
          </button>
          <button role="menuitem" class="c-card__control">
            Menu 6
          </button>
          <button role="menuitem" class="c-card__control">
            Menu 7
          </button>
          <div role="separator" class="c-card__divider" />
          <button role="menuitem" class="c-card__control">
            Menu 8
          </button>
          <div role="separator" class="c-card__divider" />
          <button role="menuitem" class="c-card__control">
            Menu 9
          </button>
          <button role="menuitem" class="c-card__control">
            Menu 10
          </button>
        </div>
        <h3 class="c-heading">Menu links</h3>
        <div role="menu" class="c-card c-card--menu">
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand">
            Menu 1
          </a>
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand">
            Menu 2
          </a>
          <div role="separator" class="c-card__item c-card__item--divider">
            Divider
          </div>
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand">
            Menu 3
          </a>
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand">
            Menu 4
          </a>
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand">
            Menu control disabled
          </a>
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand c-card__control--active">
            Menu control active
          </a>
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand">
            Menu 5
          </a>
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand">
            Menu 6
          </a>
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand">
            Menu 7
          </a>
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand">
            Menu 8
          </a>
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand">
            Menu 9
          </a>
          <a role="menuitem" href="#" class="c-card__control c-card__control--brand">
            Menu 10
          </a>
        </div>
        <h3 class="c-heading">Combo Menu</h3>
        <div role="menu" class="c-card c-card--menu u-high">
          <label role="menuitem" class="c-card__control c-field c-field--choice">
            <input type="checkbox" /> Control 1
          </label>
          <label role="menuitem" class="c-card__control c-field c-field--choice">
            <input type="checkbox" /> Control 2
          </label>
          <div role="separator" class="c-card__item c-card__item--divider">
            Divider
          </div>
          <label role="menuitem" class="c-card__control c-field c-field--choice">
            <input type="checkbox" /> Control 3
          </label>
          <label role="menuitem" class="c-card__control c-field c-field--choice">
            <input type="checkbox" /> Control 4
          </label>
        </div>
      </section>
    );
  }
}
