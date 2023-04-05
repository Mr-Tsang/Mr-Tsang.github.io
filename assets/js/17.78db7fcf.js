(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{794:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"abstract",fn:function(){return[s("p",[t._v("浏览器渲染: Load、Layout、Paint、Composite Layers 修改不同的CSS属性会触发不同阶段 触发的阶段越前，渲染的代价越高。")]),t._v(" "),s("p",[t._v("网页就像搭积木：一旦积木位置移动-重排，上色-重绘。")]),t._v(" "),s("p",[t._v("网页的分层机制：一个网页是由多个层展示的，然后再将这些层合并成一个层，当dom或者样式发生变化时，GPU能够缓存一些不变的内容，将要变化的层与缓存层再合成，提高渲染效率，因此在做动画时要让GPU参与进来，提高动画性能。")])]},proxy:!0}])},[s("h2",{attrs:{id:"_1-浏览器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器"}},[t._v("#")]),t._v(" 1. 浏览器")]),t._v(" "),s("h3",{attrs:{id:"_1-1-浏览器各部分简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-浏览器各部分简介"}},[t._v("#")]),t._v(" 1.1 浏览器各部分简介")]),t._v(" "),s("ul",[s("li",[t._v("用户界面：浏览器输入框、浏览器前进按钮、书签，历史记录等")]),t._v(" "),s("li",[t._v("浏览器引擎：浏览器各个部分之间相互通信的核心；在用户界面和渲染引擎之间传送指令，在客户端本地缓存中读写数据")]),t._v(" "),s("li",[t._v("渲染引擎(排版引擎)：解析DOM文档和CSS规则，并将内容排版到浏览器中；浏览器内核主要指的就是渲染引擎，例如webkit内核，css在打包时候，会在属性前加上各个浏览器内核的前缀")]),t._v(" "),s("li",[t._v("网络功能模块(network)")]),t._v(" "),s("li",[t._v("JS引擎：解释和执行 JS 脚本部分，例如 V8 引擎")]),t._v(" "),s("li",[t._v("UI后端：用于绘制基本的浏览器窗口内控件，比如组合选择框、按钮、输入框等")]),t._v(" "),s("li",[t._v("数据持久化存储：数据持久化存储，涉及 Cookie、LocalStorage")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-浏览器渲染引擎"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-浏览器渲染引擎"}},[t._v("#")]),t._v(" 1.2 浏览器渲染引擎")]),t._v(" "),s("p",[t._v("渲染引擎属于浏览器的重要部分，HTML parser生成DOM树（当然存在JS引擎的作用），CSS parser生成Style Rules(CSSOM树)，两者结合，生成Render Tree树，结合layout绘制在屏幕上。")]),t._v(" "),s("h2",{attrs:{id:"_2-css基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-css基础"}},[t._v("#")]),t._v(" 2. CSS基础")]),t._v(" "),s("h3",{attrs:{id:"_2-1-css的特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-css的特性"}},[t._v("#")]),t._v(" 2.1 CSS的特性")]),t._v(" "),s("h4",{attrs:{id:"优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/css/css-1.png",alt:""}})]),t._v(" "),s("p",[t._v("!important > 行内样式(权重1000) > ID 选择器(权重 100) > 类选择 器(权重 10) > 标签(权重1) > 通配符 > 继承 > 浏览器默认属性")]),t._v(" "),s("h4",{attrs:{id:"继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),s("ul",[s("li",[t._v("继承属性即从外层元素获得的css属性")]),t._v(" "),s("li",[t._v("继承的优先级最低，仅仅高于浏览器默认属性")]),t._v(" "),s("li",[t._v("只要元素本身有同属性的样式定义，就可以覆盖掉继承值")]),t._v(" "),s("li",[t._v("存在多个继承样式时，就近原则。也就是说，层级关系距离当前元 素最近的父级元素的继承样式，具有相对最高的优先级")])]),t._v(" "),s("p",[t._v("可以继承的属性:字体、对齐、缩进、文本、颜色、可见性等\n"),s("img",{attrs:{src:"/images/css/css-2.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"层叠性-组合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#层叠性-组合"}},[t._v("#")]),t._v(" 层叠性（组合）")]),t._v(" "),s("p",[t._v("css多个样式来源，导致了层叠性。\nCSS 层叠性是指 CSS 样式在针对同一元素配置同一属性时，依据层叠规则(权 重)来处理冲突，选择应用权重高的 CSS 选择器所指定的属性，一般也被描述 为权重高的覆盖权重低的，因此也称作层叠。")]),t._v(" "),s("ul",[s("li",[t._v("两个类选择器（权重一样），后面的覆盖前面的")]),t._v(" "),s("li",[t._v("计算权重，权重相同的情况下，后者生效")]),t._v(" "),s("li",[t._v("权重较大的生效")])]),t._v(" "),s("h3",{attrs:{id:"_2-2-css语法解析过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-css语法解析过程"}},[t._v("#")]),t._v(" 2.2 CSS语法解析过程")]),t._v(" "),s("ul",[s("li",[t._v("HTML解析器生成DOM树，然后CSS 解析器将解析结果附加在DOM 树上")]),t._v(" "),s("li",[t._v("CSS 文件会被解析成 StyleSheet 对象，且每个对象都包含 CSS 规 则。CSS 规则对象则包含选择器和声明对象，以及其他与 CSS 语法对应的 对象")])]),t._v(" "),s("h3",{attrs:{id:"_2-3-css选择器执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-css选择器执行顺序"}},[t._v("#")]),t._v(" 2.3 CSS选择器执行顺序")]),t._v(" "),s("p",[t._v("渲染引擎解析 CSS 选择器时是从右往左解析.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jartto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 111 "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 222 "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 333 "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("yellow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 444 "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div > div.jartto p span.yellow")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yellow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("假设【从左到右】解析：效率低")]),t._v(" "),s("ol",[s("li",[t._v("先找到所有 div 节点；")]),t._v(" "),s("li",[t._v("在 div 节点内找到所有的子 div，并且是 class = “jartto”；")]),t._v(" "),s("li",[t._v("然后再依次匹配 p span.yellow 等情况；")]),t._v(" "),s("li",[t._v("遇到不匹配的情况，就必须回溯到一开始搜索的 div 或者 p 节点，然后\n去搜索下个节点，重复这样的过程。")])]),t._v(" "),s("p",[t._v("【从右向左】的方式进行解析，浏览器 CSS 匹配核心算法的规则是以从右向左方式匹配节点的：")]),t._v(" "),s("ol",[s("li",[t._v("首先就查找到 class=“yellow” 的 span 元素；")]),t._v(" "),s("li",[t._v("接着检测父节点是否为 p 元素，如果不是则进入同级其他节点的遍历， 1. 首先就查找到 class=“yellow” 的 span 元素。 如果是则继续匹配父节点满足 class=“jartto” 的 div 容器；")]),t._v(" "),s("li",[t._v("这样就又减少了集合的元素，只有符合当前的子规则才会匹配再上一条子规则。")])]),t._v(" "),s("blockquote",[s("p",[t._v("注意:在书写 CSS Selector 时，从右向左的 Selector Term 匹配节点越少越好。")])]),t._v(" "),s("h3",{attrs:{id:"_2-4-高效的computedstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-高效的computedstyle"}},[t._v("#")]),t._v(" 2.4 高效的computedStyle")]),t._v(" "),s("ul",[s("li",[t._v("computedstyle:指的是应用在该元素上的所有样式，包含继承自浏览器或者父级元素的属性")]),t._v(" "),s("li",[t._v("window.getComputedStyle(elem,null),返回该元素上所有属性列表")]),t._v(" "),s("li",[t._v("在特定情况下，浏览器会共享 Computed Style，网页中能共享的标签非常多，所以能极大的提升执行效率")]),t._v(" "),s("li",[t._v("如果两个或多个 Element 的 ComputedStyle 不通过计算可以确认他们 相等，那么这些 ComputedStyle 相等的 Elements 只会计算一次样式，其 余的仅仅共享该 ComputedStyle")])]),t._v(" "),s("p",[t._v("如何高效共享 Computed Style:")]),t._v(" "),s("ol",[s("li",[t._v("TagName 和 Class 属性必须一样")]),t._v(" "),s("li",[t._v("不能有 Style 属性。哪怕 Style 属性相等，他们也不共享")]),t._v(" "),s("li",[t._v("不能使用 Sibling selector(兄弟选择器)，譬如: first-child、 :last-selector、 + selector")]),t._v(" "),s("li",[t._v("mappedAttribute 必须相等")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 不能共享·上述规则2 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jartto's"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("blog"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 可以共享·上述规则4 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("align")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("middle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jartto's"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("align")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("middle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("blog"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("总结:避免行内样式也就是style属性，如非必要不写兄弟选择器")])]),t._v(" "),s("h3",{attrs:{id:"_2-5-css书写顺序对性能的影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-css书写顺序对性能的影响"}},[t._v("#")]),t._v(" 2.5 CSS书写顺序对性能的影响")]),t._v(" "),s("p",[t._v("浏览器并不是一定获取到css样式就开始解析，会根据css样式的书写顺序将之按照DOM树的结构分布渲染样式，然后开始遍历每个树节点的CSS样式进行解析，此时的CSS样式遍历 顺序完全是按照之前的书写顺序。")]),t._v(" "),s("p",[t._v("在解析过程中，一旦浏览器发现某个元素的定位变化影响布局，则需要倒回去重新渲染。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("150px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("16px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("浏览器解析到position的时候，发现该元素是绝对定位元素，需要脱离文档流，之前是按照普通元素进行解析的，所以需要重新渲染.\n渲染引擎首先解除该元素在文档中所占位置，这就导致了该元素的占位情况发生了变化，其他元素可能会受到它回流的影响而重新排位。\n调整代码👇")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("absolute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("150px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("16px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这里有一个规范，建议顺序大致👇")]),t._v(" "),s("ol",[s("li",[t._v("定位属性")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("position display float left top right bottom overflow\nclear z-index\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("自身属性")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("width height padding border margin background\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("文字样式")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("font-family font-size font-style font-weight\nfont-varient color\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("文本属性")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("text-align vertical-align text-wrap text-transform\ntext-indent text-decoration letter-spacing\nword-spacing white-space text-overflow\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("CSS3新增属性")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("content box-shadow border-raduis transform\n")])])]),s("h2",{attrs:{id:"_3-优化策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-优化策略"}},[t._v("#")]),t._v(" 3. 优化策略")]),t._v(" "),s("p",[t._v("从浏览器构成，渲染引擎，再到 CSS 的解析原理，最后到执行顺序，做了一系列的探索。了解了一系列浏览器执行css原理，便于在实际应用中更好的书写出较为规范的css代码。")]),t._v(" "),s("h3",{attrs:{id:"_3-1-使用-id-selector-非常的高效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-使用-id-selector-非常的高效"}},[t._v("#")]),t._v(" 3.1 使用 id selector 非常的高效")]),t._v(" "),s("p",[t._v("在使用 id selector 的时候需要注意一点:因为 id 是唯一的，所以不需要既指定 id 又指定 tagName")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Bad */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p#id1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Good */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#id1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-2-避免深层次的-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-避免深层次的-node"}},[t._v("#")]),t._v(" 3.2 避免深层次的 node")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Bad */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div > div > div > p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Good */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p‐class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-3-不要使用-attribute-selector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-不要使用-attribute-selector"}},[t._v("#")]),t._v(" 3.3 不要使用 attribute selector")]),t._v(" "),s("p",[t._v('如:p[att1="val1"]，这样的匹配非常慢。更不要这样写: p[id="id1"],这样将 id selector 退化成 attribute selector。')]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Bad */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('p[id="jartto"]')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v('p[class="blog"]')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Good */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#jartto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".blog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-4-将浏览器前缀置于前面-将标准样式属性置于最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-将浏览器前缀置于前面-将标准样式属性置于最后"}},[t._v("#")]),t._v(" 3.4 将浏览器前缀置于前面，将标准样式属性置于最后")]),t._v(" "),s("p",[t._v("webpack打包插件已经处理过，暂时不需要做多重匹配，类似这种👇")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".foo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("‐moz‐border‐radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border‐radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-5-遵守csslint规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-遵守csslint规则"}},[t._v("#")]),t._v(" 3.5 遵守CSSLint规则")]),t._v(" "),s("ul",[s("li",[t._v("font‐faces：不能使用超过5个web字体")]),t._v(" "),s("li",[t._v("import：禁止使用@import")]),t._v(" "),s("li",[t._v("regex‐selectors：禁止使用属性选择器中的正则表达式选择器")]),t._v(" "),s("li",[t._v("universal‐selector：禁止使用不规范的属性选择器")]),t._v(" "),s("li",[t._v("zero‐units：0后面不要加单位")]),t._v(" "),s("li",[t._v("overqualified‐elements：使用相邻选择器时，不要使用不必要的选择器")]),t._v(" "),s("li",[t._v("shorthand：简写样式属性")]),t._v(" "),s("li",[t._v("duplicate‐background‐images：相同的url在样式表中不超过一次")])]),t._v(" "),s("h3",{attrs:{id:"_3-6-减少css文档体积"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-减少css文档体积"}},[t._v("#")]),t._v(" 3.6 减少CSS文档体积")]),t._v(" "),s("ul",[s("li",[t._v("移除空的CSS规则")]),t._v(" "),s("li",[t._v("值为0不需要单位")]),t._v(" "),s("li",[t._v("使用缩写")]),t._v(" "),s("li",[t._v("属性值为浮动小数0.xx，可以省略小数点之前的0")]),t._v(" "),s("li",[t._v("不给h1-h6元素定义过多的样式")])]),t._v(" "),s("h3",{attrs:{id:"_3-7-css-will-change"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-css-will-change"}},[t._v("#")]),t._v(" 3.7 CSS Will Change")]),t._v(" "),s("p",[t._v("WillChange属性，允许作者提前告知浏览器的默认样式，使用一个专用的属性来通知浏览器留意接下来的变化，从而优化和分配内存。")]),t._v(" "),s("p",[t._v("will-change 以针对可能在悬停时更改的元素进行优化")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".el:hover")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("will-change")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("transform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-8-不要使用-import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-不要使用-import"}},[t._v("#")]),t._v(" 3.8 不要使用@import")]),t._v(" "),s("p",[t._v("使用@import引入CSS会"),s("strong",[t._v("影响浏览器的并行下载")]),t._v("。")]),t._v(" "),s("p",[t._v("使用@import引用的CSS文件只有在引用它的那个CSS文件被下载、解析之后，浏览器才会知道还有另一个CSS需要下载，这时才去下载，然后下载后开始解析、构建Render Tree等一系列操作。")]),t._v(" "),s("p",[t._v("多个@import会导致下载顺序紊乱。在IE中，@import会引发资源文件的下载顺序被打乱，即排列在@import后面的JS文件先于@import下载，并且打乱甚至破坏@import自身的并行下载。")]),t._v(" "),s("h3",{attrs:{id:"_3-9-避免过分回流-重排-reflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-避免过分回流-重排-reflow"}},[t._v("#")]),t._v(" 3.9 避免过分回流/重排（Reflow）")]),t._v(" "),s("p",[t._v("浏览器重新计算布局位置与大小。")]),t._v(" "),s("p",[t._v("常见的重排元素：")]),t._v(" "),s("ul",[s("li",[t._v("width")]),t._v(" "),s("li",[t._v("height")]),t._v(" "),s("li",[t._v("min-height")]),t._v(" "),s("li",[t._v("padding")]),t._v(" "),s("li",[t._v("margin")]),t._v(" "),s("li",[t._v("display")]),t._v(" "),s("li",[t._v("border-width")]),t._v(" "),s("li",[t._v("border")]),t._v(" "),s("li",[t._v("position")]),t._v(" "),s("li",[t._v("top")]),t._v(" "),s("li",[t._v("left")]),t._v(" "),s("li",[t._v("right")]),t._v(" "),s("li",[t._v("bottom")]),t._v(" "),s("li",[t._v("float")]),t._v(" "),s("li",[t._v("clear")]),t._v(" "),s("li",[t._v("overflow")]),t._v(" "),s("li",[t._v("font-size")]),t._v(" "),s("li",[t._v("font-weight")]),t._v(" "),s("li",[t._v("font-family")]),t._v(" "),s("li",[t._v("line-height")]),t._v(" "),s("li",[t._v("vertical-align")]),t._v(" "),s("li",[t._v("text-align")]),t._v(" "),s("li",[t._v("white-space")])]),t._v(" "),s("h3",{attrs:{id:"_3-10-高效利用-computedstyle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-10-高效利用-computedstyle"}},[t._v("#")]),t._v(" 3.10 高效利用 computedStyle")]),t._v(" "),s("ul",[s("li",[t._v("公共类")]),t._v(" "),s("li",[t._v("慎用ChildSelector")]),t._v(" "),s("li",[t._v("尽可能共享")])]),t._v(" "),s("h3",{attrs:{id:"_3-11-减少昂贵属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-11-减少昂贵属性"}},[t._v("#")]),t._v(" 3.11 减少昂贵属性")]),t._v(" "),s("p",[t._v("当页面发生重绘时，它们会降低浏览器的渲染性能。所以在编写CSS时，我们应该尽量减少使用昂贵属性，👇：")]),t._v(" "),s("ul",[s("li",[t._v("box-shadow")]),t._v(" "),s("li",[t._v("border-radius")]),t._v(" "),s("li",[t._v("filter")]),t._v(" "),s("li",[t._v(":nth-child")])]),t._v(" "),s("h3",{attrs:{id:"_3-12-依赖继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-12-依赖继承"}},[t._v("#")]),t._v(" 3.12 依赖继承")]),t._v(" "),s("p",[t._v("如果某些属性可以继承，那么自然没必要在写一遍")]),t._v(" "),s("h3",{attrs:{id:"_3-13-遵守css顺序规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-13-遵守css顺序规则"}},[t._v("#")]),t._v(" 3.13 遵守CSS顺序规则")])])}),[],!1,null,null,null);s.default=e.exports}}]);