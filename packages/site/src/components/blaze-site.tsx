import '@blaze/atoms';
import { h, Component } from '@stencil/core';
import '@stencil/router';
import { allRoutes } from './routes/routes';

@Component({
  tag: 'blaze-site',
})
export class BlazeSite {
  render() {
    return (
      <div class="u-text">
        <site-header />
        <section class="o-container o-container--large u-pillar-box-medium">
          <stencil-router scrollTopOffset={0}>
            <stencil-route-switch>
              <stencil-route url="/" component="home-page" exact={true} />
              {allRoutes.map(({ routes }) =>
                routes.map((route) => (
                  <stencil-route url={route.url} component={route.component} componentProps={route.props} />
                ))
              )}
              <stencil-route component="page-not-found" />
            </stencil-route-switch>
          </stencil-router>
        </section>
      </div>
    );
  }
}
