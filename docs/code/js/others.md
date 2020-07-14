---
srollbar: auto
---

## 获取链接上的扩展名

```js
/**
 * 获取 url 链接扩展名
 * @param url 要获取扩展名的链接
 * @example
 *  * getExtName('http://example.com/balabala.png?s=xxx#a=xxxx') => '.png' 
 */
function getExtName(url) {
  if (!url) {
    return ''
  }

  const urlWithoutQueryOrHash = url.replace(/[\?#](.*)/g, '')
  const urlWithoutOtherSuffix = urlWithoutQueryOrHash.replace(/([^a-zA-Z])*$/, '')
  const extname = urlWithoutOtherSuffix.match(/(\.[a-zA-Z]*)$/)?.[0] || ''

  return extname
}
```