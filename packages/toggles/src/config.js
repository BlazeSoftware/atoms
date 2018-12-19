FeatureToggles = {
  config: {},

  set(config) {
    this.config = {
      ...this.config,
      ...config,
    };

    dispatchEvent(
      new CustomEvent('featureToggleChange', {
        detail: {
          toggles: this.config,
        },
      })
    );

    return this.config;
  },
};
