const routeNames = ['home', 'auth', 'map'] as const;

export type RouteName = (typeof routeNames)[number];

export type Route = {
  pathname: string;
  Label: string;
};

export const routes: Record<RouteName, Route> = {
  home: {
    pathname: '/',
    Label: 'Home',
  },
  map: {
    pathname: '/map',
    Label: 'Mapa',
  },
  auth: {
    pathname: '/auth',
    Label: 'Login',
  },
};
