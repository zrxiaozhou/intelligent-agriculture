(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47058647"],{3021:function(t,e,r){"use strict";r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return s})),r.d(e,"d",(function(){return a})),r.d(e,"b",(function(){return n}));var o=r("b775");function i(t,e){return Object(o["a"])({url:"/sip/sipconfig/"+t+"/"+e,method:"get"})}function s(t){return Object(o["a"])({url:"/sip/sipconfig",method:"post",data:t})}function a(t){return Object(o["a"])({url:"/sip/sipconfig",method:"put",data:t})}function n(t){return Object(o["a"])({url:"/sip/sipconfig/product/"+t,method:"delete"})}},"447d":function(t,e,r){},b690:function(t,e,r){"use strict";r("447d")},f155:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{padding:"6px"}},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[r("el-row",{attrs:{gutter:100}},[r("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:8}},[r("el-form-item",{attrs:{label:"接入方式"}},[r("el-input",{attrs:{disabled:""},model:{value:t.accessWay,callback:function(e){t.accessWay=e},expression:"accessWay"}})],1),r("el-form-item",{attrs:{label:"服务器域",prop:"domain"}},[r("el-input",{attrs:{disabled:""},model:{value:t.form.domain,callback:function(e){t.$set(t.form,"domain",e)},expression:"form.domain"}})],1),r("el-form-item",{attrs:{label:"服务器ID",prop:"serverSipid"}},[r("el-input",{attrs:{disabled:""},model:{value:t.form.serverSipid,callback:function(e){t.$set(t.form,"serverSipid",e)},expression:"form.serverSipid"}})],1)],1),r("el-col",{attrs:{xs:24,sm:24,md:12,lg:12,xl:8}},[r("el-form-item",{attrs:{label:"服务器地址",prop:"ip"}},[r("el-input",{attrs:{disabled:""},model:{value:t.form.ip,callback:function(e){t.$set(t.form,"ip",e)},expression:"form.ip"}})],1),r("el-form-item",{attrs:{label:"服务器端口",prop:"port"}},[r("el-input",{attrs:{type:"number",disabled:""},model:{value:t.form.port,callback:function(e){t.$set(t.form,"port",e)},expression:"form.port"}})],1),r("el-form-item",{attrs:{label:"认证密码",prop:"password"}},[r("el-input",{attrs:{placeholder:"请输入认证密码"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),r("el-col",{attrs:{xs:23,sm:23,md:23,lg:23,xl:15}},[r("el-form-item",{staticStyle:{"text-align":"center","margin-top":"20px"}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:product:edit"],expression:"['iot:product:edit']"},{name:"show",rawName:"v-show",value:t.form.id&&2!=t.productInfo.status,expression:"form.id && productInfo.status!=2"}],attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("修 改")]),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:product:add"],expression:"['iot:product:add']"},{name:"show",rawName:"v-show",value:!t.form.id&&2!=t.productInfo.status,expression:"!form.id && productInfo.status!=2"}],attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("新 增")])],1)],1)],1)],1)],1)},i=[],s=r("3021"),a={name:"config-sip",props:{product:{type:Object,default:null}},watch:{product:function(t,e){this.productInfo=t,this.productInfo&&0!=this.productInfo.productId&&(this.form.id||this.getSipconfig(!0))}},data:function(){return{accessWay:"国标GB28181",loading:!0,ids:[],total:0,sipconfigList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,productId:null},form:{},rules:{domain:[{required:!0,message:"服务器域不能为空",trigger:"blur"}],serverSipid:[{required:!0,message:"服务器sipid不能为空",trigger:"blur"}],password:[{required:!0,message:"sip认证密码不能为空",trigger:"blur"}]}}},created:function(){this.productInfo=this.product,this.productInfo&&0!=this.productInfo.productId&&this.getSipconfig(!1)},methods:{getSipconfig:function(t){var e=this;Object(s["c"])(this.productInfo.productId,t).then((function(r){e.form=r.data,t&&e.submitForm()}))},submitForm:function(){var t=this;this.$refs["form"].validate((function(e){e&&(t.form.tenantId=t.product.tenantId,t.form.productId=t.product.productId,t.form.isdefault=1,null!=t.form.id?Object(s["d"])(t.form).then((function(e){t.$modal.msgSuccess("修改成功")})):Object(s["a"])(t.form).then((function(e){t.$modal.msgSuccess("新增成功"),t.form=e.data})))}))}}},n=a,d=(r("b690"),r("2877")),u=Object(d["a"])(n,o,i,!1,null,null,null);e["default"]=u.exports}}]);