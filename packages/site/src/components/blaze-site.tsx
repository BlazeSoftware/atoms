import '@blaze/atoms';
import { Component } from '@stencil/core';
import '@stencil/router';
import { allRoutes } from './routes/routes';

@Component({
  tag: 'blaze-site',
})
export class BlazeSite {
  render() {
    const christmasClass = new Date().getMonth() === 11 ? 'is-christmas' : '';

    return (
      <div class={`u-text ${christmasClass}`}>
        <site-header />
        <stencil-router>
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
      </div>
    );
  }
}
