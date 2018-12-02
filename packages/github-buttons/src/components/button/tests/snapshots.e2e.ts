import { snapIt } from '../../../test';

const component = 'github-button';
const snap = snapIt(component);

snap('emtpy', `<github-button></github-button>`);
snap('default options', `<github-button user="BlazeUI" repo="blaze"></github-button>`);
snap(
  'all the options',
  `<github-button user="BlazeUI" repo="blaze" type="follow" text="Join us" large count></github-button>`
);
