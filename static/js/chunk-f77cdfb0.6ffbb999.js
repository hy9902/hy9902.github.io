(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f77cdfb0"],{"31f0":function(e,t,a){},c361:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container"},[a("el-drag-select",{staticStyle:{width:"500px"},attrs:{multiple:"",placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("div",{staticStyle:{"margin-top":"30px"}},e._l(e.value,(function(t){return a("el-tag",{key:t,staticStyle:{"margin-right":"15px"}},[e._v("\n      "+e._s(t)+"\n    ")])})),1)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",e._g(e._b({ref:"dragSelect",staticClass:"drag-select",attrs:{multiple:""},model:{value:e.selectVal,callback:function(t){e.selectVal=t},expression:"selectVal"}},"el-select",e.$attrs,!1),e.$listeners),[e._t("default")],2)},r=[],c=a("75fc"),u=a("aa47"),i={name:"DragSelect",props:{value:{type:Array,required:!0}},computed:{selectVal:{get:function(){return Object(c["a"])(this.value)},set:function(e){this.$emit("input",Object(c["a"])(e))}}},mounted:function(){this.setSort()},methods:{setSort:function(){var e=this,t=this.$refs.dragSelect.$el.querySelectorAll(".el-select__tags > span")[0];this.sortable=u["default"].create(t,{ghostClass:"sortable-ghost",setData:function(e){e.setData("Text","")},onEnd:function(t){var a=e.value.splice(t.oldIndex,1)[0];e.value.splice(t.newIndex,0,a)}})}}},o=i,p=(a("ef96"),a("2877")),f=Object(p["a"])(o,s,r,!1,null,"46cab54a",null),v=f.exports,d={name:"DragSelectDemo",components:{ElDragSelect:v},data:function(){return{value:["Apple","Banana","Orange"],options:[{value:"Apple",label:"Apple"},{value:"Banana",label:"Banana"},{value:"Orange",label:"Orange"},{value:"Pear",label:"Pear"},{value:"Strawberry",label:"Strawberry"}]}}},b=d,g=Object(p["a"])(b,l,n,!1,null,null,null);t["default"]=g.exports},ef96:function(e,t,a){"use strict";var l=a("31f0"),n=a.n(l);n.a}}]);