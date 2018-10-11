# web-utils
前端项目常用工具包

  * 库的作用就是积累前端项目中常用的 util 工具，比如：日期格式化、数字显示的格式化、localStorage 的操作、history 的操作、正则、json等；
  * 库的实现可以翻阅代码，千言万语不如直接读代码来的踏实；
  * 库的使用方式推荐拷贝 *src* 目录到项目中并更改 src 目录名为 'util' 或者其他任意名称，这里 src 下面模块的依赖均以相对路径的导入方式；
  * 代码库还处于试用阶段，因此可能会有 bug；在将来的测试全部完成后，会以 tag 的方式做 release；
  * 库的更新，推荐用 DiffMerge（mac） 工具比较新发布的 src 目录与在项目中的目录，然后对应的修改项目中的代码；


### 依赖包说明

* lodash: 使用了lodash中的部分方法，引入的方式为: import _isObject from 'lodash/isObject';
* fetch 模块依赖了 whatwg-fetch@^2.0.3
* history 模块依赖了 history@^4.6.3
