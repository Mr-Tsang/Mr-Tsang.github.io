(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{798:function(v,_,t){"use strict";t.r(_);var a=t(14),r=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey},scopedSlots:v._u([{key:"abstract",fn:function(){return[_("p",[v._v("微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。")]),v._v(" "),_("p",[v._v("微前端借鉴了微服务的架构理念，将一个庞大的前端应用拆分为多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用联合为一个完整的应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。")]),v._v(" "),_("p",[v._v("特性：")]),v._v(" "),_("ul",[_("li",[v._v("技术栈无关：主框架不限制接入应用的技术栈，子应用可自主选择技术栈")]),v._v(" "),_("li",[v._v("独立开发/部署：各个团队之间仓库独立，单独部署，互不依赖")]),v._v(" "),_("li",[v._v("增量升级：当一个应用庞大之后，技术升级或重构相当麻烦，而微应用具备渐进式升级的特性")]),v._v(" "),_("li",[v._v("独立运行时：微应用之间运行时互不依赖，有独立的状态管理")]),v._v(" "),_("li",[v._v("提升效率：应用越庞大，越难以维护，协作效率越低下。微应用可以很好拆分，提升效率")])])]},proxy:!0}])},[_("h2",{attrs:{id:"什么是微前端"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是微前端"}},[v._v("#")]),v._v(" 什么是微前端")]),v._v(" "),_("p",[v._v("微前端（Micro-Frontends）是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。")]),v._v(" "),_("p",[v._v("各个前端应用还可以独立运行、独立开发、独立部署。")]),v._v(" "),_("p",[v._v("微前端不是单纯的前端框架或者工具，而是一套架构体系，这个概念最早在2016年底被提出。")]),v._v(" "),_("h2",{attrs:{id:"为什么会有微前端"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么会有微前端"}},[v._v("#")]),v._v(" 为什么会有微前端")]),v._v(" "),_("p",[v._v("任何新技术的产生都是为了解决现有场景和需求下的技术痛点，微前端也不例外：")]),v._v(" "),_("ul",[_("li",[v._v("拆分和细化：当下前端领域，单页面应用（SPA）是非常流行的项目形态之一，而随着时间的推移以及应用功能的丰富，单页应用变得不再单一而是越来越庞大也越来越难以维护，往往是改一处而动全身，由此带来的发版成本也越来越高。微前端的意义就是将这些庞大应用进行拆分，并随之解耦，每个部分可以单独进行维护和部署，提升效率。")]),v._v(" "),_("li",[v._v("整合历史系统：在不少的业务中，或多或少会存在一些历史项目，这些项目大多以采用老框架类似（Backbone.js，Angular.js 1）的B端管理系统为主，介于日常运营，这些系统需要结合到新框架中来使用还不能抛弃，对此我们也没有理由浪费时间和精力重写旧的逻辑。而微前端可以将这些系统进行整合，在基本不修改来逻辑的同时来同时兼容新老两套系统并行运行。")])]),v._v(" "),_("h2",{attrs:{id:"实现有哪些方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现有哪些方案"}},[v._v("#")]),v._v(" 实现有哪些方案")]),v._v(" "),_("p",[v._v("单纯根据对概念的理解，很容易想到实现微前端的重要思想就是将应用进行拆解和整合，通常是一个父应用加上一些子应用，那么使用类似Nginx配置不同应用的转发，或是采用iframe来将多个应用整合到一起等等这些其实都属于微前端的实现方案，他们之间的对比👇")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("方案")]),v._v(" "),_("th",[v._v("描述")]),v._v(" "),_("th",[v._v("优点")]),v._v(" "),_("th",[v._v("缺点")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("Nginx路由转发")]),v._v(" "),_("td",[v._v("通过Nginx配置反向代理来实现不同路径映射到不同应用，例如www.abc.com/app1对应app1，www.abc.com/app2对应app2，这种方案本身并不属于前端层面的改造，更多的是运维的配置。")]),v._v(" "),_("td",[v._v("简单，快速，易配置")]),v._v(" "),_("td",[v._v("在切换应用时会触发浏览器刷新，影响体验")])]),v._v(" "),_("tr",[_("td",[v._v("iframe嵌套")]),v._v(" "),_("td",[v._v("父应用单独是一个页面，每个子应用嵌套一个iframe，父子通信可采用postMessage或者contentWindow方式")]),v._v(" "),_("td",[v._v("实现简单，子应用之间自带沙箱，天然隔离，互不影响")]),v._v(" "),_("td",[v._v("iframe的样式显示、兼容性等都具有局限性；太过简单而显得low")])]),v._v(" "),_("tr",[_("td",[v._v("Web Components")]),v._v(" "),_("td",[v._v("每个子应用需要采用纯Web Components技术编写组件，是一套全新的开发模式")]),v._v(" "),_("td",[v._v("每个子应用拥有独立的script和css，也可单独部署")]),v._v(" "),_("td",[v._v("对于历史系统改造成本高，子应用通信较为复杂易踩坑")])]),v._v(" "),_("tr",[_("td",[v._v("组合式应用路由分发")]),v._v(" "),_("td",[v._v("每个子应用独立构建和部署，运行时由父应用来进行路由管理，应用加载，启动，卸载，以及通信机制")]),v._v(" "),_("td",[v._v("纯前端改造，体验良好，可无感知切换，子应用相互隔离")]),v._v(" "),_("td",[v._v("需要设计和开发，由于父子应用处于同一页面运行，需要解决子应用的样式冲突，变量对象污染，通信机制等技术点")])])])]),v._v(" "),_("p",[v._v("上述方案中，每种都有自己的优劣：")]),v._v(" "),_("ul",[_("li",[v._v("Nginx配置反向代理是从接入层的角度来将系统进行分离，但是需要运维配置")]),v._v(" "),_("li",[v._v("iframe嵌套是最简单和最快速的方案，但是iframe的弊端也是无法避免的")]),v._v(" "),_("li",[v._v("Web Components的方案则需要大量的改造成本")]),v._v(" "),_("li",[v._v("组合式应用路由分发方案改造成本中等并且能满足大部分需求，也不影响各前端应用的体验，是当下各个业务普遍采用的一种方案，本文后面的内容也是主要基于这种方案进行阐述")])]),v._v(" "),_("h2",{attrs:{id:"由哪些模块组成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#由哪些模块组成"}},[v._v("#")]),v._v(" 由哪些模块组成")]),v._v(" "),_("p",[v._v("基于上文，当下微前端主要采用的是组合式应用路由方案，该方案的核心是“主从”思想，即包括一个基座（MainApp）应用和若干个微（MicroApp）应用，基座应用大多数是一个前端SPA项目，主要负责应用注册，路由映射，消息下发等，而微应用是独立前端项目，这些项目不限于采用React，Vue，Angular或者JQuery开发，每个微应用注册到基座应用中，由基座进行管理，但是如果脱离基座也是可以单独访问。")]),v._v(" "),_("h2",{attrs:{id:"消息通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息通信"}},[v._v("#")]),v._v(" 消息通信")]),v._v(" "),_("p",[v._v("应用间通信有很多种方式，当然，要让多个分离的微应用之间要做到通信，本质上仍离不开中间媒介或者说全局对象。所以对于消息订阅（pub/sub）模式的通信机制是非常适用的，在基座应用中会定义事件中心Event，每个微应用分别来注册事件，当被触发事件时再有事件中心统一分发，这就构成了基本的通信机制。\n当然，如果基座和微应用采用的是React或者是Vue，是可以结合Redux和Vuex来一起使用，实现应用之间的通信。")]),v._v(" "),_("h2",{attrs:{id:"有哪些框架"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#有哪些框架"}},[v._v("#")]),v._v(" 有哪些框架")]),v._v(" "),_("p",[v._v("基于上述对微前端整体概念和理论的阐述，目前业界已经有不少框架来帮助开发者轻松的集成微前端架构：")]),v._v(" "),_("ul",[_("li",[v._v("Mooa：基于Angular的微前端服务框架")]),v._v(" "),_("li",[v._v("Single-Spa：最早的微前端框架，兼容多种前端技术栈")]),v._v(" "),_("li",[v._v("Qiankun：基于Single-Spa，阿里系开源微前端框架")]),v._v(" "),_("li",[v._v("Icestark：阿里飞冰微前端框架，兼容多种前端技术栈")]),v._v(" "),_("li",[v._v("Ara Framework：由服务端渲染延伸出的微前端框架")])]),v._v(" "),_("h2",{attrs:{id:"是否使用微前端"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#是否使用微前端"}},[v._v("#")]),v._v(" 是否使用微前端")]),v._v(" "),_("p",[v._v("微前端帮助开发者解决了实际的问题，但是对于每个业务来说，是否适合使用微前端，以及是否正确的使用微前端，还是需要遵循以下一些原则：")]),v._v(" "),_("ul",[_("li",[v._v("微前端最佳的使用场景是一些B端的管理系统，既能兼容集成历史系统，也可以将新的系统集成进来，并且不影响原先的交互体验")]),v._v(" "),_("li",[v._v("整体的微前端不仅仅是只将系统集成进来，而是整个微前端体系的完善，包括\n"),_("ul",[_("li",[v._v("基座应用和微应用的自动部署能力")]),v._v(" "),_("li",[v._v("微应用的配置管理能力")]),v._v(" "),_("li",[v._v("本地开发调试能力")]),v._v(" "),_("li",[v._v("线上监控和统计能力等等")])])]),v._v(" "),_("li",[v._v("只有将整个能力体系搭建完善，才能说是整个微前端体系流程的完善")]),v._v(" "),_("li",[v._v("当发现使用微前端反而使效率变低，简单的变更复杂那就说明微前端并不适用")])])])}),[],!1,null,null,null);_.default=r.exports}}]);