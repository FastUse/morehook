# 备忘录

## IDEA
### 已完成:
+ hook -> 倒计时
+ @utils -> 随机字符串
+ @utils -> 深拷贝
+ @utils -> 将一个数值分为不同随机份 splitNumRandom

### 待完成
+ 大数字问题解决方案
+ 做一个手机验证码的 hook
+ 城市选择框 hook
+ 监听资源变化，可以把监控的那一套移植到hook中
+ 滚动锚点
+ 水平滑块锚点
+ 进度条卡点锚点
+ 懒加载
+ 滑块验证
+ 上传文件的，面试官那一套
+ promise 执行链那一套
+ 下载文件那一套
+ 点击图片放大全屏的组件或者hook
+ eventbus
+ 加载图片的组件 + hook
+ 加载字体的组件 + hook
+ 加载中的组件 + hook，比如在等待分析报告的业务场景
+ 添加 changelog
+ 接口轮询
+ @hook -> 解决动画场景下，真假显示的hook，比如弹框的动画
+ @component -> 进度条，看看其他组件库怎么实现的
+ @component -> 全局loading，人物会动，带有进度条，带有假进度

```
/**
 * 获取随机数组
 * ps: 根据总数 100 分成 4个随机数
 */
function getRandomNum(n, total) {
  // 1. 先按照平均的方式来创建数值平均的数组
  // 2. 再对每个值来随机减，这个减去的值会随机的附在其他位数的数值上

  const res = Array.from({ length: n }, () => Math.floor(total / n));
  const resSum = res.reduce((pre, item) => (pre += item), 0);

  // 如果数组总数和总数不一致，那么将剩下的数随机放到任意一位上
  if (resSum !== total) {
    const index = Math.floor(Math.random() * n);
    const randowNum = res[index];
    res[index] = randowNum + (total - resSum);
  }

  for (let i = 0; i < res.length; i++) {
    const randomIndex = Math.floor(Math.random() * n);
    const minus = Math.floor(Math.random() * res[i]);
    res[i] -= minus;
    res[randomIndex] += minus;
  }

  return res;
}
```

### 未知问题
+ 每次开发新hook后都需要重新 nr dev 才能看到文档新效果（看了下文档并不能妥善解决，提个issues试试~）
+ 打包部署 github pages 时需要需要手动中断一下才能继续上传


## 相关库
+ https://github.com/proYang/outils js工具库
+ https://github.com/sindresorhus/query-string 字符串转对象 工具库
+ https://github.com/MathisBullinger/froebel ts 工具库
+ https://github.com/front-end-study-program/utils 连哥 js 工具库
+ https://github.com/vueuse/vueuse
+ https://github.com/yanzhandong/v3hooks
+ https://github.com/ymhczm/tankhooks
+ 一个 JS 库，将 Base64 扩展到了2048个字符，从而使得二进制数据，可以转成非常短的字符串。
https://github.com/qntm/base2048
+ https://github.com/upscayl/upscayl 图片转高清
+ https://github.com/Sanster/lama-cleaner 一个开源的 AI 工具，可以从图片上擦除任何不需要的物体
+ https://github.com/jj811208/watching-you 一个 JS 动画库，可以设定所要观察的 DOM 元素，从而形成一种互动效果，好像页面正在注视用户的操作

## 其他
每个 hooks 都要总结利弊，分析在哪些场景可以使用

+ 思考一下兼容性,比如现在的入参是一个，但是以后扩展成两个时怎么对以前的进行兼容，返回参数也是同理
+ 最好以后写大的业务hook时，诺列一下业务场景
+ node配合搭建cli
+ react 可以组件和hook都方便返回，vue3怎么处理呢？
+ 兼容 vue2和vue3的思路=https://blog.csdn.net/duninet/article/details/122972172

## 备注
目前所有的外部插件都会引入到最后的打包中，除了 vue-router，后面看需要决定要不要再次分开