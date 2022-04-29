(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{340:function(s,a,e){"use strict";e.r(a);var t=e(33),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[s._v("#")]),s._v(" SSH")]),s._v(" "),e("blockquote",[e("p",[s._v("ssh 命令一般用于登录远程服务器，建立安全连接。")])]),s._v(" "),e("p",[s._v("以下介绍一些常用命令：")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#ssh-%E7%99%BB%E5%BD%95%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8"}},[s._v("ssh 登录远程服务器")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#ssh-keygen"}},[s._v("ssh-keygen")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#ssh-copy-id"}},[s._v("ssh-copy-id")])]),s._v(" "),e("li",[e("a",{attrs:{href:"#ssh-add"}},[s._v("ssh-add")])])]),s._v(" "),e("h2",{attrs:{id:"ssh-登录远程服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh-登录远程服务器"}},[s._v("#")]),s._v(" ssh 登录远程服务器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# user 是要登录的远程用户名")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hostname 是远程主机地址（域名或者 ip 地址）")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" user@hostname\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回车会提示输入密码，输入正确的密码后就会进到远程服务器环境")]),s._v("\nuser@hostname's password: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"ssh-keygen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh-keygen"}},[s._v("#")]),s._v(" ssh-keygen")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.ssh.com/ssh/keygen/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ssh-keygen"),e("OutboundLink")],1),s._v(" 用于生成公秘钥，为本地机器和远程机器建立安全凭证。公钥放到远程计算机上，秘钥放到本地计算机。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入后有提示消息一直按回车就好")]),s._v("\n$ ssh-keygen -t rsa -C "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xuj_power@qq.com"')]),s._v(" -f ~/.ssh/github_id_rsa\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("参数含义")]),s._v(" "),e("ul",[e("li",[s._v("-t : 表示加密算法，可选 "),e("code",[s._v("rsa")]),s._v(", "),e("code",[s._v("dsa")]),s._v(", "),e("code",[s._v("ecdsa")]),s._v(", "),e("code",[s._v("ed25519")]),s._v("，一般使用 "),e("code",[s._v("rsa")])]),s._v(" "),e("li",[s._v("-f : 表示生成的秘钥文件名，可使用相对/绝对路径，已上面为例，会对应生成 "),e("code",[s._v("~/.ssh/github_id_rsa")]),s._v(" 和 "),e("code",[s._v("~/.ssh/github_id_rsa.pub")]),s._v(" 2个文件")]),s._v(" "),e("li",[s._v("-C : 表示公钥的附加评论信息，一般写邮箱地址")])]),s._v(" "),e("h2",{attrs:{id:"ssh-copy-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh-copy-id"}},[s._v("#")]),s._v(" ssh-copy-id")]),s._v(" "),e("p",[e("code",[s._v("ssh-keygen")]),s._v(" 工具生成的公钥需要复制到远程服务器上的 "),e("code",[s._v("authorized_keys")]),s._v(" 文件里才能进行通讯，而 "),e("code",[s._v("ssh-copy-id")]),s._v(" 就很方便的为我们做了这件事情")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行完需要输入一次 user@hostname 的密码，登录成功就会把公钥写到 authorized_keys 文件里")]),s._v("\n$ ssh-copy-id -i ~/.ssh/github_id_rsa user@hostname\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("-i : 指定了需要复制到远程服务器上的公钥文件")])]),s._v(" "),e("h2",{attrs:{id:"ssh-add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh-add"}},[s._v("#")]),s._v(" ssh-add")]),s._v(" "),e("p",[s._v("ssh 有一个帮助程序 "),e("code",[s._v("ssh-agent")]),s._v("，可以实现单点登录(SSO)，避免每次和远程服务器交互都需要验证身份。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一般使用 -K 将已知秘钥添加到 ssh-agent 中，详细参数见官方文档：https://www.ssh.com/ssh/add")]),s._v("\n$ ssh-add -K "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~/.ssh/github_id_rsa'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"配置-ssh-持久连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-ssh-持久连接"}},[s._v("#")]),s._v(" 配置 ssh 持久连接")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一般情况下客户端没有操作间隔一段时间就会主动断掉和服务器的链接，可通过配置做持久连接")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在客户端 /etc/ssh/ssh_config 文件中添加以下配置即可")]),s._v("\nHost *\n    ServerAliveInterval "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);