import { h, Component } from '@stencil/core';
import { allRoutes } from '../routes/routes';
import Route from '../routes/Route';

@Component({
  tag: 'site-links',
})
export class SiteLinks {
  navSection({ title, description, routes }: { title: string; description: string; routes: Array<Route> }) {
    const navLinks = (routes: Array<Route>) => {
      return routes.map((route) => (
        <li class="c-list__item">
          <stencil-route-link url={route.url} anchorClass="c-link">
            {route.props.name}
          </stencil-route-link>
        </li>
      ));
    };

    return (
      <section>
        <h3 aria-label={`${title}, ${description}`} class="c-heading u-large">
          {title}
        </h3>
        <ul class="c-list c-list--unstyled">{navLinks(routes)}</ul>
      </section>
    );
  }

  render() {
    return (
      <nav class="u-text">
        <section>
          <carbon-ad />
          <ul class="c-list c-list--unstyled">
            <li class="c-list__item u-letter-box u-letter-box-small">
              <a class="c-link" href="https://github.com/BlazeSoftware/blaze/archive/master.zip" download="">
                <i class="fas fa-download" /> Download Code
              </a>
            </li>
            <li class="c-list__item u-letter-box u-letter-box-small">
              <a class="c-link" href="https://github.com/BlazeSoftware/blaze">
                <i class="fas fa-code" /> View Source
              </a>
            </li>
          </ul>
        </section>
        {allRoutes.map((area) => this.navSection(area))}
      </nav>
    );
  }
}
