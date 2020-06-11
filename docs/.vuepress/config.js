/** 知识汇总-侧边栏 */
const noteSidebarList = [
  ['babel', 'babel 相关'],
  {
    title: 'docker',
    children: [
      ['docker/init', '初识与安装'],
      // ['docker/command', '常用命令'],
    ]
  }
]

/** 代码片段-侧边栏 */
const codeSidebarList = [
  ['requestInterval', '轮询函数'],
]

module.exports = {
  base: '/note-book/',
  title: "Xuer 的笔记",
  themeConfig: {
    nav: [
      { text: '知识汇总', link: '/note/babel' },
      { text: '代码片段', link: '/code/requestInterval' },
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
  }
}
