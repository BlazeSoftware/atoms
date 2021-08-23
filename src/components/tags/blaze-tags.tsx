import { h, Component, Event, EventEmitter, Prop, State, Method } from '@stencil/core';
import { IOption } from './interfaces';
@Component({
  tag: 'blaze-tags',
})
export class Tags {
  optionRef: HTMLOptionElement;
  autocompleteRef: any;

  @Prop()
  placeholder: string;

  @Prop()
  autocomplete: boolean;

  @Prop()
  options: string;

  @State()
  _placeholder: string;

  @State()
  _options: Array<IOption>;

  @State()
  choices: Array<IOption> = [];

  @State()
  inputValue: string = '';

  @Event({ eventName: 'add' })
  onAdd: EventEmitter;

  @Event({ eventName: 'filter' })
  onFilter: EventEmitter;

  @Method()
  async setOptions(options?: Array<IOption>) {
    if (options) this._options = options;
    else if (this.options) this._options = JSON.parse(this.options);

    if (this.autocompleteRef) {
      return this.autocompleteRef.setItems(this._options);
    }
  }

  componentWillLoad() {
    this.setOptions();
    this._placeholder = this.placeholder;
    if (!this._placeholder) this._placeholder = this.options ? 'Select an option' : 'Add a tag';
  }

  addChoice(choice: IOption) {
    this.choices = [...this.choices, choice];
    this.onAdd.emit(choice);
    if (this.optionRef) this.optionRef.selected = true;
    this.inputValue = '';
  }

  select(e) {
    e.preventDefault();

    const chosenValue = e.target.value || e.detail.value;
    if (typeof chosenValue === 'undefined') return;

    // Get selected option based on selected value
    const choice = this._options.find((o) => o.value === chosenValue);

    if (choice) {
      this.addChoice(choice);
    }

    if (this.autocompleteRef) this.autocompleteRef.reset();
  }

  handleInput(e) {
    this.inputValue = e.target.value;
  }

  handleEnter(e) {
    if (e.key === 'Enter' && this.inputValue) {
      e.preventDefault();

      const choice = { text: this.inputValue } as IOption;
      this.addChoice(choice);
    }
  }

  removeChoice(i: number) {
    this.choices.splice(i, 1);
    this.choices = [...this.choices];
  }

  filter(e) {
    // e.stopPropagation();
    this.onFilter.emit(e.detail);
  }

  renderAutocomplete() {
    return (
      <blaze-autocomplete
        ref={(ref) => (this.autocompleteRef = ref)}
        onFilter={(e) => this.filter(e)}
        placeholder={this._placeholder}
        onSelected={(e) => this.select(e)}
      />
    );
  }

  renderDropdown() {
    return (
      <select class="c-field" onChange={(e) => this.select(e)}>
        <option ref={(ref) => (this.optionRef = ref)}>{this._placeholder}</option>
        {this._options.map((option: IOption) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    );
  }

  renderInput() {
    return (
      <input
        type="text"
        class="c-field"
        placeholder={this._placeholder}
        value={this.inputValue}
        onInput={(e) => this.handleInput(e)}
        onKeyDown={(e) => this.handleEnter(e)}
      />
    );
  }

  renderField() {
    if (this.autocomplete) return this.renderAutocomplete();
    if (this.options) return this.renderDropdown();
    return this.renderInput();
  }

  render() {
    return (
      <div class="c-tags">
        <div class="c-tags__container">
          {this.choices.map((choice: IOption, i: number) => (
            <button type="button" class="c-button c-tag" onClick={() => this.removeChoice(i)}>
              {choice.text}
            </button>
          ))}
        </div>

        <div class="c-tags__field-container">{this.renderField()}</div>
      </div>
    );
  }
}
