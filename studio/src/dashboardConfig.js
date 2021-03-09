export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6047ca3902a4cd0e5599c6f8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zaa1xno8',
                  apiId: 'fd503693-2177-4c3f-83a5-5d7adc0f98b4'
                },
                {
                  buildHookId: '6047ca39b77cd311eb8076d8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zikavc1m',
                  apiId: '9f7007c4-1dbd-4400-a06b-57949cb85e64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jduijm/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zikavc1m.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
