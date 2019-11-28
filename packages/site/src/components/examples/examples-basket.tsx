import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'example-basket',
})
export class ExampleBasket {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <div class="o-grid">
          <div class="o-grid__cell o-grid__cell--width-65">
            <div class="c-card u-high">
              <header class="c-card__header">
                <h2 class="c-heading u-xlarge">
                  Payment details
                  <div class="c-heading__sub">Step 1 of 2</div>
                </h2>
              </header>
              <div class="c-card__body">
                <p class="c-paragraph">Please enter your personal detail on this page.</p>
                <fieldset class="o-fieldset">
                  <div class="o-grid o-grid--wrap">
                    <div class="o-grid__cell o-grid__cell--width-50">
                      <label class="c-label o-form-element">
                        First name
                        <input placeholder="John" class="c-field" />
                      </label>
                    </div>
                    <div class="o-grid__cell o-grid__cell--width-50">
                      <label class="c-label o-form-element">
                        Last name
                        <input placeholder="Doe" class="c-field" />
                      </label>
                    </div>
                    <div class="o-grid__cell o-grid__cell--width-100">
                      <label class="c-label o-form-element">
                        Company name
                        <input placeholder="Blaze Ltd." class="c-field" />
                      </label>
                    </div>
                    <div class="o-grid__cell o-grid__cell--width-50">
                      <label class="c-label o-form-element">
                        Email
                        <input type="email" placeholder="John" class="c-field" />
                      </label>
                    </div>
                    <div class="o-grid__cell o-grid__cell--width-50">
                      <label class="c-label o-form-element">
                        Telephone number
                        <input type="telephone" placeholder="Doe" class="c-field" />
                      </label>
                    </div>
                    <div class="o-grid__cell o-grid__cell--width-100">
                      <label class="c-label o-form-element">
                        Country
                        <select class="c-field">
                          <option>🇬🇧 United Kingdom</option>
                          <option>🇫🇷 France</option>
                          <option>🇪🇺 Europe</option>
                          <option>etc.</option>
                        </select>
                      </label>
                    </div>
                    <div class="o-grid__cell o-grid__cell--width-100">
                      <div class="o-form-element">
                        <button class="c-button c-button--block c-button--success">Proceed to card details</button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div role="separator" class="c-card__item c-card__item--divider">
                Small text
              </div>
              <div class="c-card__item">
                <small class="u-small">
                  <p class="c-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.
                    Rutrum tellus pellentesque eu tincidunt tortor aliquam. Pellentesque habitant morbi tristique
                    senectus et netus. Nibh sit amet commodo nulla facilisi nullam vehicula. Purus semper eget duis at
                    tellus at urna condimentum mattis. Convallis posuere morbi leo urna molestie. Risus sed vulputate
                    odio ut. Non diam phasellus vestibulum lorem sed risus. Amet mauris commodo quis imperdiet. Gravida
                    in fermentum et sollicitudin. Adipiscing elit pellentesque habitant morbi tristique senectus et
                    netus. Nec dui nunc mattis enim. Mus mauris vitae ultricies leo integer. Pellentesque nec nam
                    aliquam sem et. Orci ac auctor augue mauris augue neque. Et tortor consequat id porta nibh venenatis
                    cras sed. Justo donec enim diam vulputate. Euismod quis viverra nibh cras pulvinar.
                  </p>
                  <p class="c-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.
                    Rutrum tellus pellentesque eu tincidunt tortor aliquam. Pellentesque habitant morbi tristique
                    senectus et netus. Nibh sit amet commodo nulla facilisi nullam vehicula. Purus semper eget duis at
                    tellus at urna condimentum mattis. Convallis posuere morbi leo urna molestie. Risus sed vulputate
                    odio ut. Non diam phasellus vestibulum lorem sed risus. Amet mauris commodo quis imperdiet. Gravida
                    in fermentum et sollicitudin. Adipiscing elit pellentesque habitant morbi tristique senectus et
                    netus. Nec dui nunc mattis enim. Mus mauris vitae ultricies leo integer. Pellentesque nec nam
                    aliquam sem et. Orci ac auctor augue mauris augue neque. Et tortor consequat id porta nibh venenatis
                    cras sed. Justo donec enim diam vulputate. Euismod quis viverra nibh cras pulvinar.
                  </p>
                  <p class="c-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.
                    Rutrum tellus pellentesque eu tincidunt tortor aliquam. Pellentesque habitant morbi tristique
                    senectus et netus. Nibh sit amet commodo nulla facilisi nullam vehicula. Purus semper eget duis at
                    tellus at urna condimentum mattis. Convallis posuere morbi leo urna molestie. Risus sed vulputate
                    odio ut. Non diam phasellus vestibulum lorem sed risus. Amet mauris commodo quis imperdiet. Gravida
                    in fermentum et sollicitudin. Adipiscing elit pellentesque habitant morbi tristique senectus et
                    netus. Nec dui nunc mattis enim. Mus mauris vitae ultricies leo integer. Pellentesque nec nam
                    aliquam sem et. Orci ac auctor augue mauris augue neque. Et tortor consequat id porta nibh venenatis
                    cras sed. Justo donec enim diam vulputate. Euismod quis viverra nibh cras pulvinar.
                  </p>
                  <p class="c-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.
                    Rutrum tellus pellentesque eu tincidunt tortor aliquam. Pellentesque habitant morbi tristique
                    senectus et netus. Nibh sit amet commodo nulla facilisi nullam vehicula. Purus semper eget duis at
                    tellus at urna condimentum mattis. Convallis posuere morbi leo urna molestie. Risus sed vulputate
                    odio ut. Non diam phasellus vestibulum lorem sed risus. Amet mauris commodo quis imperdiet. Gravida
                    in fermentum et sollicitudin. Adipiscing elit pellentesque habitant morbi tristique senectus et
                    netus. Nec dui nunc mattis enim. Mus mauris vitae ultricies leo integer. Pellentesque nec nam
                    aliquam sem et. Orci ac auctor augue mauris augue neque. Et tortor consequat id porta nibh venenatis
                    cras sed. Justo donec enim diam vulputate. Euismod quis viverra nibh cras pulvinar.
                  </p>
                  <p class="c-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.
                    Rutrum tellus pellentesque eu tincidunt tortor aliquam. Pellentesque habitant morbi tristique
                    senectus et netus. Nibh sit amet commodo nulla facilisi nullam vehicula. Purus semper eget duis at
                    tellus at urna condimentum mattis. Convallis posuere morbi leo urna molestie. Risus sed vulputate
                    odio ut. Non diam phasellus vestibulum lorem sed risus. Amet mauris commodo quis imperdiet. Gravida
                    in fermentum et sollicitudin. Adipiscing elit pellentesque habitant morbi tristique senectus et
                    netus. Nec dui nunc mattis enim. Mus mauris vitae ultricies leo integer. Pellentesque nec nam
                    aliquam sem et. Orci ac auctor augue mauris augue neque. Et tortor consequat id porta nibh venenatis
                    cras sed. Justo donec enim diam vulputate. Euismod quis viverra nibh cras pulvinar.
                  </p>
                </small>
              </div>
            </div>
          </div>
          <div class="o-grid__cell">
            <blaze-sticky>
              <div class="c-card u-high">
                <div role="separator" class="c-card__item c-card__item--divider">
                  Basket
                </div>
                <div class="c-card__item o-media">
                  <div class="o-media__image">
                    <img class="o-image" src="https://placehold.it/80" />
                  </div>
                  <div class="o-media__body">
                    <h3 class="c-heading">
                      Product <div class="c-heading__sub">&pound;49.99</div>
                    </h3>
                    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam....</p>
                  </div>
                </div>
                <div class="c-card__item o-media">
                  <div class="o-media__image">
                    <img class="o-image" src="https://placehold.it/80" />
                  </div>
                  <div class="o-media__body">
                    <h3 class="c-heading">
                      Another product <div class="c-heading__sub">&pound;9.58</div>
                    </h3>
                    <p class="c-paragraph">Lorem ipsum dolor sit amet, feugiat corpora ex eam....</p>
                  </div>
                </div>
                <div class="c-card__item">
                  <button class="c-button c-button--block c-button--brand">Continue shopping</button>
                </div>
              </div>
            </blaze-sticky>
          </div>
        </div>
      </page-template>
    );
  }
}
