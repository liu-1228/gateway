(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["data-access_viewAndConfig"],{"0748":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tablePagination"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%",flex:"1"},attrs:{data:e.tableData,border:"",stripe:"",height:"100%","row-key":e.rowKey,"highlight-current-row":"","element-loading-text":e.loadingText,"element-loading-spinner":e.loadingIcon},on:{"selection-change":e.handleSelectionChange,"current-change":e.handleCurrentRow,"expand-change":e.expandRow}},[e.isExpand?a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._t("expandSet",null,{obj:t})]}}],null,!0)}):e._e(),e._v(" "),e.selectCheck?a("el-table-column",{attrs:{type:"selection",selectable:e.selectable,width:"40"}}):e._e(),e._v(" "),e.showIndex?a("el-table-column",{attrs:{fixed:"",type:"index",prop:"序号",label:"序号",width:"50"}}):e._e(),e._v(" "),e.selectRadio?a("el-table-column",{attrs:{fixed:"",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-radio",{attrs:{label:t.$index},nativeOn:{change:function(a){return e.changeRow(t.row)}},model:{value:e.radioValue,callback:function(t){e.radioValue=t},expression:"radioValue"}})]}}],null,!1,955460382)}):e._e(),e._v(" "),e._l(e.colums,(function(t,n){return[t.show?e._e():a("el-table-column",{key:n,attrs:{"show-overflow-tooltip":"",prop:t.prop,label:t.label,width:t.width,align:t.align,"render-header":t.render}}),e._v(" "),"template"===t.show?a("el-table-column",{key:n+t.prop,attrs:{"show-overflow-tooltip":"",prop:t.prop,align:"operate"===t.prop?"center":"left",label:t.label,width:t.width,"render-header":t.render},scopedSlots:e._u([{key:"default",fn:function(a){return[e._t(t.prop,null,{obj:a})]}}],null,!0)}):e._e(),e._v(" "),"operate"===t.show?a("el-table-column",{key:n+t.prop,attrs:{prop:t.prop,label:t.label,width:t.width,"render-header":t.render},scopedSlots:e._u([{key:"default",fn:function(n){return[e._l(t.options,(function(t){return[a("i",{directives:[{name:"show",rawName:"v-show",value:!(t.disable&&t.disable(n.row)),expression:"!(item.disable && item.disable(scope.row))"}],key:t.label,class:[t.icon,"handletable"],on:{click:function(a){return e.handleTable(t.type,n.row)}}},[a("i",{staticClass:"handleTableText"},[e._v(e._s(t.label))])])]}))]}}],null,!0)}):e._e()]}))],2),e._v(" "),e.isShowPagination?a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.pageInfo.currentPage,"page-sizes":e.pageInfo.pageSizes,"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.pageInfo,"currentPage",t)},"update:current-page":function(t){return e.$set(e.pageInfo,"currentPage",t)}}})],1):e._e()],1)},i=[],o=(a("20d6"),a("c5f6"),{name:"Table",props:{tableData:{type:Array,default:function(){return[]}},colums:{type:Array,default:function(){return[]}},isOpreate:{type:Boolean,default:!1},isExpand:{type:Boolean,default:!1},expandData:{type:Array,default:function(){return[]}},setExpand:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingText:{type:String,default:"加载中"},loadingIcon:{type:String,default:"el-icon-loading"},selectCheck:{type:Boolean,default:!1},selectRadio:{type:Boolean,default:!1},pageInfo:{type:Object,default:function(){return{currentPage:1,pageSize:10,pageSizes:[10,20,50,100]}}},total:{type:Number,default:0},rowKey:{type:String,default:""},isShowPagination:{type:Boolean,default:!0},height:{type:String,default:""},showIndex:{type:Boolean,default:!1},selectable:{type:Function,default:function(){return 1}}},data:function(){return{radioValue:""}},methods:{handleTable:function(e,t){this.$emit("handleTable",{type:e,row:t})},handleSizeChange:function(e){this.$emit("handleSizeChange",e)},handleCurrentChange:function(e){this.$emit("handleCurrentChange",e)},handleSelectionChange:function(e){this.$emit("handleSelectionChange",e)},handleCurrentRow:function(e,t){var a=this;e&&(this.$emit("handleRadioChange",e),this.radioValue=this.tableData.findIndex((function(t){return t[a.colums[0].prop]===e[a.colums[0].prop]})))},expandRow:function(e,t){this.$emit("handleRowExpandChange",e,t)},toggleRowExpansion:function(e,t){this.$refs.table.toggleRowExpansion(e,t)},changeRow:function(e){e&&this.$emit("handleRadioChange",e)}},watch:{tableData:function(e){this.radioValue=""}}}),l=o,r=(a("d143"),a("2877")),s=Object(r["a"])(l,n,i,!1,null,null,null);t["a"]=s.exports},"0a49":function(e,t,a){var n=a("9b43"),i=a("626a"),o=a("4bf8"),l=a("9def"),r=a("cd1c");e.exports=function(e,t){var a=1==e,s=2==e,c=3==e,u=4==e,d=6==e,f=5==e||d,p=t||r;return function(t,r,g){for(var h,m,v=o(t),b=i(v),y=n(r,g,3),_=l(b.length),w=0,C=a?p(t,_):s?p(t,0):void 0;_>w;w++)if((f||w in b)&&(h=b[w],m=y(h,w,v),e))if(a)C[w]=m;else if(m)switch(e){case 3:return!0;case 5:return h;case 6:return w;case 2:C.push(h)}else if(u)return!1;return d?-1:c||u?u:C}}},"20d6":function(e,t,a){"use strict";var n=a("5ca1"),i=a("0a49")(6),o="findIndex",l=!0;o in[]&&Array(1)[o]((function(){l=!1})),n(n.P+n.F*l,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(o)},"28a5":function(e,t,a){"use strict";var n=a("aae3"),i=a("cb7c"),o=a("ebd6"),l=a("0390"),r=a("9def"),s=a("5f1b"),c=a("520a"),u=a("79e5"),d=Math.min,f=[].push,p="split",g="length",h="lastIndex",m=4294967295,v=!u((function(){RegExp(m,"y")}));a("214f")("split",2,(function(e,t,a,u){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[g]||2!="ab"[p](/(?:ab)*/)[g]||4!="."[p](/(.?)(.?)/)[g]||"."[p](/()()/)[g]>1||""[p](/.?/)[g]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!n(e))return a.call(i,e,t);var o,l,r,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,p=void 0===t?m:t>>>0,v=new RegExp(e.source,u+"g");while(o=c.call(v,i)){if(l=v[h],l>d&&(s.push(i.slice(d,o.index)),o[g]>1&&o.index<i[g]&&f.apply(s,o.slice(1)),r=o[0][g],d=l,s[g]>=p))break;v[h]===o.index&&v[h]++}return d===i[g]?!r&&v.test("")||s.push(""):s.push(i.slice(d)),s[g]>p?s.slice(0,p):s}:"0"[p](void 0,0)[g]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,n){var i=e(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,i,n):b.call(String(i),a,n)},function(e,t){var n=u(b,e,this,t,b!==a);if(n.done)return n.value;var c=i(e),f=String(this),p=o(c,RegExp),g=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),y=new p(v?c:"^(?:"+c.source+")",h),_=void 0===t?m:t>>>0;if(0===_)return[];if(0===f.length)return null===s(y,f)?[f]:[];var w=0,C=0,x=[];while(C<f.length){y.lastIndex=v?C:0;var S,N=s(y,v?f:f.slice(C));if(null===N||(S=d(r(y.lastIndex+(v?0:C)),f.length))===w)C=l(f,C,g);else{if(x.push(f.slice(w,C)),x.length===_)return x;for(var I=1;I<=N.length-1;I++)if(x.push(N[I]),x.length===_)return x;C=w=S}}return x.push(f.slice(w)),x}]}))},"2f46":function(e,t,a){},"33fd":function(e,t,a){"use strict";var n=a("60a6"),i=a.n(n);i.a},"3f7a":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialog"},[a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:e.title,visible:e.dialogVisible,width:e.width,center:e.center,fullscreen:e.fullscreen,"before-close":e.handleClose,"close-on-click-modal":!1,"append-to-body":e.innerVisible},on:{"update:visible":function(t){e.dialogVisible=t},open:e.openDialog}},[e._t("default"),e._v(" "),e.isBtn?a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e.customFooter?e._l(e.customOptions,(function(t,n){return a("el-button",{key:n,attrs:{size:"mini",disabled:t.disabled,plain:!!t.plain,type:t.type||"primary"},on:{click:function(e){t.handleClick&&t.handleClick()}}},[e._v(e._s(t.label))])})):[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.confirmDialog()}}},[e._v("确 定")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(t){return e.cancelDialog()}}},[e._v("取 消")])]],2):e._e()],2)],1)},i=[],o={name:"Dialog",props:{title:{type:String,default:"提示"},dialogVisible:{type:Boolean,default:!1},center:{type:Boolean,default:!1},innerVisible:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},handleClose:{type:Function,default:function(){return console.log("关闭前的回调函数")}},width:{type:String,default:"600px"},isBtn:{type:Boolean,default:!0},customFooter:{type:Boolean,default:!1},customOptions:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{confirmDialog:function(){this.$emit("confirmDialog")},cancelDialog:function(){this.$emit("cancelDialog")},openDialog:function(){this.$emit("openDialog")}}},l=o,r=(a("33fd"),a("2877")),s=Object(r["a"])(l,n,i,!1,null,null,null);t["a"]=s.exports},"5dbc":function(e,t,a){var n=a("d3f4"),i=a("8b97").set;e.exports=function(e,t,a){var o,l=t.constructor;return l!==a&&"function"==typeof l&&(o=l.prototype)!==a.prototype&&n(o)&&i&&i(e,o),e}},"60a6":function(e,t,a){},"64c4":function(e,t,a){},7514:function(e,t,a){"use strict";var n=a("5ca1"),i=a("0a49")(5),o="find",l=!0;o in[]&&Array(1)[o]((function(){l=!1})),n(n.P+n.F*l,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(o)},8520:function(e,t,a){"use strict";var n=a("2f46"),i=a.n(n);i.a},"8b97":function(e,t,a){var n=a("d3f4"),i=a("cb7c"),o=function(e,t){if(i(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,a){return o(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:o}},aa77:function(e,t,a){var n=a("5ca1"),i=a("be13"),o=a("79e5"),l=a("fdef"),r="["+l+"]",s="​",c=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),d=function(e,t,a){var i={},r=o((function(){return!!l[e]()||s[e]()!=s})),c=i[e]=r?t(f):l[e];a&&(i[a]=c),n(n.P+n.F*r,"String",i)},f=d.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},b5cd:function(e,t,a){},c333:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"service-config"},[a("div",{staticClass:"config-content"},[a("div",{staticClass:"verify-operate mb10 mt10"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addAccessView}},[e._v("新增")])],1),e._v(" "),a("div",{staticStyle:{height:"calc(100% - 50px)"}},[a("Table",{attrs:{tableData:e.tableData,colums:e.colums},on:{handleTable:e.handleTable,handleSizeChange:e.handleSizeChange,handleCurrentChange:e.handleCurrentChange,handleSelectionChange:e.handleSelectionChange},scopedSlots:e._u([{key:"status",fn:function(t){return[0===t.obj.row.status?a("span",[a("el-tag",{staticClass:"tag-success",attrs:{type:"danger"}},[e._v("已停止")])],1):e._e(),e._v(" "),1===t.obj.row.status?a("span",[a("el-tag",{staticClass:"tag-error",attrs:{type:"primary"}},[e._v("运行中")])],1):e._e()]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"","page-sizes":e.pageInfo.pageSizes,"current-page":e.pageInfo.currentPage,"page-size":e.pageInfo.pageSize,layout:"total, prev, pager, next, jumper, sizes",total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1),e._v(" "),a("div",{staticClass:"config-tree"},[e._m(0),e._v(" "),a("p",{staticClass:"config-text"},[e._v(e._s(e.configFile))])]),e._v(" "),a("AddAccessViewDialog",{ref:"AddAccessViewDialog",attrs:{dialog:e.addAccessViewDialog},on:{cancelCb:e.cancelCb}})],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"info-title"},[a("span",{staticStyle:{padding:"10px","line-height":"30px"}},[e._v("监测点配置")])])}],o=(a("28a5"),a("0748")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Dialog",{attrs:{title:"新增接入视图配置",width:"50rem",dialogVisible:e.dialog.visible,handleClose:e.cancelDialog},on:{confirmDialog:e.confirmDialog,cancelDialog:e.cancelDialog}},[a("div",{staticClass:"check-guide"},[a("el-form",{ref:"form",attrs:{model:e.dialog.form,rules:e.rules,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"线路",prop:"lineName"}},[a("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择线路"},on:{change:e.chooseLine},model:{value:e.dialog.form.lineName,callback:function(t){e.$set(e.dialog.form,"lineName",t)},expression:"dialog.form.lineName"}},e._l(e.lineList,(function(t){return a("el-option",{key:t.uuid,attrs:{label:t.lineName,value:t.lineName}},[e._v("\n                "+e._s(t.lineName)+"\n              ")])})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"车站"}},[a("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择车站",clearable:"",disabled:""!=e.dialog.form.trainId},model:{value:e.dialog.form.stationName,callback:function(t){e.$set(e.dialog.form,"stationName",t)},expression:"dialog.form.stationName"}},e._l(e.stationList,(function(t){return a("el-option",{key:t.uuid,attrs:{label:t.stationCode,value:t.stationName}},[e._v("\n                "+e._s(t.stationName)+"\n              ")])})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"车辆"}},[a("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择车辆",clearable:"",disabled:""!=e.dialog.form.stationName},model:{value:e.dialog.form.trainId,callback:function(t){e.$set(e.dialog.form,"trainId",t)},expression:"dialog.form.trainId"}},e._l(e.trainList,(function(t){return a("el-option",{key:t.uuid,attrs:{label:t.trainId,value:t.trainId}},[e._v("\n                "+e._s(t.trainId)+"\n              ")])})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"专业",prop:"major"}},[a("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择专业"},model:{value:e.dialog.form.major,callback:function(t){e.$set(e.dialog.form,"major",t)},expression:"dialog.form.major"}},e._l(e.perfession,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}},[e._v("\n                "+e._s(t.name)+"\n              ")])})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"设备"}},[a("el-input",{staticStyle:{width:"400px"},model:{value:e.dialog.form.deviceName,callback:function(t){e.$set(e.dialog.form,"deviceName",t)},expression:"dialog.form.deviceName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"接入组件",prop:"compId"}},[a("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"请选择接入组件"},on:{change:e.chooseComp},model:{value:e.dialog.form.compId,callback:function(t){e.$set(e.dialog.form,"compId",t)},expression:"dialog.form.compId"}},e._l(e.compList,(function(t){return a("el-option",{key:t.compId,attrs:{label:t.compName,value:t.compId}},[e._v("\n                "+e._s(t.compName)+"\n              ")])})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"jar包配置文件"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"/operationportal/SysFile/uploadFile","on-success":e.jarUploadSuccess,"on-remove":e.jarHandleRemove,"before-remove":e.jarBeforeRemove,accept:".yml",data:{type:2},"file-list":e.dialog.form.jarFileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传文件")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"基础配置文件"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"/operationportal/SysFile/uploadFile","on-success":e.baseUploadSuccess,"on-remove":e.baseHandleRemove,"before-remove":e.baseBeforeRemove,accept:"*",data:{type:1},"file-list":e.dialog.form.baseFileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传文件")])],1)],1)],1)],1)])},r=[],s=(a("7514"),a("7f7f"),a("3f7a")),c={name:"AddAccessViewDialog",props:{dialog:{type:Object,default:{form:{lineName:"",stationName:"",trainId:"",major:"",deviceName:"",compId:"",compName:"",compJarPath:""}}}},components:{Dialog:s["a"]},data:function(){return{type:0,rules:{lineName:[{required:!0,message:"请选择线路",trigger:"blur"}],major:[{required:!0,message:"请选择专业",trigger:"blur"}],compId:[{required:!0,message:"请选择接入组件",trigger:"blur"}]},lineList:[],stationList:[],trainList:[],compList:[],perfession:[{name:"信号",id:"SIG"},{name:"车辆",id:"VEHICLE"},{name:"水泵",id:"BAS"}]}},mounted:function(){this.getLine(),this.getComponent()},methods:{getComponent:function(){var e=this;this.$http("componentList").get({current:1,size:1e3,type:this.type}).then((function(t){e.compList=t.data.records}))},chooseComp:function(e){var t=this.compList.filter((function(t){return t.compId===e}));this.dialog.form.compName=t[0].compName,this.dialog.form.compJarPath=t[0].compJarPath},getLine:function(){var e=this;this.$http("lineList").get({current:1,size:1e3}).then((function(t){e.lineList=t.data.records}))},chooseLine:function(e){this.getStation(e),this.getTrain(e)},getStation:function(e){var t=this;this.$http("stationList").get({current:1,size:1e3,lineName:e}).then((function(e){t.stationList=e.data.records}))},getTrain:function(e){var t=this;this.$http("trainList").get({current:1,size:1e3,lineName:e}).then((function(e){t.trainList=e.data.records}))},jarUploadSuccess:function(e,t,a){this.dialog.form.confFilePath=e.data},jarHandleRemove:function(){this.dialog.form.confFilePath=""},jarBeforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},baseUploadSuccess:function(e,t,a){this.dialog.form.lineFilePath=e.data},baseHandleRemove:function(){this.dialog.form.lineFilePath=""},baseBeforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},confirmDialog:function(){var e=this;this.$refs.form.validate((function(t){if(t){if(!e.dialog.form.stationName&&!e.dialog.form.trainId)return e.$message({message:"请选择车站或车辆",type:"warning"});var a=e.lineList.find((function(t){return t.lineName===e.dialog.form.lineName}));if(e.dialog.form.lineCode=a.lineCode,e.dialog.form.stationName){var n=e.stationList.find((function(t){return t.stationName===e.dialog.form.stationName}));e.dialog.form.stationCode=n.stationCode}e.dialog.form.type=e.type,e.$http("dataAccessAdd").post(e.dialog.form).then((function(t){e.$message({type:"success",message:"新增成功"}),e.$emit("cancelCb")}))}}))},cancelDialog:function(){this.$emit("cancelCb"),this.reset()},reset:function(){this.form={name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}}},u=c,d=(a("db84"),a("2877")),f=Object(d["a"])(u,l,r,!1,null,null,null),p=f.exports,g={name:"service-config",components:{Table:o["a"],AddAccessViewDialog:p},data:function(){return{configFile:"",type:0,colums:[{prop:"lineName",label:"线路"},{prop:"stationName",label:"车站/车辆"},{prop:"major",label:"专业"},{prop:"deviceName",label:"设备"},{prop:"compName",label:"接入组件"},{prop:"status",label:"状态",show:"template"},{prop:"operate",label:"操作",width:"250px",show:"operate",options:[{label:"查看配置",icon:"",type:"showConfig"},{label:"启动",icon:"",type:"start"},{label:"停止",icon:"",type:"stop"},{label:"删除",icon:"",type:"delete"}]}],tableData:[],pageInfo:{currentPage:1,pageSize:10,pageSizes:[10,20,50,100]},total:0,checkData:[],addAccessViewDialog:{visible:!1,form:{lineName:"",stationName:"",trainId:"",major:"",deviceName:"",compId:"",compName:"",compJarPath:""}}}},mounted:function(){this.getDataAccessList()},methods:{handleTable:function(e){var t=e.type,a=e.row;switch(console.log(0),t){case"start":this.startJar(a.id);break;case"stop":this.stopJar(a.id);break;case"delete":this.deleteDataAccess(a.id);break;case"showConfig":this.getConfig(a.confFilePath);break;default:break}},getConfig:function(e){var t=this;this.axios.get("/operationportal/SysFile/readFile",{params:{fileName:e}}).then((function(e){var a=e.data.split("\n|\r");console.log(a),t.configFile=e.data})).catch((function(e){console.log(e)}))},startJar:function(e){var t=this;this.$http("dataAccessStart").get({id:e}).then((function(e){t.$message({type:"success",message:"成功启动"}),t.getDataAccessList()}))},stopJar:function(e){var t=this;this.$http("dataAccessStop").get({id:e}).then((function(e){t.$message({type:"success",message:"成功停止"}),t.getDataAccessList()}))},deleteDataAccess:function(e){var t=this;this.$confirm("确定删除接入配置？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$http("dataAccessDel").get({id:e}).then((function(e){t.$message({type:"success",message:"删除成功"}),t.getDataAccessList()}))})).catch((function(){}))},getDataAccessList:function(){var e=this;console.log(this.type),this.$http("dataAccessList").get({current:this.pageInfo.currentPage,size:this.pageInfo.pageSize,type:this.type}).then((function(t){e.total=t.data.total,e.tableData=t.data.records}))},addAccessView:function(){this.addAccessViewDialog={visible:!0,form:{lineName:"",stationName:"",trainId:"",major:"",devName:"",compId:"",compName:"",compJarPath:""}}},cancelCb:function(){this.addAccessViewDialog.visible=!1,this.getDataAccessList()},handleSizeChange:function(e){this.pageInfo.pageSize=e,this.pageInfo.currentPage=1},handleCurrentChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.pageInfo.currentPage=e},handleSelectionChange:function(e){this.checkData=e}},watch:{}},h=g,m=(a("8520"),Object(d["a"])(h,n,i,!1,null,"ee879856",null));t["default"]=m.exports},c5f6:function(e,t,a){"use strict";var n=a("7726"),i=a("69a8"),o=a("2d95"),l=a("5dbc"),r=a("6a99"),s=a("79e5"),c=a("9093").f,u=a("11e9").f,d=a("86cc").f,f=a("aa77").trim,p="Number",g=n[p],h=g,m=g.prototype,v=o(a("2aeb")(m))==p,b="trim"in String.prototype,y=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){t=b?t.trim():f(t,3);var a,n,i,o=t.charCodeAt(0);if(43===o||45===o){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+t}for(var l,s=t.slice(2),c=0,u=s.length;c<u;c++)if(l=s.charCodeAt(c),l<48||l>i)return NaN;return parseInt(s,n)}}return+t};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof g&&(v?s((function(){m.valueOf.call(a)})):o(a)!=p)?l(new h(y(t)),a,g):y(t)};for(var _,w=a("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;w.length>C;C++)i(h,_=w[C])&&!i(g,_)&&d(g,_,u(h,_));g.prototype=m,m.constructor=g,a("2aba")(n,p,g)}},cd1c:function(e,t,a){var n=a("e853");e.exports=function(e,t){return new(n(e))(t)}},d143:function(e,t,a){"use strict";var n=a("b5cd"),i=a.n(n);i.a},db84:function(e,t,a){"use strict";var n=a("64c4"),i=a.n(n);i.a},e853:function(e,t,a){var n=a("d3f4"),i=a("1169"),o=a("2b4c")("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),n(t)&&(t=t[o],null===t&&(t=void 0))),void 0===t?Array:t}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);