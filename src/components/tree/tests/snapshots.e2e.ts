import { snapIt } from '../../../test';

const component = 'tree';

describe(component, () => {
  const snap = snapIt(component);

  const html = `
<blaze-tree>
  <blaze-tree-leaf>File 1</blaze-tree-leaf>
  <blaze-tree-leaf>File 2</blaze-tree-leaf>
  <blaze-tree-leaf>File 3</blaze-tree-leaf>
  <blaze-tree-branch>
    <span slot="branch">Directory 1</span>
    <blaze-tree-leaf slot="leaf">File 4</blaze-tree-leaf>
    <blaze-tree-leaf slot="leaf">File 5</blaze-tree-leaf>
    <blaze-tree-leaf slot="leaf">File 6</blaze-tree-leaf>
  </blaze-tree-branch>
  <blaze-tree-branch>
    <span slot="branch">Directory 2</span>
    <blaze-tree-leaf slot="leaf">File 7</blaze-tree-leaf>
    <blaze-tree-leaf slot="leaf">File 8</blaze-tree-leaf>
    <blaze-tree-leaf slot="leaf">File 9</blaze-tree-leaf>
    <blaze-tree-branch slot="leaf">
      <span slot="branch">Sub-directory 1</span>
      <blaze-tree-leaf slot="leaf">File 10</blaze-tree-leaf>
      <blaze-tree-leaf slot="leaf">File 11</blaze-tree-leaf>
      <blaze-tree-leaf slot="leaf">File 12</blaze-tree-leaf>
    </blaze-tree-branch>
  </blaze-tree-branch>
</blaze-tree>
`;

  describe('renders', () => {
    snap('tree', html);
  });
});
