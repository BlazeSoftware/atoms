import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-file-upload',
})
export class FileUpload {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">File Upload</h2>
        <div class="c-file-upload">
          <button class="c-button c-button--info">Upload file</button>
          <input type="file" />
        </div>

        <div class="c-file-upload c-file-upload--drop">
          Drop to upload your files
          <input type="file" />
        </div>
      </section>
    );
  }
}
