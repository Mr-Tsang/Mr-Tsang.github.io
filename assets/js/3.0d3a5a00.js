(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{759:function(e,t,o){},769:function(e){e.exports=JSON.parse('[{"lang":"zh-CN","demo-block":{"hide-text":"隐藏代码","show-text":"显示代码","copy-text":"复制代码","copy-success":"复制成功"}},{"lang":"en-US","demo-block":{"hide-text":"Hide","show-text":"Expand","copy-text":"Copy","copy-success":"Successful"}}]')},770:function(e,t,o){"use strict";o(759)},784:function(e,t,o){"use strict";o.r(t);var s=o(769),n={data:()=>({hovering:!1,copied:!1,isExpanded:!1,fixedControl:!1,codeContentWidth:0,scrollParent:null}),props:{options:{type:Object,default:()=>({})}},computed:{compoLang(){return this.options.locales||s},langConfig(){return this.compoLang.filter(e=>e.lang===this.$lang)[0]["demo-block"]},blockClass(){return`demo-${this.$lang} demo-${this.$router.currentRoute.path.split("/").pop()}`},iconClass(){return this.isExpanded?"caret-top":"caret-bottom"},controlText(){return this.isExpanded?this.langConfig["hide-text"]:this.langConfig["show-text"]},copiedText(){return this.copied?this.langConfig["copy-success"]:this.langConfig["copy-text"]},codeArea(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+this.$el.getElementsByClassName("code-content")[0].clientHeight+20:this.$el.getElementsByClassName("code-content")[0].clientHeight}},methods:{copyCode(){if(this.copied)return;const e=this.$el.querySelectorAll("pre")[0];e.setAttribute("contenteditable","true"),e.focus(),document.execCommand("selectAll",!1,null),this.copied=document.execCommand("copy"),e.removeAttribute("contenteditable"),setTimeout(()=>{this.copied=!1},1500)},scrollHandler(){const{top:e,bottom:t,left:o}=this.$refs.meta.getBoundingClientRect();this.fixedControl=t>document.documentElement.clientHeight&&e+44<=document.documentElement.clientHeight,this.$refs.control.style.left=this.fixedControl?o+"px":"0"},removeScrollHandler(){this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.scrollHandler)}},watch:{isExpanded(e){if(this.codeArea.style.height=e?this.codeAreaHeight+1+"px":"0",!e)return this.fixedControl=!1,this.$refs.control.style.left="0",void this.removeScrollHandler();setTimeout(()=>{this.scrollParent=document,this.scrollParent&&this.scrollParent.addEventListener("scroll",this.scrollHandler),this.scrollHandler()},200)}},mounted(){this.$nextTick(()=>{let e=this.$el.getElementsByClassName("code-content")[0];this.codeContentWidth=this.$el.offsetWidth,0===this.$el.getElementsByClassName("description").length&&(e.style.width="100%",e.borderRight="none")})},beforeDestroy(){this.removeScrollHandler()}},i=(o(770),o(14)),c=Object(i.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"demo-block",class:[e.blockClass,{hover:e.hovering}],on:{mouseenter:function(t){e.hovering=!0},mouseleave:function(t){e.hovering=!1}}},[t("div",{staticClass:"demo-content"},[e._t("demo")],2),e._v(" "),t("div",{ref:"meta",staticClass:"meta"},[e.$slots.description?t("div",{staticClass:"description"},[e._t("description")],2):e._e(),e._v(" "),t("div",{staticClass:"code-content"},[e._t("source")],2)]),e._v(" "),t("div",{ref:"control",staticClass:"demo-block-control",class:{"is-fixed":e.fixedControl},style:{width:e.fixedControl?e.codeContentWidth+"px":"unset"},on:{click:function(t){e.isExpanded=!e.isExpanded}}},[t("transition",{attrs:{name:"arrow-slide"}},[t("i",{class:[e.iconClass,{hovering:e.hovering},"icon"]})]),e._v(" "),t("transition",{attrs:{name:"text-slide"}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.hovering,expression:"hovering"}]},[e._v(e._s(e.controlText))])]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],class:["copy-action",{"copying ":e.copied}],on:{click:function(t){return t.stopPropagation(),e.copyCode.apply(null,arguments)}}},[e._v(e._s(e.copiedText))]),e._v(" "),t("transition",{attrs:{name:"bounce"}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticClass:"copy-action copy-action-success"},[e._v(e._s(e.copiedText))])])],1)])}),[],!1,null,"025e6a34",null);t.default=c.exports}}]);