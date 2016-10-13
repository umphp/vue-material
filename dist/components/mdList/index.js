!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.VueMaterial=i():t.VueMaterial=i()}(this,function(){return function(t){function i(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}var e={};return i.m=t,i.c=e,i.p="/",i(0)}({0:function(t,i,e){t.exports=e(10)},10:function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t){t.component("md-list",t.extend(s["default"])),t.component("md-list-item",t.extend(m["default"])),t.component("md-list-expand",t.extend(a["default"])),t.material.styles.push(u["default"])}Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=o;var d=e(96),s=n(d),r=e(98),m=n(r),l=e(97),a=n(l),c=e(75),u=n(c)},33:function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i["default"]={data:function(){return{height:0}},methods:{calculatePadding:function(){this.height=-this.$el.offsetHeight+"px"}},mounted:function(){this.calculatePadding()}}},34:function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i["default"]={props:{href:String,target:String},render:function(t){var i=this,e="md-button md-list-item-container",n=this.$slots["default"],o=n[0].componentOptions,d=void 0,s=void 0,r={staticClass:"md-list-item",on:{click:function(){i.$emit("click")}}},m=function(){return n[0].data.staticClass=e,n[0].data.directives=[{name:"md-ink-ripple"}],t("li",r,n)},l=function(){n.some(function(t,i){if(t.componentOptions&&"md-list-expand"===t.componentOptions.tag)return d=t,s=i,!0})},a=function(){return t("md-icon",{staticClass:"md-list-expand-indicator"},"keyboard_arrow_down")},c=function(t){t.$children.some(function(t){t.$el.classList.contains("md-list-expand")&&t.calculatePadding()})},u=function(t){var i=void 0;t.$parent.$children.some(function(t){var e=t.$el.classList;if(e.contains("md-list-item-expand")&&e.contains("md-active"))return i=t,e.remove("md-active"),c(t),!0}),i&&t.$el===i.$el||t.$el.classList.add("md-active")},f=function(){return n.splice(s,1),n.push(a()),t("div",{staticClass:e,on:{click:function(){u(i),i.$emit("click")}},directives:[{name:"md-ink-ripple"}]},n)},E=function(){return r.staticClass+=" md-list-item-expand",t("li",r,[f(),d])};if(o&&"router-link"===o.tag)return m();if(l(),d)return E();var p=t("md-button",{staticClass:e,attrs:{target:this.target,href:this.href}},n);return this.target&&(p.data.attrs.rel="noopener"),t("li",r,[p])}}},57:function(t,i){},75:function(t,i){t.exports=".THEME_NAME .md-list,.THEME_NAME.md-list{background-color:BACKGROUND-COLOR-A100;color:BACKGROUND-CONTRAST}.THEME_NAME .md-list.md-transparent,.THEME_NAME.md-list.md-transparent{background-color:transparent;color:inherit}.THEME_NAME .md-list .md-list-item .router-link-active.md-list-item-container,.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container{color:PRIMARY-COLOR}.THEME_NAME .md-list .md-list-item .router-link-active.md-list-item-container>.md-icon,.THEME_NAME.md-list .md-list-item .router-link-active.md-list-item-container>.md-icon{color:PRIMARY-COLOR}.THEME_NAME .md-list .md-list-item.md-primary .md-list-item-container,.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container{color:PRIMARY-COLOR}.THEME_NAME .md-list .md-list-item.md-primary .md-list-item-container>.md-icon,.THEME_NAME.md-list .md-list-item.md-primary .md-list-item-container>.md-icon{color:PRIMARY-COLOR}.THEME_NAME .md-list .md-list-item.md-accent .md-list-item-container,.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container{color:ACCENT-COLOR}.THEME_NAME .md-list .md-list-item.md-accent .md-list-item-container>.md-icon,.THEME_NAME.md-list .md-list-item.md-accent .md-list-item-container>.md-icon{color:ACCENT-COLOR}.THEME_NAME .md-list .md-list-item.md-warn .md-list-item-container,.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container{color:WARN-COLOR}.THEME_NAME .md-list .md-list-item.md-warn .md-list-item-container>.md-icon,.THEME_NAME.md-list .md-list-item.md-warn .md-list-item-container>.md-icon{color:WARN-COLOR}.THEME_NAME .md-list .md-list-item-expand .md-list-item-container,.THEME_NAME.md-list .md-list-item-expand .md-list-item-container{background-color:BACKGROUND-COLOR-A100}.THEME_NAME .md-list .md-list-item-expand .md-list-item-container:hover,.THEME_NAME .md-list .md-list-item-expand .md-list-item-container:focus,.THEME_NAME.md-list .md-list-item-expand .md-list-item-container:hover,.THEME_NAME.md-list .md-list-item-expand .md-list-item-container:focus{background-color:rgba(153,153,153,0.2)}\n"},96:function(t,i,e){var n,o;e(57);var d=e(121);o=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(o=n=n["default"]),"function"==typeof o&&(o=o.options),o.render=d.render,o.staticRenderFns=d.staticRenderFns,t.exports=n},97:function(t,i,e){var n,o;n=e(33);var d=e(115);o=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(o=n=n["default"]),"function"==typeof o&&(o=o.options),o.render=d.render,o.staticRenderFns=d.staticRenderFns,t.exports=n},98:function(t,i,e){var n,o;n=e(34),o=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(o=n=n["default"]),"function"==typeof o&&(o=o.options),t.exports=n},115:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"md-list-expand",style:{"margin-bottom":height}},[_t("default")])},staticRenderFns:[]}},121:function(module,exports){module.exports={render:function(){with(this)return _h("ul",{staticClass:"md-list"},[_t("default")])},staticRenderFns:[]}}})});