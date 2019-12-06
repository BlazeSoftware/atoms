import Route from './Route';
import RouteProps from './RouteProps';

export const gettingStartedRoutes = [
  new Route({
    url: '/getting-started/install',
    component: 'install-page',
    props: new RouteProps({
      name: 'Install',
    }),
  }),
  new Route({
    url: '/getting-started/custombuild',
    component: 'custom-build',
    props: new RouteProps({
      name: 'Custom Build',
    }),
  }),
];

export const exampleRoutes = [
  new Route({
    url: '/examples/basket',
    component: 'example-basket',
    props: new RouteProps({
      name: 'Example Basket',
    }),
  }),
  new Route({
    url: '/examples/chat',
    component: 'example-chat',
    props: new RouteProps({
      name: 'Example Chat',
    }),
  }),
  new Route({
    url: '/examples/dashboard',
    component: 'example-dashboard',
    props: new RouteProps({
      name: 'Example Dashboard',
    }),
  }),
  new Route({
    url: '/examples/email',
    component: 'example-email',
    props: new RouteProps({
      name: 'Example Email',
    }),
  }),
  new Route({
    url: '/examples/login',
    component: 'example-login',
    props: new RouteProps({
      name: 'Example Login',
    }),
  }),
];

export const genericsRoutes = [
  new Route({
    url: '/generics/global',
    component: 'generics-global',
    props: new RouteProps({
      name: 'Global',
    }),
  }),
];

export const objectsRoutes = [
  new Route({
    url: '/objects/containers',
    component: 'objects-containers',
    props: new RouteProps({
      name: 'Containers',
    }),
  }),
  new Route({
    url: '/objects/grid',
    component: 'objects-grid',
    props: new RouteProps({
      name: 'Grid',
    }),
  }),
  new Route({
    url: '/objects/panels',
    component: 'objects-panels',
    props: new RouteProps({
      name: 'Panels',
    }),
  }),
  new Route({
    url: '/objects/images',
    component: 'objects-images',
    props: new RouteProps({
      name: 'Images',
    }),
  }),
  new Route({
    url: '/objects/drawers',
    component: 'objects-drawers',
    props: new RouteProps({
      name: 'Drawers',
    }),
  }),
  new Route({
    url: '/objects/medias',
    component: 'objects-medias',
    props: new RouteProps({
      name: 'Medias',
    }),
  }),
  new Route({
    url: '/objects/modals',
    component: 'objects-modals',
    props: new RouteProps({
      name: 'Modals',
    }),
  }),
];

export const utilsRoutes = [
  new Route({
    url: '/utils/alignment',
    component: 'utils-alignment',
    props: new RouteProps({
      name: 'Alignment',
    }),
  }),
  new Route({
    url: '/utils/boxing',
    component: 'utils-boxing',
    props: new RouteProps({
      name: 'Boxing',
    }),
  }),
  new Route({
    url: '/utils/elevation',
    component: 'utils-elevation',
    props: new RouteProps({
      name: 'Elevation',
    }),
  }),
  new Route({
    url: '/utils/sizes',
    component: 'utils-sizes',
    props: new RouteProps({
      name: 'Sizes',
    }),
  }),
  new Route({
    url: '/utils/visibility',
    component: 'utils-visibility',
    props: new RouteProps({
      name: 'Visibility',
    }),
  }),
];

