# 备忘录

每个 hooks 都要总结利弊，分析在哪些场景可以使用

## 功能列表
+ 做一个手机验证码的 hook
+ 倒计时
+ 城市选择框 hook
+ 监听资源变化，可以把监控的那一套移植到hook中
+ 深拷贝
+ 滚动锚点
+ 水平滑块锚点
+ 进度条卡点锚点
+ 懒加载
+ vueuse 的还带有 组件类型 hook，而且他的demo能在文档中运行
+ 滑块验证
+ 随机字符串 (现在在 hooks 已经有了，拿出来封装一下就行)
+ 上传文件的，面试官那一套
+ promise 执行链那一套

https://github.com/proYang/outils js工具库

https://github.com/sindresorhus/query-string 字符串转对象 工具库

https://github.com/MathisBullinger/froebel ts 工具库

https://github.com/front-end-study-program/utils 连哥 js 工具库

https://github.com/vueuse/vueuse

https://github.com/yanzhandong/v3hooks

https://github.com/ymhczm/tankhooks


+ useRouteQuery 用到了 vue-router,后面打包要屏蔽
+ useRouteQuery 用到了 vue-router，不能在文档系统中测试，后面要参考 vueuse 是如何处理的，而且现在进这个页面会直接报错导致空页面
+ 思考一下兼容性,比如现在的入参是一个，但是以后扩展成两个时怎么对以前的进行兼容，返回参数也是同理
+ 最好以后写大的业务hook时，诺列一下业务场景
+ node配合搭建cli


节流搜索应该把最后一次也执行(是否在节流过期时执行最后一次被拦住的方法)
``` js
/**
 * 节流
 * @param fn 待执行函数
 * @param delay 节流设定时间
 * @param runLastFn 是否在节流过期时执行最后一次被拦住的方法
 * @returns 包装后的函数
 */
const throttle = function (fn, delay, runLastFn = true) {
  let oldNow = Date.now();
  let lastFn = () => {};
  let timmer = null;

  return (...args) => {
    const currNow = Date.now();

    if (currNow - oldNow < delay) {
      if (runLastFn) {
        lastFn = fn;
        clearInterval(timmer);
        timmer = setInterval(() => {
          lastFn.call(this, ...args);
          clearInterval(timmer);
        }, delay);
      }
    } else {
      if (runLastFn) clearInterval(timmer);
      oldNow = currNow;
      fn.call(this, ...args);
    }
  };
};
```


一个 JS 库，将 Base64 扩展到了2048个字符，从而使得二进制数据，可以转成非常短的字符串。
https://github.com/qntm/base2048
