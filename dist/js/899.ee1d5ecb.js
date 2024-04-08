"use strict";(self["webpackChunka"]=self["webpackChunka"]||[]).push([[899],{79899:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"fabric-top"},[e("div",{staticClass:"btn"},[e("el-color-picker",{attrs:{"show-alpha":""},on:{change:t.changeColor},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),e("el-select",{attrs:{placeholder:"请选择"},on:{change:t.changeObject},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.objects,(function(t){return e("el-option",{key:t.data.id,attrs:{label:t.data.name,value:t.data.id}})})),1),e("el-tooltip",{staticClass:"item",attrs:{content:"测试",placement:"top-end"}},[e("span",{on:{click:t.clearDesign}},[e("i",{staticClass:"el-icon-folder-delete"})])]),e("el-tooltip",{staticClass:"item",attrs:{content:"返回编辑",placement:"top-end"}},[e("span",{on:{click:t.backDesign}},[e("i",{staticClass:"el-icon-edit-outline"})])])],1)]),t._m(0)])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"fabric-con"},[e("div",{staticClass:"fabric-body",attrs:{id:"canvas-box"}},[e("canvas",{attrs:{id:"showCanvas"}})])])}],s=(i(57658),i(69662)),o=i(1708),c=i.n(o),l={created(){},mounted(){this.init()},data(){return{design:"",objects:[],originalObj:[],value:"",color:"",index:""}},methods:{init:function(){let t=this;t.design=new s.fabric.Canvas("showCanvas",{backgroundColor:"",selection:!1}),t.design.hoverCursor="default";let e=document.getElementById("canvas-box");t.design.setWidth(e.offsetWidth-30),t.design.setHeight(e.offsetHeight-30),t.design.on("mouse:wheel",(function(e){console.log(this);var i=new s.fabric.Point(t.design.width/2,t.design.height/2),n=e.e.deltaY,a=t.design.getZoom();a*=.999**n,a>20&&(a=20),a<.01&&(a=.01),this.zoomToPoint(i,a),e.e.preventDefault(),e.e.stopPropagation(),t.viewportTransform=this.viewportTransform})),sessionStorage.getItem("canvasDesign")&&(t.originalObj=JSON.parse(sessionStorage.getItem("canvasDesign")).objects,t.zoomToFitCanvas(),window.onresize=function(){t.design.setWidth(e.offsetWidth-30),t.design.setHeight(e.offsetHeight-30),t.resizeCanvas()})},addObject:function(t){t.toObject=function(t){return function(e){return s.fabric.util.object.extend(t.call(this,e),{data:this.data})}}(t.toObject),t.set("selectable",!1),this.design.add(t)},getSvg:function(t){console.log(t);let e=this;new s.fabric.Image.fromURL("images/wechat.svg",(function(i){i["data"]=t.data,console.log(i),i.scale(1).set({left:t.left,top:t.top}),e.addObject(i)}))},getCanvas:function(t,e){var i=document.createElement("canvas");i.width=t.width?t.width*e:100,i.height=t.height?t.height*e:100;var n=c().init(i,null,{devicePixelRatio:2}),a=t.data.options||{};n.setOption(a,!0);var o=s.fabric.util.createClass(s.fabric.Rect,{type:"canvasRect",initialize:function(t){t||(t={}),this.callSuper("initialize",t)},toObject:function(){return s.fabric.util.object.extend(this.callSuper("toObject"),{})},_render:function(e){this.callSuper("_render",e);var i=n.getRenderedCanvas({pixelRatio:2,backgroundColor:""});e.drawImage(i,-t.width/2,-t.height/2,t.width,t.height)}});return new o(t)},resizeCanvas:function(){let t=document.getElementById("canvas-box");this.design.setWidth(t.offsetWidth),this.design.setHeight(t.offsetHeight),this.design.setZoom(1),this.design.absolutePan({x:0,y:0}),this.zoomToFitCanvas()},zoomToFitCanvas:function(){let t,e,i,n,a=this,o="",c={};if(a.originalObj.length>0){for(let s=0;s<a.originalObj.length;s++)c=a.originalObj[s],0==s?(t=c.left,e=c.top,i=c.left+c.width,n=c.top+c.height):(t=Math.min(t,c.left),e=Math.min(e,c.top),i=Math.max(i,c.left+c.width),n=Math.max(n,c.top+c.height));var l=(i-t-a.design.width)/2+t,r=(n-e-a.design.height)/2+e;a.design.absolutePan({x:l,y:r});var d=Math.min(a.design.width/(i-t),a.design.height/(n-e)),h=new s.fabric.Point(a.design.width/2,a.design.height/2);a.design.zoomToPoint(h,d);for(let t=0;t<a.originalObj.length;t++)if(c=a.originalObj[t],console.log(c),c.data&&c.data.type){switch(c.data.type){case"Line":o=new s.fabric.Line([left,c.width,left,top],c);break;case"Echart":o=this.getCanvas(c,d);break;case"Svg":this.getSvg(c);break;default:o=new s.fabric[c.data.type](c);break}this.addObject(o)}}},test:function(){this.objects=this.design.getObjects(),console.log(this.objects),console.log(this.originalObj)},changeColor:function(t){if(console.log(t),this.value){for(let e=0;e<this.objects.length;e++)this.value==this.objects[e].data.id&&(this.objects[e].set("fill",t),this.design.renderAll());console.log(this.objects)}},changeObject:function(){},backDesign:function(){this.$router.push({path:"/editor"})},clearDesign:function(){this.test()}},components:{}},r=l,d=i(43736),h=(0,d.Z)(r,n,a,!1,null,"bdfab72a",null),g=h.exports}}]);
//# sourceMappingURL=899.ee1d5ecb.js.map