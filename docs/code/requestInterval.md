### 自定义封装轮询函数

```typescript
import axios, { AxiosRequestConfig } from 'axios';

/** 轮询配置参数 */
interface IRequestOption {
  /** 请求的url */
  url: string
  /** 请求其他的配置 */
  opt?: AxiosRequestConfig
  /**
   * 轮询的每次结果回调
   * @param res 请求的返回内容
   * @param intervalTimer 轮询的计时器，回调中可停止计时器
   */
  cb(res: any, intervalTimer: any, ): void
  /** 轮询时间间隔, ms 默认 1000 */
  interval?: number
  /** 轮询次数上限  默认无限次 */
  limit?: number
  /** 已达到轮询次数的回调 */
  limitCb?(): void
}

/**
 * 轮询请求工具
 * 参数见 IRequestOption
 */
const requestInterval = ({
  url,
  opt = {},
  cb,
  interval = 1000,
  limit = Infinity,
  limitCb = () => {}
}: IRequestOption) => {
  opt = {
    method:'get',
    ...opt
  }
  let counter = 0
  let intervalTimer: any

  const runningFunction = async() => {
    const res = await axios/** 可替换成别的请求函数，比如 fetch */({
      url,
      ...opt,
    })

    counter++
    if (counter >= limit) {
      clearTimeout(intervalTimer)
      limitCb()
      return
    }

    intervalTimer = setTimeout(runningFunction, interval)
    cb(res, intervalTimer)
  }

  runningFunction()
}
```