import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '9d0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '908'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'fff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '0ca'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'a7e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'fec'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '8f9'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f46'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '48c'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '8f4'),
            routes: [
              {
                path: '/contracts/',
                component: ComponentCreator('/contracts/', '4a6'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/Bundler',
                component: ComponentCreator('/contracts/Bundler', 'e0a'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/ID_Registry',
                component: ComponentCreator('/contracts/ID_Registry', '8ca'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/IdGateway',
                component: ComponentCreator('/contracts/IdGateway', '39f'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/Key_Gateway',
                component: ComponentCreator('/contracts/Key_Gateway', '02e'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/Key_Registry',
                component: ComponentCreator('/contracts/Key_Registry', '3bb'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/Storage_Registry',
                component: ComponentCreator('/contracts/Storage_Registry', 'b48'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/deploymentAddresses',
                component: ComponentCreator('/deploymentAddresses', '872'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '1d4'),
                exact: true,
                sidebar: "contractSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
