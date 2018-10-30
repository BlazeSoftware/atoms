import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'components-camera',
})
export class ComponentsCamera {
  @Element()
  el: HTMLElement;

  @Prop()
  name: string;

  componentDidLoad() {
    const camera: any = this.el.querySelector('blaze-camera');
    camera.on();
  }

  render() {
    return (
      <page-template name={this.name}>
        <p class="c-paragraph">Place the camera component on the page.</p>

        <blaze-demo demo={false} language="html" code={`<blaze-camera></blaze-camera>`} />

        <blaze-camera />

        <h2 class="c-heading">How to use</h2>

        <h3 class="c-heading">Add event listeners</h3>
        <p class="c-paragraph">
          Firstly set up two event handlers. One for when photos are taken and another when recordings are made.
        </p>

        <blaze-demo
          demo={false}
          language="js"
          code={`const camera = document.querySelector('blaze-camera');

camera.addEventListener('photo', async (e) => {
  const blob = e.detail;
  const dataUrl = await camera.toDataURL(blob);
  console.log(dataUrl); // data:image/png;base64,iVBORw0KGg...
});

camera.addEventListener('recording', async (e) => {
  const blob = e.detail;
  const dataUrl = await camera.toDataURL(blob);
  console.log(dataUrl); // data:audio/ogg;codecs=opus;base64,GkXfo6NCho...
});`}
        />

        <p class="c-paragraph">
          The camera component provides a <code class="u-code">toDateUrl(input: Blob)</code> conversion helper that
          accepts <code class="u-code">Blobs</code> and converts them to data URLs.
        </p>

        <h3 class="c-heading">Functions</h3>

        <p class="c-paragraph">
          Now we have our event listeners in place we can turn the camera on, take photos, record videos and when we're
          done turn the camera off.
        </p>

        <blaze-demo
          demo={false}
          language="js"
          code={`await camera.on();
camera.takePhoto();
camera.record();
camera.stop();
camera.off();`}
        />

        <p class="c-paragraph">
          Note that <code class="u-code">on()</code> returns a promise. You should wait until the camera has been turned
          on before trying to take pictures or making recordings.
        </p>
      </page-template>
    );
  }
}