export const componentsRoutes = [
  new Route({
    url: '/components/accordions',
    component: 'components-accordions',
    props: new RouteProps({
      name: 'Accordions',
    }),
  }),
  new Route({
    url: '/components/addresses',
    component: 'components-addresses',
    props: new RouteProps({
      name: 'Addresses',
    }),
  }),
  new Route({
    url: '/components/alerts',
    component: 'components-alerts',
    props: new RouteProps({
      name: 'Alerts',
    }),
  }),

  new Route({
    url: '/components/autocomplete',
    component: 'components-autocomplete',
    props: new RouteProps({
      name: 'Autocomplete',
    }),
  }),
  new Route({
    url: '/components/avatars',
    component: 'components-avatars',
    props: new RouteProps({
      name: 'Avatars',
    }),
  }),
  new Route({
    url: '/components/back-to-top',
    component: 'components-back-to-top',
    props: new RouteProps({
      name: 'Back to top',
    }),
  }),
  new Route({
    url: '/components/badges',
    component: 'components-badges',
    props: new RouteProps({
      name: 'Badges',
    }),
  }),
  new Route({
    url: '/components/breadcrumbs',
    component: 'components-breadcrumbs',
    props: new RouteProps({
      name: 'Breadcrumbs',
    }),
  }),
  new Route({
    url: '/components/buttons',
    component: 'components-buttons',
    props: new RouteProps({
      name: 'Buttons',
    }),
  }),
  new Route({
    url: '/components/calendars',
    component: 'components-calendars',
    props: new RouteProps({
      name: 'Calendars',
    }),
  }),
  new Route({
    url: '/components/cards',
    component: 'components-cards',
    props: new RouteProps({
      name: 'Cards',
    }),
  }),
  new Route({
    url: '/components/counter',
    component: 'components-counter',
    props: new RouteProps({
      name: 'Counter',
    }),
  }),
  new Route({
    url: '/components/divider',
    component: 'components-divider',
    props: new RouteProps({
      name: 'Divider',
    }),
  }),
  new Route({
    url: '/components/file-upload',
    component: 'components-file-upload',
    props: new RouteProps({
      name: 'File Upload',
    }),
  }),
  new Route({
    url: '/components/headings',
    component: 'components-headings',
    props: new RouteProps({
      name: 'Headings',
    }),
  }),
  new Route({
    url: '/components/inputs',
    component: 'components-inputs',
    props: new RouteProps({
      name: 'Inputs',
    }),
  }),
  new Route({
    url: '/components/lists',
    component: 'components-lists',
    props: new RouteProps({
      name: 'Lists',
    }),
  }),
  new Route({
    url: '/components/menus',
    component: 'components-menus',
    props: new RouteProps({
      name: 'Menus',
    }),
  }),
  new Route({
    url: '/components/overlays',
    component: 'components-overlays',
    props: new RouteProps({
      name: 'Overlays',
    }),
  }),
  new Route({
    url: '/components/pagination',
    component: 'components-pagination',
    props: new RouteProps({
      name: 'Pagination',
    }),
  }),
  new Route({
    url: '/components/progress',
    component: 'components-progress',
    props: new RouteProps({
      name: 'Progress',
    }),
  }),
  new Route({
    url: '/components/ranges',
    component: 'components-ranges',
    props: new RouteProps({
      name: 'Ranges',
    }),
  }),
  new Route({
    url: '/components/sticky',
    component: 'components-sticky',
    props: new RouteProps({
      name: 'Sticky',
    }),
  }),
  new Route({
    url: '/components/tables',
    component: 'components-tables',
    props: new RouteProps({
      name: 'Tables',
    }),
  }),
  new Route({
    url: '/components/tabs',
    component: 'components-tabs',
    props: new RouteProps({
      name: 'Tabs',
    }),
  }),
  new Route({
    url: '/components/timelines',
    component: 'components-timelines',
    props: new RouteProps({
      name: 'Timelines',
    }),
  }),
  new Route({
    url: '/components/toasts',
    component: 'components-toasts',
    props: new RouteProps({
      name: 'Toasts',
    }),
  }),
  new Route({
    url: '/components/toggles',
    component: 'components-toggles',
    props: new RouteProps({
      name: 'Toggles',
    }),
  }),
  new Route({
    url: '/components/tooltips',
    component: 'components-tooltips',
    props: new RouteProps({
      name: 'Tooltips',
    }),
  }),
  new Route({
    url: '/components/trees',
    component: 'components-trees',
    props: new RouteProps({
      name: 'Trees',
    }),
  }),
  new Route({
    url: '/components/typography',
    component: 'components-typography',
    props: new RouteProps({
      name: 'Typography',
    }),
  }),
];

export const allRoutes = [
  {
    title: 'Getting Started',
    description: 'Instructions on how to begin using the framework',
    routes: gettingStartedRoutes,
  },
  {
    title: 'Examples',
    description: 'Examples of using Blaze',
    routes: exampleRoutes,
  },
  {
    title: 'Generics',
    description: 'Generics provide basic resets',
    routes: genericsRoutes,
  },
  {
    title: 'Objects',
    description: 'Objects provide layout and structure',
    routes: objectsRoutes,
  },
  {
    title: 'Components',
    description: 'Components are the atomic features fully styled',
    routes: componentsRoutes,
  },
  {
    title: 'Utilities',
    description: 'Utilities are helpers that overrides the inherited styling',
    routes: utilsRoutes,
  },
];
