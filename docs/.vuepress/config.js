/** 知识汇总-侧边栏 */
const noteSidebarList = [
  ['babel/', 'babel 相关'],
  {
    title: 'docker',
    children: [
      ['docker/init', '初识与安装'],
      // ['docker/command', '命令与实践'],
    ]
  }
]

/** 代码片段-侧边栏 */
const codeSidebarList = [
  {
    title: 'js',
    children: [
      ['js/requestInterval', '轮询函数'],
      ['js/downloadImage', '本地保存图片'],
    ]
  }
]

module.exports = {
  base: '/note-book/',
  title: "Xuer 的笔记",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '知识汇总', link: '/note/' },
      { text: '代码片段', link: '/code/' },
    ],
    sidebar: {
      '/note/': noteSidebarList,
      '/code/': codeSidebarList,
    },
    lastUpdated: "最后更新时间",
    editLinks: true,
    editLinkText: '在 Github 上编辑此页',
    repo: 'https://github.com/liuxingyu521/note-book',
    docsDir: 'docs',
  },
  markdown: {
    lineNumbers: true
  }
}
