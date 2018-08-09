import { Component } from '@stencil/core';
import { allRoutes } from './routes/routes';

@Component({
  tag: 'blaze-site'
})
export class BlazeSite {
  render() {
    return (
      <div class="u-text">
        <site-header />
        <main>
          <stencil-router id="blaze-content">

            <stencil-route url="/" component="home-page" exact={true} />

            {allRoutes.map(({ routes }) => (
              routes.map(route => (
                <stencil-route url={route.url}
                  component={route.component}
                  componentProps={route.props}
                />
              ))
            ))}

          </stencil-router>
        </main>
      </div>
    );
  }
}
