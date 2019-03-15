module.exports = {
  title: 'Ioodu Land',
  description: "Ioodu's home page →",
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  dest: 'dist',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: 'https://chinadbo.github.io/blog/' }
    ],
    sidebar: 'auto',
    search: false,
    lastUpdated: 'Last Updated',
    repo: 'chinadbo/chinadbo.github.io',
    repoLabel: 'Github Pages',
    docsRepo: 'chinadbo/chinadbo.github.io',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助改善页面！',
    copyRight: 'Ioodu@2014-present'
  }
}