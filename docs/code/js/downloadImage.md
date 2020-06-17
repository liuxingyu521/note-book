### 将图片下载到本地

原理： 通过使用 `<a>` 标签的 `download` 属性，实现图片本地保存。

**注意点**： `<a>` 标签需要同源的 `href` 链接或者 `blob:` 链接、`data:` 链接才能使用 `downlaod` 属性进行下载

```js
/**
 * 下载图片到本地
 * @param {string} inputImgUrl 图片地址
 * @param {string} outputImgFilename 下载保存的图片文件名
 */
function downloadImage(inputImgUrl, outputImgFilename) {
  const image = new Image();
  // 解决 canvas 资源不能使用的问题
  image.setAttribute('crossOrigin', 'anonymous');

  image.onload = function() {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);
      const url = canvas.toDataURL(); 

      const a = document.createElement('a'); 
      // 设置可下载属性&文件名
      a.download = outputImgFilename || '';
      a.href = url;

      // 模拟 a 的点击事件
      a.dispatchEvent(new MouseEvent('click')); 
  };

  image.src = inputImgUrl;
}
```