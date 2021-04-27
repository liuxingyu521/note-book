/** 知识汇总-侧边栏 */
const noteSidebarList = [
  {
    title: '前端',
    children: [
      ['fe/babel/', 'babel 相关']
    ]
  },
  {
    title: '后端',
    children: [
      // []
    ]
  },
  {
    title: '运维相关',
    children: [
      {
        title: 'shell 命令',
        children: [
          ['op/shell/ssh', 'SSH 相关']
        ]
      },
      {
        title: 'docker',
        children: [
          ['op/docker/init', '初识与安装'],
          // ['docker/command', '命令与实践'],
        ]
      },
    ]
  },
]

/** 代码片段-侧边栏 */
const codeSidebarList = [
  {
    title: 'js',
    children: [
      ['js/requestInterval', '轮询函数'],
      ['js/downloadImage', '本地保存图片'],
      ['js/others', '其他'],
    ]
  }
]

/** 读书笔记-侧边栏 */
const bookNoteSidebarList = [
  {
    title: '金融类',
    children: [
      ['finance/ding-tou-shi-nian-cai-fu-zi-you', '定投十年，财富自由']
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
      { text: '读书笔记', link: '/book-note/' },
    ],
    sidebar: {
      '/note/': noteSidebarList,
      '/code/': codeSidebarList,
      '/book-note/': bookNoteSidebarList,
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
