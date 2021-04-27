---
title: 初识与安装
---

<img src="https://cdn.jsdelivr.net/gh/liuxingyu521/pictureBed@picture/docker-logo.png" width="300px" height="200px">
<br /><br />

## docker 是什么

[docker](https://docs.docker.com/get-started/overview/) 是一个集 `开发`、`部署`、`运行` 为一身的开源引擎，方便开发者快速地搭建本地以及生产环境的基础设施和服务等等。

## docker 的特点

- **快速、一致地交付应用程序**
  
    docker 通过环境独立且一致的 `容器` 承载应用程序，在避免了开发&测试&生产环境不一致导致问题的同时，可以快速执行自动化的测试与部署。

- **响应式部署和扩展**

    docker 可以运行在各种环境中（开发人员的本地环境、数据中心的物理机或者虚拟机、或者提供云服务的环境...），基于容器的轻量级和高度可移植性，可以动态管理服务（扩大或缩减服务数量）。

- **在同一硬件上运行更多的服务**

    docker 轻量且快速，适用于高密度和中小型部署的环境。

## 安装

docker 可以运行在多种环境中，本文只演示 linux 下 centos 系统的 docker 安装步骤（因为我的云服务器是 centos 环境 😂 ），其他环境的安装请参照 [官方文档](https://docs.docker.com/engine/install/)

1. 首先确认当前系统里没有装过 docker ，如果装了之前旧版的话，可以通过以下命令删除掉重新安装新版 docker。

    ```sh
    $ sudo yum remove docker \
                      docker-client \
                      docker-client-latest \
                      docker-common \
                      docker-latest \
                      docker-latest-logrotate \
                      docker-logrotate \
                      docker-engine
    ```

2. 下载 `yum-utils` 工具包，用于配置稳定版的 docker 远程仓库

    ```sh
    $ sudo yum install -y yum-utils

    $ sudo yum-config-manager \
        --add-repo \
        https://download.docker.com/linux/centos/docker-ce.repo
    ```

3. 配置好远程 docker 仓库后，开始安装最新版的 docker 

    ```sh
    $ sudo yum install docker-ce docker-ce-cli containerd.io

    # 或者安装指定版本的 docker 
    $ sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
    ```

4. 此时 docker 已安装在系统当中，但是处于关闭状态，用下面的命令开启 docker 

    ```sh
    # 此条命令没有任何输出，就代表启动成功
    $ sudo systemctl start docker
    ```

5. bingo~ 快用 docker 运行一个容器试试看

    ```sh
    # 下载 hello-world 容器并运行
    $ sudo docker run hello-world
    ```

    如果看到如下图所示的界面，就代表 docker 下载并成功运行起来咯！-_<

    <img class="bordered" src="https://cdn.jsdelivr.net/gh/liuxingyu521/pictureBed@picture/docker-installed.png" />
