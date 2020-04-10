import { Image } from '../blaze-image';

describe('image', () => {
  let image;

  beforeEach(() => {
    image = new Image();
  });

  test('generate default src value', () => {
    expect(image.generateSrc()).toBe('https://source.unsplash.com/random/');
  });

  test('use provided src', () => {
    image.src = 'https://another.com/test.png';
    expect(image.generateSrc()).toBe(image.src);
  });

  test('uses width and height to make size', () => {
    image.width = 100;
    image.height = 200;
    expect(image.generateSrc()).toBe('https://source.unsplash.com/random/100x200/');
  });

  test('specific photo', () => {
    image.width = 100;
    image.height = 200;
    image.photo = 'TESTID';
    expect(image.generateSrc()).toBe('https://source.unsplash.com/TESTID/100x200/');
  });

  test('appends filter', () => {
    image.width = 100;
    image.height = 200;
    image.filter = 'mountains,snow';
    expect(image.generateSrc()).toBe('https://source.unsplash.com/random/100x200/?mountains,snow');
  });

  test('narrow sample to collection', () => {
    image.width = 100;
    image.height = 200;
    image.filter = 'mountains,snow';
    image.collection = 'TESTCOL';
    expect(image.generateSrc()).toBe('https://source.unsplash.com/collection/TESTCOL/100x200/?mountains,snow');
  });

  test('narrow sample to user', () => {
    image.width = 100;
    image.height = 200;
    image.filter = 'mountains,snow';
    image.user = 'TESTUSER';
    expect(image.generateSrc()).toBe('https://source.unsplash.com/user/TESTUSER/100x200/?mountains,snow');
  });

  test('narrow sample to likes by user', () => {
    image.width = 100;
    image.height = 200;
    image.filter = 'mountains,snow';
    image.user = 'TESTUSER';
    image.likes = true;
    expect(image.generateSrc()).toBe('https://source.unsplash.com/user/TESTUSER/likes/100x200/?mountains,snow');
  });
});

// @Prop() width: number;
// @Prop() height: number;
// @Prop() photo: string;        // specific photo
// @Prop() user: string;         // random photo from a user
// @Prop() likes: boolean;       // random photo from a user's likes
// @Prop() collection: string;   // random photo from a collection
// @Prop() filter: string = '';  // filter based on search term
