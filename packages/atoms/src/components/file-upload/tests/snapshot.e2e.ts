import { snapIt } from '../../../test';

const component = 'file-upload';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap(
      'correctly',
      `<blaze-file-upload>
        <button class="c-button c-button--info">Upload files</button>
      </blaze-file-upload>`
    );

    snap(
      'dropzone correctly',
      `<blaze-file-upload drop multiple accept=".md">
        Drop to upload your files
      </blaze-file-upload>`
    );
  });
});
