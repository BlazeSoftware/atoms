import { Component } from '@stencil/core';

@Component({
  tag: 'demo-tyography',
})
export class Typography {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Lists</h2>
        <h3 class="c-heading">Un-ordered</h3>
        <ul class="c-list">
          <li class="c-list__item">Lorem ipsum dolor sit amet</li>
          <li class="c-list__item">Consectetur adipiscing elit</li>
          <li class="c-list__item">
            Nulla volutpat aliquam velit
            <ul class="c-list">
              <li class="c-list__item">Phasellus iaculis neque</li>
              <li class="c-list__item">Purus sodales ultricies</li>
              <li class="c-list__item">Vestibulum laoreet porttitor sem</li>
              <li class="c-list__item">Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li class="c-list__item">Faucibus porta lacus fringilla vel</li>
        </ul>
        <h3 class="c-heading">Ordered</h3>
        <ol class="c-list c-list--ordered">
          <li class="c-list__item">Lorem ipsum dolor sit amet</li>
          <li class="c-list__item">Consectetur adipiscing elit</li>
          <li class="c-list__item">
            Nulla volutpat aliquam velit
            <ol class="c-list c-list--ordered">
              <li class="c-list__item">Phasellus iaculis neque</li>
              <li class="c-list__item">
                Purus sodales ultricies
                <ol class="c-list c-list--ordered">
                  <li class="c-list__item">Lorem ipsum dolor sit amet</li>
                  <li class="c-list__item">Consectetur adipiscing elit</li>
                </ol>
              </li>
              <li class="c-list__item">Vestibulum laoreet porttitor sem</li>
              <li class="c-list__item">Ac tristique libero volutpat at</li>
            </ol>
          </li>
          <li class="c-list__item">Faucibus porta lacus fringilla vel</li>
        </ol>
        <h3 class="c-heading">Unstyled</h3>
        <ul class="c-list c-list--unstyled">
          <li class="c-list__item">
            <strong>I'm an unstyled list</strong>
          </li>
          <li class="c-list__item">Consectetur adipiscing elit</li>
          <li class="c-list__item">
            Nulla volutpat aliquam velit
            <ul class="c-list">
              <li class="c-list__item">Phasellus iaculis neque</li>
              <li class="c-list__item">Purus sodales ultricies</li>
              <li class="c-list__item--unstyled">
                <strong>I'm an unstyled item</strong>
              </li>
              <li class="c-list__item">Ac tristique libero volutpat at</li>
            </ul>
          </li>
          <li class="c-list__item">Faucibus porta lacus fringilla vel</li>
        </ul>
        <h3 class="c-heading">Inline</h3>
        <ul class="c-list c-list--inline">
          <li class="c-list__item">Lorem ipsum dolor sit amet</li>
          <li class="c-list__item">Consectetur adipiscing elit</li>
          <li class="c-list__item">Nulla volutpat aliquam velit</li>
        </ul>
        <h3 class="c-heading">with divs</h3>
        <div role="list" class="c-list c-list--ordered">
          <div class="c-list__item">Lorem ipsum dolor sit amet</div>
          <div class="c-list__item">Consectetur adipiscing elit</div>
          <div class="c-list__item">
            Nulla volutpat aliquam divt
            <div role="list" class="c-list c-list--ordered">
              <div class="c-list__item">Phasellus iaculis neque</div>
              <div class="c-list__item">
                Purus sodales ultricies
                <div role="list" class="c-list c-list--ordered">
                  <div class="c-list__item">Lorem ipsum dolor sit amet</div>
                  <div class="c-list__item">Consectetur adipiscing elit</div>
                </div>
              </div>
              <div class="c-list__item">Vestibulum laoreet porttitor sem</div>
              <div class="c-list__item">Ac tristique libero volutpat at</div>
            </div>
          </div>
          <div class="c-list__item">Faucibus porta lacus fringilla vel</div>
        </div>
      </section>
    );
  }
}
