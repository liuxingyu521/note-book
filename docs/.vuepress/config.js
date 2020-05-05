module.exports = {
  base: '/note-book/',
  title: "Xuer 的笔记",
  themeConfig: {
    nav: [
      { text: '知识总结', link: '/note/babel' },
      { text: '代码片段', link: '/code/requestInterval' },
    ],
    sidebar: {
      '/note/': [
        'babel'
      ],
      '/code/': [
        ['requestInterval', '轮询函数'],
      ],
    },
    lastUpdated: "最后更新时间",
    editLinks: true,
    editLinkText: '在 Github 上编辑此页',
    repo: 'https://github.com/liuxingyu521/note-book',
    docsDir: 'docs',
  }
}
