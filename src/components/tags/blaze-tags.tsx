import { h, Component, Event, EventEmitter, Prop, State, Watch } from '@stencil/core';

type Option = {
  value?: string;
  text: string;
};

@Component({
  tag: 'blaze-tags',
})
export class Tags {
  optionRef: HTMLOptionElement;

  @Prop()
  placeholder: string;

  @Prop()
  options: string;

  @State()
  _placeholder: string;

  @State()
  _options: any[];

  @State()
  choices: any[] = [];

  @State()
  inputValue: string = '';

  @Event({ eventName: 'add' })
  onAdd: EventEmitter;

  @Watch('options')
  parseOptions() {
    if (this.options) {
      this._options = JSON.parse(this.options);
    }
  }

  componentWillLoad() {
    this.parseOptions();
    this._placeholder = this.placeholder;
    if (!this._placeholder) this._placeholder = this.options ? 'Select an option' : 'Add a tag';
  }

  addChoice(choice: Option) {
    this.choices = [...this.choices, choice];
    this.onAdd.emit(choice);
    if (this.optionRef) this.optionRef.selected = true;
    this.inputValue = '';
  }

  select(e) {
    e.preventDefault();
    // Get selected option based on selected value
    const choice = this._options.find((o) => o.value === e.target.value);

    if (choice) {
      this.addChoice(choice);
    }
  }

  handleInput(e) {
    this.inputValue = e.target.value;
  }

  handleKeyDown(e) {
    if (e.key === 'Enter' && this.inputValue) {
      e.preventDefault();

      const choice = { text: this.inputValue } as Option;
      this.addChoice(choice);
    }
  }

  removeChoice(i: number) {
    this.choices.splice(i, 1);
    this.choices = [...this.choices];
  }

  render() {
    return (
      <div class="c-tags">
        <div class="c-tags__container">
          {this.choices.map((choice: Option, i: number) => (
            <button type="button" class="c-button c-tag" onClick={() => this.removeChoice(i)}>
              {choice.text}
            </button>
          ))}
        </div>

        <div class="c-tags__field-container">
          {this.options ? (
            <select class="c-field" onChange={(e) => this.select(e)}>
              <option ref={(ref) => (this.optionRef = ref)}>{this._placeholder}</option>
              {this._options.map((option: Option) => (
                <option value={option.value}>{option.text}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              class="c-field"
              placeholder={this._placeholder}
              value={this.inputValue}
              onInput={(e) => this.handleInput(e)}
              onKeyDown={(e) => this.handleKeyDown(e)}
            />
          )}
        </div>
      </div>
    );
  }
}
