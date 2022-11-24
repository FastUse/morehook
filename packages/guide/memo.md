# 备忘录

## IDEA
### 已完成:
+ 倒计时

### 待完成
+ 做一个手机验证码的 hook
+ 城市选择框 hook
+ 监听资源变化，可以把监控的那一套移植到hook中
+ 深拷贝
+ 滚动锚点
+ 水平滑块锚点
+ 进度条卡点锚点
+ 懒加载
+ 滑块验证
+ 随机字符串 (现在在 hooks 已经有了，拿出来封装一下就行)
+ 上传文件的，面试官那一套
+ promise 执行链那一套
+ 下载文件那一套
+ 点击图片放大全屏的组件或者hook
+ eventbus
+ 每次开发新hook后都需要重新 nr dev 才能看到文档新效果（看了下文档并不能妥善解决，提个issues试试~）


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