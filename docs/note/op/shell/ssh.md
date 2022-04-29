---
srollbar: auto
---

# SSH

> ssh 命令一般用于登录远程服务器，建立安全连接。

以下介绍一些常用命令：

- [ssh 登录远程服务器](#ssh-登录远程服务器)
- [ssh-keygen](#ssh-keygen)
- [ssh-copy-id](#ssh-copy-id)
- [ssh-add](#ssh-add)

## ssh 登录远程服务器

```shell
# user 是要登录的远程用户名
# hostname 是远程主机地址（域名或者 ip 地址）
$ ssh user@hostname
# 回车会提示输入密码，输入正确的密码后就会进到远程服务器环境
user@hostname's password: ...
```

## ssh-keygen

[ssh-keygen](https://www.ssh.com/ssh/keygen/) 用于生成公秘钥，为本地机器和远程机器建立安全凭证。公钥放到远程计算机上，秘钥放到本地计算机。

```shell
# 输入后有提示消息一直按回车就好
$ ssh-keygen -t rsa -C "xuj_power@qq.com" -f ~/.ssh/github_id_rsa
```

参数含义
- -t : 表示加密算法，可选 `rsa`, `dsa`, `ecdsa`, `ed25519`，一般使用 `rsa`
- -f : 表示生成的秘钥文件名，可使用相对/绝对路径，已上面为例，会对应生成 `~/.ssh/github_id_rsa` 和 `~/.ssh/github_id_rsa.pub` 2个文件
- -C : 表示公钥的附加评论信息，一般写邮箱地址

## ssh-copy-id

`ssh-keygen` 工具生成的公钥需要复制到远程服务器上的 `authorized_keys` 文件里才能进行通讯，而 `ssh-copy-id` 就很方便的为我们做了这件事情

```shell
# 执行完需要输入一次 user@hostname 的密码，登录成功就会把公钥写到 authorized_keys 文件里
$ ssh-copy-id -i ~/.ssh/github_id_rsa user@hostname
```

- -i : 指定了需要复制到远程服务器上的公钥文件

## ssh-add

ssh 有一个帮助程序 `ssh-agent`，可以实现单点登录(SSO)，避免每次和远程服务器交互都需要验证身份。

```shell
# 一般使用 -K 将已知秘钥添加到 ssh-agent 中，详细参数见官方文档：https://www.ssh.com/ssh/add
$ ssh-add -K '~/.ssh/github_id_rsa'
```