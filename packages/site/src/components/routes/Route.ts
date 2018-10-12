import RouteProps from './RouteProps';

export default class Route {
  url: string;
  component: string;
  props: RouteProps;

  constructor({ url, component, props }) {
    this.url = url;
    this.component = component;
    this.props = props;
  }
}
