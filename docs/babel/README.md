
# babel

`Babel` 是一个转换 ECMAScript 2015+ 的工具链，把高级语法转换成目标环境可用的代码。

`Babel` 本身不对代码做任何转换，即 `const babel = code => code;`，需要配合 babel 插件（`plugins` or `presets`）对代码做转换。

## 名词解释

- **plugins** ： 插件，对代码做转换的插件工具。（配置中为数组类型，按照数组顺序依次执行）
- **presets** ： 预设，是一组插件的集合。（配置中为数组类型，按照数组顺序 **逆序** 执行）
- **polyfill** ： 对一些目标环境没有的特性做兼容处理的等价代码。

## 基本使用

1. 安装工具库和预设环境，以及对目标环境缺失的特性做 polyfill 的文件
    ```shell
    # 工具库
    $ npm install --save-dev @babel/core @babel/cli @babel/preset-env
    # 代码 polyfill
    $ npm install --save @babel/polyfill
    ```

2. 创建配置文件（`babel.config.json` or `.babelrc.json`，具体区别见下方 [配置文件命名区别](#配置文件)）
    ```json
    {
      "presets": [
        "@babel/env"
      ]
    }
    ```
    
3. 可使用命令行对代码进行转换
    ```shell
    $ npx babel src --out-dir lib
    ```
    
## 配置文件

在 `babel` 中，处理代码转换全部依靠插件配置，一个配置例子如下
```js
// babel config function 参见：https://babeljs.io/docs/en/config-files#config-function-api
module.exports = (api) => {
  // 此配置只会动态计算一次，导出静态对象给 babel 使用
  api.cache(true)

  return {
    // 预设 => 一些转换插件的集合
    presets: [
      [
        '@babel/env', // 仅转译代码里使用的浏览器支持的新特性，其他特性需要额外安装 plugins
        {
          useBuiltIns: 'usage', // 在代码中使用到环境中没有的特性时，自动载入需要的 polyfill 代码
          corejs: {
            version: 3,
            proposals: true, // 所有建议的特性都用 corejs 的代码来polyfill
          },
        },
      ],
    ],
    // 单独配置插件
    plugins: [
      // 将每个文件里用到的公共方法函数，都从 @babel/runtime 里导出，
      // 去掉每个文件的重复函数，减少打包体积
      '@babel/plugin-transform-runtime',
    ],
  }
}
```

### 配置文件命名区别

- `babel.config.json` or `.babelrc.json`: 使用 `JSON5` 解析，json 格式的进阶版，可注释
- `babel.config.cjs`: 文件格式为 `commonjs` 语法，配置使用 `module.exports = {}` 导出
- `babel.config.mjs`: 文件格式为 `ECMAScript modules` 的语法，使用 `export` 导出
- `babel.config.js`: 如果 babel 配置里声明了 `type: module`，和 `babel.config..mjs` 行为一样，否则和 `babel.config.cjs` 行为一致，使用 `mocule.exports = {}` 导出

## 一些配置插件的理解

在 babel 中有很多的插件，很容易混淆，不知道哪个该引哪个不该引，接下来分享下这些插件的作用。

### @babel/polyfill

这个插件用来模拟全部 es2015+ 的特性环境，会在全局原型上增加 polyfill。

**注意：** 在 babel 7.4.0 之后，已自动集成 `core-js/stable`(对 ECMAScript 特性做 polyfill) 和 `regenerator-runtime/runtime`(转换 generator 函数)。不需要单独引入 `@babel/polyfill`  

### transform-runtime

转换运行时使用 `@babel/runtime` 中的 helper 函数来替代每个文件中使用的公共函数，比如 `_createClass`、`_inherits`，使得每个文件没有重复函数实现，减少打包体积。

转换运行时需要 2 个插件支持，`@babel/plugin-transform-runtime` 和 `@babel/runtime`

```shell
# devDependencies 依赖，用来把每个文件用到的公共函数从 `@babel/runtime` 中导出
$ npm install -D @babel/plugin-transform-runtime

# 安装实际引用的公共代码，会被打包在最终文件中
$ npm install --save @babel/runtime
```
