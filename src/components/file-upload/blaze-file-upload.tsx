import { h, Component, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'blaze-file-upload',
})
export class FileUpload {
  @Prop()
  drop: boolean;

  @Prop()
  multiple: boolean;

  @Prop()
  url: string = '/';

  @Event({ eventName: 'uploaded' })
  onUploaded: EventEmitter;

  @Event({ eventName: 'uploading' })
  onUploading: EventEmitter;

  @State()
  files: File[] = [];

  async uploadFiles(e) {
    this.files = Array.from(e.target.files);

    if (this.drop) {
      try {
        this.onUploading.emit({ files: this.files });
        await Promise.all(
          this.files.map((file) =>
            fetch(this.url, {
              method: 'POST',
              body: file,
            })
          )
        );
        this.onUploaded.emit({ upload: true, files: this.files });
      } catch (error) {
        this.onUploaded.emit({ upload: false, error });
      }
    }
  }

  renderLabel() {
    if (!this.drop && this.files.length > 0) {
      if (this.multiple) return <span>{this.files.length} files</span>;
      return <span>{this.files[0].name}</span>;
    }
  }

  render() {
    const dropClass = this.drop ? 'c-file-upload--drop' : '';

    return (
      <div class={`c-file-upload ${dropClass}`}>
        <slot />

        {this.renderLabel()}

        <input type="file" multiple={this.multiple} onChange={(e) => this.uploadFiles(e)} />
      </div>
    );
  }
}
