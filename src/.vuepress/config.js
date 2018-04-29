module.exports = {
  title:'Vue Semantic',
  themeConfig: {
    sidebarDepth: 2,
    sidebar: [
      ['/', 'Home'],
      {
        title:'Elements',
        collapsable: false,
        children: [
          '/elements/Button/',
          '/elements/Container/',
          '/elements/Divider/'
        ]
      }
    ]
  }
}
