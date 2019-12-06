import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'components-file-upload',
})
export class ComponentsFileUpload {
  @Prop()
  name: string;

  render() {
    return (
      <page-template name={this.name}>
        <h3 class="c-heading">Basic file upload component</h3>
        <blaze-demo
          language="html"
          code={`<blaze-file-upload>
  <button class="c-button c-button--info">Upload file</button>
</blaze-file-upload>`}
        />
        <h3 class="c-heading">Drop zone</h3>

        <blaze-demo
          language="html"
          code={`<blaze-file-upload drop multiple>Drop to upload your files</blaze-file-upload>`}
        />

        <h2 class="c-heading">Attributes</h2>

        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Name</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">drop: boolean</td>
              <td class="c-table__cell">
                Converts the file uploader into a drop zone. A dropzone will automatically attempt to upload the files
                based on the url value.
              </td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">multiple: boolean</td>
              <td class="c-table__cell">Allow multiple files to be selected</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">url: string</td>
              <td class="c-table__cell">The end point to upload the files to, defaults to '/'</td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading">Events</h2>

        <p class="c-=paragraph">
          <strong class="u-text--loud u-text--italic">
            Events are only dispatched from a dropzone. Each event has an upload state and a list of files that are
            being uploaded.
          </strong>
        </p>

        <table class="c-table">
          <thead class="c-table__head">
            <tr class="c-table__row c-table__row--heading">
              <th class="c-table__cell">Name</th>
              <th class="c-table__cell">Description</th>
            </tr>
          </thead>
          <tbody class="c-table__body">
            <tr class="c-table__row">
              <td class="c-table__cell">uploading</td>
              <td class="c-table__cell">Dispatched when files are dropped into the dropzone</td>
            </tr>
            <tr class="c-table__row">
              <td class="c-table__cell">completed</td>
              <td class="c-table__cell">Dispatched when the upload is done, query the event message for errors</td>
            </tr>
          </tbody>
        </table>

        <h2 class="c-heading" id="css">
          CSS
        </h2>
        <h3 class="c-heading">Basic</h3>
        <blaze-demo
          language="html"
          code={`<div class="c-file-upload">
  <button class="c-button c-button--info">Upload file</button>
  <input type="file" />
</div>`}
        />

        <h3 class="c-heading">Drop zone</h3>
        <blaze-demo
          language="html"
          code={`<div class="c-file-upload c-file-upload--drop">
  Drop to upload your files
  <input type="file" />
</div>`}
        />
      </page-template>
    );
  }
}
