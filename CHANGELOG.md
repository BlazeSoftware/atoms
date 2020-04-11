# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [11.0.0](https://github.com/BlazeSoftware/atoms/compare/v4.2.0...v11.0.0) (2020-04-11)

### ⚠ BREAKING CHANGES

- packages split into repos
- **atoms:** start and value attrs changed to start-value and end-value
- **site:** removed the camera atom
- molecules, gh-btns and toggles packages have been removed
- scss variables replaced with css custom properties, new ghost button selectors and removal of card menu modifier
- **buttons:** no more button atoms, use HTML elements instead
- **events:** Renamed all event names to drop the on prefix. Some events have also been totally renamed to make them more consistent.

### Features

- **ad:** typd ad ([7395b73](https://github.com/BlazeSoftware/atoms/commit/7395b73e8aee68d246deb74437e8092d3c36a57e))
- **atoms:** added file uploader atom ([41aa9be](https://github.com/BlazeSoftware/atoms/commit/41aa9beea0e100911ee0fd04a129715cd29f9b2f))
- **atoms:** autocomplete, timeline refactor ([5d6c364](https://github.com/BlazeSoftware/atoms/commit/5d6c3645a83cbd66fe24d2fc7e30a5bbe94cf5b6))
- **atoms:** calendar color type support ([cdea0b3](https://github.com/BlazeSoftware/atoms/commit/cdea0b3486039d94e54dbaa4a199648228d93e0c))
- **atoms:** calendar multiple selection ([f87ca20](https://github.com/BlazeSoftware/atoms/commit/f87ca20a5b9609bb410de531c787d3d67bc7a3a0))
- **atoms:** counter start method and attr changes ([7f865af](https://github.com/BlazeSoftware/atoms/commit/7f865af531b946b19789effb3d5c5dc3a6c07da6))
- **atoms:** new autocomplete component ([90e7545](https://github.com/BlazeSoftware/atoms/commit/90e754551ba49efb602458d784658d77b06898d0))
- **atoms:** new timeline component ([65f07ad](https://github.com/BlazeSoftware/atoms/commit/65f07add9b4c4d1b5b98794a9777ceeff0b05c8d))
- **back to top:** added backtotop event ([10002cd](https://github.com/BlazeSoftware/atoms/commit/10002cd8c6b60ef8bac28fc04765dd40eff17614))
- **back to top:** new back-to-top component ([bc9cb20](https://github.com/BlazeSoftware/atoms/commit/bc9cb204cbf7a8800830293915eddaf8be1a76a0))
- **buttons:** removal of buttons atom ([bdf08b5](https://github.com/BlazeSoftware/atoms/commit/bdf08b5e4f8a255c9b5b0d11730a494e0dfee0a6))
- **calendar:** new calendar component ([a6ce62a](https://github.com/BlazeSoftware/atoms/commit/a6ce62a391e8c28bfd76ce6e827655485b2c9af3))
- **camera:** fallback image capture with canvas ([b4bc7f7](https://github.com/BlazeSoftware/atoms/commit/b4bc7f7be6fa004b2f6549bb7a54ae88704d05a6))
- **camera:** new camera component ([b112fb7](https://github.com/BlazeSoftware/atoms/commit/b112fb7436adc621d810abb9cf1a02e8431143de))
- **ci:** added commitlint to github actions ([1129024](https://github.com/BlazeSoftware/atoms/commit/112902422d992e3a3bfe889341a2412c636d0ffe))
- **ci:** added standard-version release script ([8427653](https://github.com/BlazeSoftware/atoms/commit/84276536c81f70c203610bff4eae0e0d70ec2ebb))
- **counter:** added auto start to counter ([37807d8](https://github.com/BlazeSoftware/atoms/commit/37807d818e511078039cefd80844bcb04f8f3d10))
- **counter:** new counter component ([49c7d08](https://github.com/BlazeSoftware/atoms/commit/49c7d081ea2a529ecaf926039a5c9e9b5a615c8f))
- **css:** adds animated progress bar for timed slides ([13e97d4](https://github.com/BlazeSoftware/atoms/commit/13e97d48e0c36e69795c9212d80886639846e5b9))
- **css:** new file uploader component ([f3b6e81](https://github.com/BlazeSoftware/atoms/commit/f3b6e8139b41733f952293a5855b21db51600b3a))
- **css:** repaying debt back into the framework from togglz ([f2ea0f9](https://github.com/BlazeSoftware/atoms/commit/f2ea0f9b0bb1791f4d5e24ea401f80f3f1b24f66))
- **divider:** added type for dashed, dotted and double styles ([64445e2](https://github.com/BlazeSoftware/atoms/commit/64445e2a1c3ce2ca19232abe8730b549ed16650b))
- **divider:** new divider atom component ([7fb19e1](https://github.com/BlazeSoftware/atoms/commit/7fb19e1cc0d95a3b69c5d38161095221b4f4740c))
- **divider:** new divider component ([89fc323](https://github.com/BlazeSoftware/atoms/commit/89fc3238c8169e8c5c9eb356f353f4a1b1be08af))
- **everything:** stencil update, tests, formatting, async methods ([315f24f](https://github.com/BlazeSoftware/atoms/commit/315f24f328830185d756d90c947d8b906da9987d))
- **feature toggles:** new feature toggles package ([eb4a9a8](https://github.com/BlazeSoftware/atoms/commit/eb4a9a830e5d31ef53e0cc4405fbace1ce0511ce))
- **login molecule:** added validation helper functions ([6494bd0](https://github.com/BlazeSoftware/atoms/commit/6494bd01eceec9d72b11a64647596e8955cc58ce))
- **molecules:** new molecule package ([3f8b65a](https://github.com/BlazeSoftware/atoms/commit/3f8b65a7448a538c13076576a05a71216c80d017))
- **scss:** new timeline component ([df506af](https://github.com/BlazeSoftware/atoms/commit/df506af6d232baf00ede3057aee4bed6de524076))
- **site:** 404 and robots.txt files ([5971f7e](https://github.com/BlazeSoftware/atoms/commit/5971f7e20ebab8066a8b430042cd8d724cfc62f8))
- **site:** add website to the monorepo ([939726f](https://github.com/BlazeSoftware/atoms/commit/939726f8ce2c6abe399688ad99b7fd19e7f008cd))
- **site:** added a login example ([35930c6](https://github.com/BlazeSoftware/atoms/commit/35930c6d844fa2b351539ea97926b02c30d7ceff))
- **site:** added chat example ([c8005f0](https://github.com/BlazeSoftware/atoms/commit/c8005f00a115e1fc1b49ec255ebb4623888f0c44))
- **site:** added email example ([3663561](https://github.com/BlazeSoftware/atoms/commit/3663561e79b077560d50aec117128e2d5ae27f2a))
- **site:** added latest versions to the instructions ([453b72b](https://github.com/BlazeSoftware/atoms/commit/453b72ba3ca0816709b54725347c3430254f4a95))
- **site:** added new dashboard example ([4b8c624](https://github.com/BlazeSoftware/atoms/commit/4b8c6249797c66796ccde4ddf1b6734f2873c2a4))
- **site:** carbon ad added to site nav bar ([4bbfb65](https://github.com/BlazeSoftware/atoms/commit/4bbfb6588e2c8027d8e3eee916418058e0186fcc))
- **site:** configuring sw better ([a4bd567](https://github.com/BlazeSoftware/atoms/commit/a4bd56795cd106621d1ac679c742e872ce5f734e))
- **site:** example checkout ([4191bff](https://github.com/BlazeSoftware/atoms/commit/4191bff265ef27f9e82fa0b53f6558b3bd151156))
- **site:** file upload page ([42c10c3](https://github.com/BlazeSoftware/atoms/commit/42c10c3e4867f25cdc0421e38406f3ce054af68a))
- css variables ([d798723](https://github.com/BlazeSoftware/atoms/commit/d79872380e7e78b1b706c44e965a2ed2311ac9d9))
- removal of molecules, gh-btns and toggles ([f9401e5](https://github.com/BlazeSoftware/atoms/commit/f9401e5bcd937ae8e3a50e804087e73c6f7e722b))
- updated stencil to v1 and fixed some bugs ([c9700e2](https://github.com/BlazeSoftware/atoms/commit/c9700e255249da49c7fc26370671838e85b85e53))
- **sticky:** new sticky component ([f7694c6](https://github.com/BlazeSoftware/atoms/commit/f7694c6a6cc280454365c5208872552735b2231b))
- **toggles atom:** added watch to toggled attribute ([fb27f36](https://github.com/BlazeSoftware/atoms/commit/fb27f362d1052554460ea81edf2cc4f0503e73f5))
- **visbility utilitiy:** visibility responsive suffixes ([87e7219](https://github.com/BlazeSoftware/atoms/commit/87e7219ce81f0ae89fa0c087058a9fc3b71e8a02))
- **visibility utility:** responsive suffixes ([72109c1](https://github.com/BlazeSoftware/atoms/commit/72109c117affe356c5b7055862ea1b7f8d801d02))

### Bug Fixes

- **ad:** link colour ([5015a52](https://github.com/BlazeSoftware/atoms/commit/5015a524d79f253d275a2301c586cf8e34a7a19b))
- **atoms:** remove shadow from calendar ([c9fd686](https://github.com/BlazeSoftware/atoms/commit/c9fd68635859bbad37d1b82dca061f6b0b37b0f8))
- **atoms:** skipping test to fix build ([8888f39](https://github.com/BlazeSoftware/atoms/commit/8888f39d753f217e53aa517e5630d16cffcc2e27))
- **atoms:** stop calendar day buttons jumping around ([8925328](https://github.com/BlazeSoftware/atoms/commit/8925328a5de55ffeb4489356c5bcbab7af9a8615))
- **atoms:** updated counter demo ([37a1fac](https://github.com/BlazeSoftware/atoms/commit/37a1fac3749b9b71dfec4ac7ec7340cef89b8aff))
- **back to top:** height check fix ([1bcd739](https://github.com/BlazeSoftware/atoms/commit/1bcd7396f8d2065b68f7ab967bafaf70f7da7980))
- **camera:** add camera to docs and refactor scss structure ([c986e7c](https://github.com/BlazeSoftware/atoms/commit/c986e7cf00c79d15b4d34447c9cc04e899d426c6))
- **camera:** canvas fallback now returns blob ([90eaa6a](https://github.com/BlazeSoftware/atoms/commit/90eaa6ad15bfb5a32711b6bc4285f75ce4380a30))
- **camera:** now works with ios ([be252ad](https://github.com/BlazeSoftware/atoms/commit/be252addb7aaa34eb29c976f53f06941a3e3e8a7))
- **camera:** turns off the camera when the component is unloaded ([7afe8a8](https://github.com/BlazeSoftware/atoms/commit/7afe8a8b8e4f6106cc0dde568006188771bb2223))
- **camera:** unsupported scenario and stencil update ([8b34376](https://github.com/BlazeSoftware/atoms/commit/8b3437666e5ba70db99b2c0d552cd11542c1c720))
- **ci:** added path to build path ([567f2fe](https://github.com/BlazeSoftware/atoms/commit/567f2fe8346a971061517fe660f0c30e00bc9d67))
- **css:** updated global webkit text size adjust ([a7308d5](https://github.com/BlazeSoftware/atoms/commit/a7308d59a752d1fcd896b6365b921a86573a6a6b))
- **demo:** fix insecure request ([ddc2dad](https://github.com/BlazeSoftware/atoms/commit/ddc2dadd9ed796056ee1a1e9146ceee81526a30e))
- **demo:** turn off contenteditable when not demoing ([151ac6a](https://github.com/BlazeSoftware/atoms/commit/151ac6a4a24dc461b97659891efaa9092cbe4385))
- **divider:** tweak to the divider dashed and dotted styles ([b16fa38](https://github.com/BlazeSoftware/atoms/commit/b16fa38e5d260363a37f7675bf5ee2daac4f4d3c))
- **docs:** spelling mistake ([25b58cd](https://github.com/BlazeSoftware/atoms/commit/25b58cdd9d1400d8bf77f492c7a2d1062512f1df))
- **gitpod:** fix wrong startup script ([2a174d6](https://github.com/BlazeSoftware/atoms/commit/2a174d6121a4f3f27d3782c3d35218d990b008df))
- **homepage:** wrap fetch in isserver utility ([dd81018](https://github.com/BlazeSoftware/atoms/commit/dd810184fda5c597fa9627811400a26c5512791f))
- **package:** install latest blaze packages to dev deps ([ffe0092](https://github.com/BlazeSoftware/atoms/commit/ffe00923afe108d31bd9f563f9390ec7ff61ec74))
- **package:** remove dev build task - it wasnt working ([060e342](https://github.com/BlazeSoftware/atoms/commit/060e342b2e9f29898c32bb924f0fc81dbb72a7df))
- **package:** remove yarn command from dev task in package.json ([11c39aa](https://github.com/BlazeSoftware/atoms/commit/11c39aa2b0f5ec6d7f24496ea239ed2e18143785))
- **readme:** stencil documentation link update ([ea09146](https://github.com/BlazeSoftware/atoms/commit/ea091469a896f12edb7591193ccf1ddb3a8b3e45))
- **scss:** remove colors.css stylesheet link ([05b5729](https://github.com/BlazeSoftware/atoms/commit/05b5729e2a890d2fabb383814fe936f568019010))
- **scss:** tweak calendar styling ([4b95d49](https://github.com/BlazeSoftware/atoms/commit/4b95d4938dbb12a5f1691389228f1f468bb89665))
- **site:** added catch around latest version calls ([ea9e74d](https://github.com/BlazeSoftware/atoms/commit/ea9e74dd75322e1923cd130768e7df9e6f7160c1))
- **site:** css unpkg link ([6748c66](https://github.com/BlazeSoftware/atoms/commit/6748c66f9a4203ea20a5fdeb5d523d9d3c043ae0))
- **site:** dashboard chart fix ([428c17a](https://github.com/BlazeSoftware/atoms/commit/428c17aa738976bf51049268b81724b49a2e10b4))
- **site:** font size ([b283975](https://github.com/BlazeSoftware/atoms/commit/b2839754103eddf0ebfea5587ab57c1daabfd41b))
- **site:** gradient text on dashboard example ([6d3af9a](https://github.com/BlazeSoftware/atoms/commit/6d3af9a8e474642f365242524668a94506bd0a90))
- **site:** improved install page load time ([bd9dffe](https://github.com/BlazeSoftware/atoms/commit/bd9dffe5d2abe08a509feefa1e97335c345e0472))
- import states into inputs ([f0da16a](https://github.com/BlazeSoftware/atoms/commit/f0da16ac59b0bcb7d37c234d86ac604172a1573c)), closes [#219](https://github.com/BlazeSoftware/atoms/issues/219)
- **site:** increase code font size ([19c34a0](https://github.com/BlazeSoftware/atoms/commit/19c34a0ff20f513473ccca102c6630d02b74e429))
- **site:** reference correct atoms version ([f0be056](https://github.com/BlazeSoftware/atoms/commit/f0be056c134c52291365bde38f5975a3469126c9))
- **sticky:** replace window load with willupdate hook ([a901034](https://github.com/BlazeSoftware/atoms/commit/a901034df8e7daa4cc458079379b53c290df7263))
- **sw:** remove sw from site ([0e8c9cc](https://github.com/BlazeSoftware/atoms/commit/0e8c9cc71ba4aff714704254085d1c4610eb8ee9))
- **toggle atom:** stop emitting change event on attr change ([eb91463](https://github.com/BlazeSoftware/atoms/commit/eb9146386936a4250745155b33577d66dab7678c))
- **toggles:** error catch around removing child element ([356d3e9](https://github.com/BlazeSoftware/atoms/commit/356d3e9b86b5e625ffcaafffcf8c39ccb9a4cbf0))

* to new atom repo ([dbab922](https://github.com/BlazeSoftware/atoms/commit/dbab9222f37b436290354650637eba6d6d09fe21))
* **events:** rename all events to drop the on prefix ([96d91bd](https://github.com/BlazeSoftware/atoms/commit/96d91bdb68eb53f142505422db38e0482d320fd2))
* **site:** tweaks to site and removal of camera atom ([b512ff5](https://github.com/BlazeSoftware/atoms/commit/b512ff54db896bf7196ea3d224daa4c0229211b3))

# [9.2.0](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@9.1.0...@blaze/atoms@9.2.0) (2019-12-06)

### Bug Fixes

- **atoms:** updated counter demo ([37a1fac](https://github.com/BlazeSoftware/blaze/commit/37a1fac3749b9b71dfec4ac7ec7340cef89b8aff))

### Features

- **atoms:** added file uploader atom ([41aa9be](https://github.com/BlazeSoftware/blaze/commit/41aa9beea0e100911ee0fd04a129715cd29f9b2f))

# [9.1.0](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@9.0.2...@blaze/atoms@9.1.0) (2019-11-25)

### Features

- **counter:** added auto start to counter ([37807d8](https://github.com/BlazeSoftware/blaze/commit/37807d818e511078039cefd80844bcb04f8f3d10))

## [9.0.2](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@9.0.1...@blaze/atoms@9.0.2) (2019-11-14)

**Note:** Version bump only for package @blaze/atoms

## [9.0.1](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@9.0.0...@blaze/atoms@9.0.1) (2019-11-14)

**Note:** Version bump only for package @blaze/atoms

# [9.0.0](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@8.0.0...@blaze/atoms@9.0.0) (2019-11-13)

### Features

- **atoms:** counter start method and attr changes ([7f865af](https://github.com/BlazeSoftware/blaze/commit/7f865af531b946b19789effb3d5c5dc3a6c07da6))

### BREAKING CHANGES

- **atoms:** start and value attrs changed to start-value and end-value

# [8.0.0](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@7.0.0...@blaze/atoms@8.0.0) (2019-11-12)

### Code Refactoring

- **site:** tweaks to site and removal of camera atom ([b512ff5](https://github.com/BlazeSoftware/blaze/commit/b512ff54db896bf7196ea3d224daa4c0229211b3))

### Features

- updated stencil to v1 and fixed some bugs ([c9700e2](https://github.com/BlazeSoftware/blaze/commit/c9700e255249da49c7fc26370671838e85b85e53))

### BREAKING CHANGES

- **site:** removed the camera atom

# [7.0.0](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@6.2.1...@blaze/atoms@7.0.0) (2019-05-29)

### Features

- removal of molecules, gh-btns and toggles ([f9401e5](https://github.com/BlazeSoftware/blaze/commit/f9401e5))

### BREAKING CHANGES

- molecules, gh-btns and toggles packages have been removed

## [6.2.1](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@6.2.0...@blaze/atoms@6.2.1) (2019-05-29)

### Bug Fixes

- **site:** increase code font size ([19c34a0](https://github.com/BlazeSoftware/blaze/commit/19c34a0))

# [6.2.0](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@6.1.0...@blaze/atoms@6.2.0) (2019-04-25)

### Features

- **site:** added latest versions to the instructions ([453b72b](https://github.com/BlazeSoftware/blaze/commit/453b72b))

# [6.1.0](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@6.0.2...@blaze/atoms@6.1.0) (2019-03-14)

### Features

- **visibility utility:** responsive suffixes ([72109c1](https://github.com/BlazeSoftware/blaze/commit/72109c1))

## [6.0.2](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@6.0.1...@blaze/atoms@6.0.2) (2019-03-12)

**Note:** Version bump only for package @blaze/atoms

## [6.0.1](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@6.0.0...@blaze/atoms@6.0.1) (2019-03-07)

### Bug Fixes

- **toggles:** error catch around removing child element ([356d3e9](https://github.com/BlazeSoftware/blaze/commit/356d3e9))

# [6.0.0](https://github.com/BlazeSoftware/blaze/compare/@blaze/atoms@5.2.1...@blaze/atoms@6.0.0) (2019-03-06)

### Features

- **buttons:** removal of buttons atom ([bdf08b5](https://github.com/BlazeSoftware/blaze/commit/bdf08b5))

### BREAKING CHANGES

- **buttons:** no more button atoms, use HTML elements instead

## [5.2.1](https://github.com/BlazeUI/blaze/compare/@blaze/atoms@5.2.0...@blaze/atoms@5.2.1) (2019-02-06)

### Bug Fixes

- **toggle atom:** stop emitting change event on attr change ([eb91463](https://github.com/BlazeUI/blaze/commit/eb91463))

# [5.2.0](https://github.com/BlazeUI/blaze/compare/@blaze/atoms@5.1.1...@blaze/atoms@5.2.0) (2019-02-05)

### Features

- **toggles atom:** added watch to toggled attribute ([fb27f36](https://github.com/BlazeUI/blaze/commit/fb27f36))

## [5.1.1](https://github.com/BlazeUI/blaze/compare/@blaze/atoms@5.1.0...@blaze/atoms@5.1.1) (2018-12-19)

**Note:** Version bump only for package @blaze/atoms

# [5.1.0](https://github.com/BlazeUI/blaze/compare/@blaze/atoms@5.0.2...@blaze/atoms@5.1.0) (2018-12-19)

### Features

- **login molecule:** added validation helper functions ([6494bd0](https://github.com/BlazeUI/blaze/commit/6494bd0))

## [5.0.2](https://github.com/BlazeUI/blaze/compare/@blaze/atoms@5.0.1...@blaze/atoms@5.0.2) (2018-12-12)

**Note:** Version bump only for package @blaze/atoms

## [5.0.1](https://github.com/BlazeUI/blaze/compare/@blaze/atoms@5.0.0...@blaze/atoms@5.0.1) (2018-12-12)

**Note:** Version bump only for package @blaze/atoms

# 5.0.0 (2018-12-03)

### Bug Fixes

- **atoms:** remove shadow from calendar ([c9fd686](https://github.com/BlazeUI/blaze/commit/c9fd686))
- **atoms:** skipping test to fix build ([8888f39](https://github.com/BlazeUI/blaze/commit/8888f39))
- **atoms:** stop calendar day buttons jumping around ([8925328](https://github.com/BlazeUI/blaze/commit/8925328))
- **back to top:** height check fix ([1bcd739](https://github.com/BlazeUI/blaze/commit/1bcd739))
- **camera:** add camera to docs and refactor scss structure ([c986e7c](https://github.com/BlazeUI/blaze/commit/c986e7c))
- **camera:** canvas fallback now returns blob ([90eaa6a](https://github.com/BlazeUI/blaze/commit/90eaa6a))
- **camera:** now works with ios ([be252ad](https://github.com/BlazeUI/blaze/commit/be252ad))
- **camera:** turns off the camera when the component is unloaded ([7afe8a8](https://github.com/BlazeUI/blaze/commit/7afe8a8))
- **camera:** unsupported scenario and stencil update ([8b34376](https://github.com/BlazeUI/blaze/commit/8b34376))
- **demo:** turn off contenteditable when not demoing ([151ac6a](https://github.com/BlazeUI/blaze/commit/151ac6a))
- **readme:** stencil documentation link update ([ea09146](https://github.com/BlazeUI/blaze/commit/ea09146))
- **scss:** tweak calendar styling ([4b95d49](https://github.com/BlazeUI/blaze/commit/4b95d49))
- **sticky:** replace window load with willupdate hook ([a901034](https://github.com/BlazeUI/blaze/commit/a901034))

### Code Refactoring

- **events:** rename all events to drop the on prefix ([96d91bd](https://github.com/BlazeUI/blaze/commit/96d91bd))

### Features

- **atoms:** autocomplete, timeline refactor ([5d6c364](https://github.com/BlazeUI/blaze/commit/5d6c364))
- **atoms:** calendar color type support ([cdea0b3](https://github.com/BlazeUI/blaze/commit/cdea0b3))
- **atoms:** calendar multiple selection ([f87ca20](https://github.com/BlazeUI/blaze/commit/f87ca20))
- **atoms:** new autocomplete component ([90e7545](https://github.com/BlazeUI/blaze/commit/90e7545))
- **atoms:** new timeline component ([65f07ad](https://github.com/BlazeUI/blaze/commit/65f07ad))
- **back to top:** added backtotop event ([10002cd](https://github.com/BlazeUI/blaze/commit/10002cd))
- **back to top:** new back-to-top component ([bc9cb20](https://github.com/BlazeUI/blaze/commit/bc9cb20))
- **calendar:** new calendar component ([a6ce62a](https://github.com/BlazeUI/blaze/commit/a6ce62a))
- **camera:** fallback image capture with canvas ([b4bc7f7](https://github.com/BlazeUI/blaze/commit/b4bc7f7))
- **camera:** new camera component ([b112fb7](https://github.com/BlazeUI/blaze/commit/b112fb7))
- **counter:** new counter component ([49c7d08](https://github.com/BlazeUI/blaze/commit/49c7d08))
- **divider:** added type for dashed, dotted and double styles ([64445e2](https://github.com/BlazeUI/blaze/commit/64445e2))
- **divider:** new divider atom component ([7fb19e1](https://github.com/BlazeUI/blaze/commit/7fb19e1))
- **divider:** new divider component ([89fc323](https://github.com/BlazeUI/blaze/commit/89fc323))
- **everything:** stencil update, tests, formatting, async methods ([315f24f](https://github.com/BlazeUI/blaze/commit/315f24f))
- **scss:** new timeline component ([df506af](https://github.com/BlazeUI/blaze/commit/df506af))
- **sticky:** new sticky component ([f7694c6](https://github.com/BlazeUI/blaze/commit/f7694c6))

### BREAKING CHANGES

- **events:** Renamed all event names to drop the on prefix. Some events have also been totally renamed to make them more consistent.

## [3.5.3](https://github.com/BlazeUI/blaze/compare/blaze-atoms@3.5.2...blaze-atoms@3.5.3) (2018-11-15)

**Note:** Version bump only for package blaze-atoms

## [3.5.2](https://github.com/BlazeUI/blaze/compare/blaze-atoms@3.5.1...blaze-atoms@3.5.2) (2018-11-06)

### Bug Fixes

- **demo:** turn off contenteditable when not demoing ([151ac6a](https://github.com/BlazeUI/blaze/commit/151ac6a))

## [3.5.1](https://github.com/BlazeUI/blaze/compare/blaze-atoms@3.5.0...blaze-atoms@3.5.1) (2018-11-06)

**Note:** Version bump only for package blaze-atoms

# [3.5.0](https://github.com/BlazeUI/blaze/compare/blaze-atoms@3.4.1...blaze-atoms@3.5.0) (2018-11-05)

### Features

- **counter:** new counter component ([49c7d08](https://github.com/BlazeUI/blaze/commit/49c7d08))

## [3.4.1](https://github.com/BlazeUI/blaze/compare/blaze-atoms@3.4.0...blaze-atoms@3.4.1) (2018-11-02)

### Bug Fixes

- **back to top:** height check fix ([1bcd739](https://github.com/BlazeUI/blaze/commit/1bcd739))
- **camera:** turns off the camera when the component is unloaded ([7afe8a8](https://github.com/BlazeUI/blaze/commit/7afe8a8))

# [3.4.0](https://github.com/BlazeUI/blaze/compare/blaze-atoms@3.3.2...blaze-atoms@3.4.0) (2018-11-01)

### Features

- **back to top:** added backtotop event ([10002cd](https://github.com/BlazeUI/blaze/commit/10002cd))
- **back to top:** new back-to-top component ([bc9cb20](https://github.com/BlazeUI/blaze/commit/bc9cb20))

## [3.3.2](https://github.com/BlazeUI/blaze/compare/blaze-atoms@3.3.1...blaze-atoms@3.3.2) (2018-10-31)

### Bug Fixes

- **camera:** unsupported scenario and stencil update ([8b34376](https://github.com/BlazeUI/blaze/commit/8b34376))

## [3.3.1](https://github.com/BlazeUI/blaze/compare/blaze-atoms@3.3.0...blaze-atoms@3.3.1) (2018-10-31)

### Bug Fixes

- **camera:** add camera to docs and refactor scss structure ([c986e7c](https://github.com/BlazeUI/blaze/commit/c986e7c))

# [3.3.0](https://github.com/BlazeUI/blaze/compare/blaze-atoms@3.2.0...blaze-atoms@3.3.0) (2018-10-30)

### Bug Fixes

- **camera:** canvas fallback now returns blob ([90eaa6a](https://github.com/BlazeUI/blaze/commit/90eaa6a))
- **camera:** now works with ios ([be252ad](https://github.com/BlazeUI/blaze/commit/be252ad))

### Features

- **camera:** fallback image capture with canvas ([b4bc7f7](https://github.com/BlazeUI/blaze/commit/b4bc7f7))
- **camera:** new camera component ([b112fb7](https://github.com/BlazeUI/blaze/commit/b112fb7))

# [3.2.0](https://github.com/BlazeUI/blaze/compare/blaze-atoms@3.1.0...blaze-atoms@3.2.0) (2018-10-24)

### Bug Fixes

- **sticky:** replace window load with willupdate hook ([a901034](https://github.com/BlazeUI/blaze/commit/a901034))

### Features

- **divider:** added type for dashed, dotted and double styles ([64445e2](https://github.com/BlazeUI/blaze/commit/64445e2))
- **divider:** new divider atom component ([7fb19e1](https://github.com/BlazeUI/blaze/commit/7fb19e1))
- **divider:** new divider component ([89fc323](https://github.com/BlazeUI/blaze/commit/89fc323))

# [3.1.0](https://github.com/BlazeUI/blaze/compare/blaze-atoms@3.0.0...blaze-atoms@3.1.0) (2018-10-24)

### Features

- **sticky:** new sticky component ([f7694c6](https://github.com/BlazeUI/blaze/commit/f7694c6))

# [3.0.0](https://github.com/BlazeUI/blaze/compare/blaze-atoms@2.2.1...blaze-atoms@3.0.0) (2018-10-22)

### Code Refactoring

- **events:** rename all events to drop the on prefix ([96d91bd](https://github.com/BlazeUI/blaze/commit/96d91bd))

### BREAKING CHANGES

- **events:** Renamed all event names to drop the on prefix. Some events have also been totally renamed to make them more consistent.

## [2.2.1](https://github.com/BlazeUI/blaze/compare/blaze-atoms@2.2.0...blaze-atoms@2.2.1) (2018-10-22)

**Note:** Version bump only for package blaze-atoms
