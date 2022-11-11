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
+ 滑块验证
+ 随机字符串 (现在在 hooks 已经有了，拿出来封装一下就行)
+ 上传文件的，面试官那一套
+ promise 执行链那一套
+ 下载文件那一套

https://github.com/proYang/outils js工具库

https://github.com/sindresorhus/query-string 字符串转对象 工具库

https://github.com/MathisBullinger/froebel ts 工具库

https://github.com/front-end-study-program/utils 连哥 js 工具库

https://github.com/vueuse/vueuse

https://github.com/yanzhandong/v3hooks

https://github.com/ymhczm/tankhooks


+ 思考一下兼容性,比如现在的入参是一个，但是以后扩展成两个时怎么对以前的进行兼容，返回参数也是同理
+ 最好以后写大的业务hook时，诺列一下业务场景
+ node配合搭建cli

在文档中建立一个快捷下载源文件的页面（适配直接放公司用）

目前所有的外部插件都会引入到最后的打包中，除了 vue-router，后面看需要决定要不要再次分开

一个 JS 库，将 Base64 扩展到了2048个字符，从而使得二进制数据，可以转成非常短的字符串。
https://github.com/qntm/base2048
