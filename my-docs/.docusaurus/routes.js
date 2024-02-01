import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-docs/blog',
    component: ComponentCreator('/my-docs/blog', 'ecd'),
    exact: true
  },
  {
    path: '/my-docs/blog/archive',
    component: ComponentCreator('/my-docs/blog/archive', 'aa7'),
    exact: true
  },
  {
    path: '/my-docs/blog/first-blog-post',
    component: ComponentCreator('/my-docs/blog/first-blog-post', '323'),
    exact: true
  },
  {
    path: '/my-docs/blog/long-blog-post',
    component: ComponentCreator('/my-docs/blog/long-blog-post', '316'),
    exact: true
  },
  {
    path: '/my-docs/blog/long-blog-post',
    component: ComponentCreator('/my-docs/blog/long-blog-post', '948'),
    exact: true
  },
  {
    path: '/my-docs/blog/mdx-blog-post',
    component: ComponentCreator('/my-docs/blog/mdx-blog-post', '1a1'),
    exact: true
  },
  {
    path: '/my-docs/blog/mdx-blog-post',
    component: ComponentCreator('/my-docs/blog/mdx-blog-post', '129'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags',
    component: ComponentCreator('/my-docs/blog/tags', 'cf4'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/docusaurus',
    component: ComponentCreator('/my-docs/blog/tags/docusaurus', 'e89'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/facebook',
    component: ComponentCreator('/my-docs/blog/tags/facebook', '628'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/hello',
    component: ComponentCreator('/my-docs/blog/tags/hello', '2b0'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/hola',
    component: ComponentCreator('/my-docs/blog/tags/hola', '4d0'),
    exact: true
  },
  {
    path: '/my-docs/blog/three-blog-post',
    component: ComponentCreator('/my-docs/blog/three-blog-post', '97b'),
    exact: true
  },
  {
    path: '/my-docs/blog/welcome',
    component: ComponentCreator('/my-docs/blog/welcome', 'ffe'),
    exact: true
  },
  {
    path: '/my-docs/hello',
    component: ComponentCreator('/my-docs/hello', '0c2'),
    exact: true
  },
  {
    path: '/my-docs/markdown-page',
    component: ComponentCreator('/my-docs/markdown-page', '1fa'),
    exact: true
  },
  {
    path: '/my-docs/search',
    component: ComponentCreator('/my-docs/search', '7b7'),
    exact: true
  },
  {
    path: '/my-docs/docs',
    component: ComponentCreator('/my-docs/docs', '033'),
    routes: [
      {
        path: '/my-docs/docs/',
        component: ComponentCreator('/my-docs/docs/', 'eb9'),
        exact: true
      },
      {
        path: '/my-docs/docs/DevelopersGuide/Concept',
        component: ComponentCreator('/my-docs/docs/DevelopersGuide/Concept', 'e8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/DevelopersGuide/MindMap/Getting Started',
        component: ComponentCreator('/my-docs/docs/DevelopersGuide/MindMap/Getting Started', '62c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/concept',
        component: ComponentCreator('/my-docs/docs/Documentation/concept', '61a'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/Localsetup',
        component: ComponentCreator('/my-docs/docs/Documentation/Localsetup', 'fb4'),
        exact: true
      },
      {
        path: '/my-docs/docs/Documentation/MindMap/GlobalConfigurations',
        component: ComponentCreator('/my-docs/docs/Documentation/MindMap/GlobalConfigurations', '261'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/MindMap/Introduction',
        component: ComponentCreator('/my-docs/docs/Documentation/MindMap/Introduction', '507'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/MindMap/Prerequisites',
        component: ComponentCreator('/my-docs/docs/Documentation/MindMap/Prerequisites', 'c7f'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/MindMap/Projectstructure',
        component: ComponentCreator('/my-docs/docs/Documentation/MindMap/Projectstructure', '4e8'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/MindMap/ServiceNode',
        component: ComponentCreator('/my-docs/docs/Documentation/MindMap/ServiceNode', 'b0f'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/MindMap/UIandGateway',
        component: ComponentCreator('/my-docs/docs/Documentation/MindMap/UIandGateway', 'e22'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/WDA/',
        component: ComponentCreator('/my-docs/docs/Documentation/WDA/', '6af'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/WDA/Application',
        component: ComponentCreator('/my-docs/docs/Documentation/WDA/Application', '394'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/WDA/Communication',
        component: ComponentCreator('/my-docs/docs/Documentation/WDA/Communication', 'bf5'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/WDA/Deployment',
        component: ComponentCreator('/my-docs/docs/Documentation/WDA/Deployment', '211'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/WDA/Prerequisites',
        component: ComponentCreator('/my-docs/docs/Documentation/WDA/Prerequisites', 'a08'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/WDI/',
        component: ComponentCreator('/my-docs/docs/Documentation/WDI/', '6a1'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/Documentation/WDI/Prerequisites',
        component: ComponentCreator('/my-docs/docs/Documentation/WDI/Prerequisites', '37a'),
        exact: true,
        sidebar: "documentationSidebar"
      },
      {
        path: '/my-docs/docs/intro',
        component: ComponentCreator('/my-docs/docs/intro', '8e1'),
        exact: true
      }
    ]
  },
  {
    path: '/my-docs/',
    component: ComponentCreator('/my-docs/', 'bf6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
