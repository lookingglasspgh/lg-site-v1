export const RouteList = {
  HOME: '/',
  ARTIFACTS: '/artifacts',
  CONTRIBUTORS: '/contributors',
  LEARNING: '/learning-resources',
  STATEMENT: '/statement-of-purpose',
  SUPPORT: '/support',
  WORK: '/work-in-progress',
};

export const NavBarRoutes = [
  {
    title: 'Statement of Purpose',
    path: RouteList.STATEMENT,
  },
  {
    title: 'Artifacts',
    path: RouteList.ARTIFACTS,
  },
  {
    title: 'Work in Progress',
    path: RouteList.WORK,
  },
  {
    title: 'More',
    listRoutes: [
      {
        title: 'Contributors',
        path: RouteList.CONTRIBUTORS,
      },
      {
        title: 'Ways to Support',
        path: RouteList.SUPPORT,
      },
      {
        title: 'Learning Resources',
        path: RouteList.LEARNING,
      },
    ],
  },
];

export const MobileMenuRoutes = [
  {
    title: 'Statement of Purpose',
    path: RouteList.STATEMENT,
  },
  {
    title: 'Artifacts',
    path: RouteList.ARTIFACTS,
  },
  {
    title: 'Work in Progress',
    path: RouteList.WORK,
  },
  {
    title: 'Contributors',
    path: RouteList.CONTRIBUTORS,
  },
  {
    title: 'Ways to Support',
    path: RouteList.SUPPORT,
  },
  {
    title: 'Learning Resources',
    path: RouteList.LEARNING,
  },
];
