import { snapIt } from '../../../test';

const component = 'login';

describe(component, () => {
  const snap = snapIt(component);

  describe('renders', () => {
    snap('correctly', '<blaze-login></blaze-login>');

    snap(
      'all settings',
      `<blaze-login username-label="Email address: "
                    username-hint="The email address you used when you signed up"
                    username-type="email"
                    username-autocomplete="@me.com"
                    password-label="Password: "
                    password-hint="It's probably Pa55w0rd..."
                    remember-me-label="Remember me"
                    remember-me>
      </blaze-login>`
    );
  });
});
