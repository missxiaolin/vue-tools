(self["webpackChunka"]=self["webpackChunka"]||[]).push([[178],{73360:function(t,e,i){"use strict";i.d(e,{Z:function(){return l}});var n=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"context-menu",style:t.style,on:{mousedown:function(t){t.stopPropagation()},contextmenu:function(t){t.preventDefault()}}},[t._l(t.lists,(function(i,n){return e("p",{key:n,staticClass:"box",on:{click:function(e){return t.handleLayer(i.key)}}},[t._v(" "+t._s(i.name)+" ")])})),t._t("default")],2)},o=[],s={name:"context-menu",data(){return{lists:[{key:"upLayer",name:"上移图层"},{key:"downLayer",name:"下移图层"},{key:"topLayer",name:"置顶图层"},{key:"footLayer",name:"置底图层"},{key:"removeLayer",name:"删除图层"}],triggerShowFn:()=>{},triggerHideFn:()=>{},x:null,y:null,style:{},binded:!1}},props:{target:null,show:Boolean},mounted(){this.bindEvents()},watch:{show(t){t?this.bindHideEvents():this.unbindHideEvents()},target(t){this.bindEvents()}},methods:{handleLayer(t){this.$emit("handleLayer",t)},bindEvents(){this.$nextTick((()=>{this.target&&!this.binded&&(this.triggerShowFn=this.contextMenuHandler.bind(this),this.target.addEventListener("contextmenu",this.triggerShowFn),this.binded=!0)}))},unbindEvents(){this.target&&this.target.removeEventListener("contextmenu",this.triggerShowFn)},bindHideEvents(){this.triggerHideFn=this.clickDocumentHandler.bind(this),document.addEventListener("mousedown",this.triggerHideFn),document.addEventListener("mousewheel",this.triggerHideFn)},unbindHideEvents(){document.removeEventListener("mousedown",this.triggerHideFn),document.removeEventListener("mousewheel",this.triggerHideFn)},clickDocumentHandler(t){this.$emit("update:show",!1)},contextMenuHandler(t){this.x=t.clientX,this.y=t.clientY,this.layout(),this.$emit("update:show",!0),t.preventDefault()},layout(){this.style={left:this.x+"px",top:this.y+"px"}}}},a=s,r=i(43736),c=(0,r.Z)(a,n,o,!1,null,"1bf60f0a",null),l=c.exports},97178:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return l}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("div",{staticClass:"fabric-top"},[e("div",{staticClass:"btn"},[e("el-tooltip",{staticClass:"item",attrs:{content:"线段",placement:"top-end"}},[e("span",{on:{click:function(e){return t.drawPolyLine("segments")}}},[e("i",{staticClass:"el-icon-share"})])]),e("el-tooltip",{staticClass:"item",attrs:{content:"多边形",placement:"top-end"}},[e("span",{on:{click:function(e){return t.drawPolyLine("polygon")}}},[e("i",{staticClass:"el-icon-share"})])]),e("el-tooltip",{staticClass:"item",attrs:{content:"测试",placement:"top-end"}},[e("span",{on:{click:t.test}},[e("i",{staticClass:"el-icon-picture-outline"})])]),e("el-tooltip",{staticClass:"item",attrs:{content:"更改图片",placement:"top-end"}},[e("span",{on:{click:t.changeImg}},[e("i",{staticClass:"el-icon-picture-outline"})])]),e("el-tooltip",{staticClass:"item",attrs:{content:"设计预览",placement:"top-end"}},[e("span",{on:{click:t.showDesign}},[e("i",{staticClass:"el-icon-view"})])]),e("el-tooltip",{staticClass:"item",attrs:{content:"删除对象",placement:"top-end"}},[e("span",{on:{click:t.removeObject}},[e("i",{staticClass:"el-icon-folder-delete"})])]),e("el-tooltip",{staticClass:"item",attrs:{content:"保存操作(Ctrl+s)",placement:"top-end"}},[e("span",{on:{click:t.saveDesign}},[e("i",{staticClass:"el-icon-folder-checked"})])])],1)]),e("div",{staticClass:"fabric-con"},[e("div",{staticClass:"side-bar"},[e("el-scrollbar",{staticClass:"scrollbar"},[e("el-collapse",{attrs:{accordion:""},model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},t._l(t.List,(function(i){return e("el-collapse-item",{key:i.key,attrs:{title:i.title,name:i.key}},[e("div",{staticClass:"collapse-con"},t._l(i.data,(function(i,n){return e("span",{key:n,attrs:{title:i.data.name}},[e("i",{class:i.data.icon,attrs:{draggable:"true"},on:{dragstart:function(e){return t.drag(e,i)}}})])})),0)])})),1)],1)],1),e("div",{staticClass:"fabric-body",attrs:{id:"canvas-box"},on:{drop:function(e){return t.drop(e)},touchstart:function(e){return t.drop(e)},dragover:function(e){return t.allowDrop(e)}}},[e("canvas",{attrs:{id:"designCanvas"}})])]),e("context-menu",{attrs:{target:t.contextMenuTarget,show:t.contextMenuVisible},on:{handleLayer:t.handleLayer,"update:show":e=>t.contextMenuVisible=t.contextMenuObjHover?e:t.contextMenuObjHover}})],1)},o=[],s=i(5269),a=s.Z,r=i(43736),c=(0,r.Z)(a,n,o,!1,null,"44c8057e",null),l=c.exports},5269:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(57658),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__),fabric__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(69662),fabric__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_1__),_utils_aligningGuidelines__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9099),_utils_centeringGuidelines__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(71062),_components_contextMenu_vue__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(73360),echarts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1708),echarts__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_4__),uuid_random__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(46378),uuid_random__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(uuid_random__WEBPACK_IMPORTED_MODULE_5__),fabric_history__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(84939),fabric_history__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(fabric_history__WEBPACK_IMPORTED_MODULE_6__);__webpack_exports__["Z"]={components:{ContextMenu:_components_contextMenu_vue__WEBPACK_IMPORTED_MODULE_3__.Z},created(){},mounted(){this.init()},data(){return{contextMenuTarget:null,contextMenuVisible:!1,contextMenuObjHover:!1,activeItem:"second",List:[{title:"基本图形",key:"first",data:[{data:{name:"矩形",icon:"el-icon-s-marketing",type:"Rect"},width:50,height:50,fill:"rgba(255,0,0,0.5)"},{data:{name:"圆形",icon:"el-icon-s-marketing",type:"Circle"},radius:50,left:12,top:12,fill:"#aac"},{width:100,height:100,fill:"#cca",data:{name:"三角形",icon:"el-icon-s-marketing",type:"Triangle"}},{data:{name:"直线",icon:"el-icon-s-marketing",type:"Line"},fill:"#5E2300",stroke:"#5E2300",strokeWidth:10,width:100},{data:{name:"文字",icon:"el-icon-s-marketing",type:"IText"},lockScalingFlip:!0,lockUniScaling:!1,fontSize:16,padding:5,fontFamily:"arial black",fill:"#ff0000"}]},{title:"自定义图形",key:"second",data:[{data:{name:"自定义",icon:"el-icon-s-marketing",type:"Echart",value:1,width:10,handle:["data.options.series.axisLine.lineStyle.width=data.width;","data.options.series.data[0].value=data.value;"],options:{title:{text:"",bottom:15,x:"center",textStyle:{color:"#999",fontSize:"16"}},series:{name:"title",type:"gauge",radius:"99%",min:1,max:3,splitNumber:0,axisLine:{lineStyle:{color:[[.5,"#00AB6F"],[1,"#E4E5ED"]],width:10}},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},pointer:{length:"75%",width:"0.1%"},itemStyle:{normal:{color:"transparent"}},detail:{show:!0,textStyle:{fontSize:26,color:"#fff"},formatter:"{value}",offsetCenter:["0%","0%"]},data:[{value:1.5}]}}},width:100,height:100,fill:"transparent"},{width:50,height:50,data:{name:"自定义",icon:"el-icon-s-marketing",type:"Svg",imgsrc:"images/wechat.svg"}}]}],zoomPoint:"",zoom:1,viewportTransform:null,design:"",ActiveObject:{},ActiveGroup:[],drawType:"",drawWidth:2,color:"#E34F51",drawingObject:null,moveCount:1,doDrawing:!1,mouseFrom:{},mouseTo:{},polygonMode:!1,pointArray:[],lineArray:[],activeShape:!1,activeLine:"",line:{}}},methods:{init:function(){let t=this;t.design=new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Canvas("designCanvas",{backgroundColor:""}),(0,_utils_aligningGuidelines__WEBPACK_IMPORTED_MODULE_2__.Z)(t.design),(0,_utils_centeringGuidelines__WEBPACK_IMPORTED_MODULE_7__.Z)(t.design),fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.originX=fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Object.prototype.originY="center";let e=document.getElementById("canvas-box");this.contextMenuTarget=e,t.design.setWidth(e.offsetWidth),t.design.setHeight(e.offsetHeight),this.zoomPoint=new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Point(t.design.width/2,t.design.height/2),document.onkeydown=function(e){if(!t||!t._isDestroyed){var i=e||window.event||arguments.callee.caller.arguments[0];if(i)switch(i.keyCode){case 46:t.removeObject();break;case 90:i.ctrlKey&&t.design.undo();break;case 89:i.ctrlKey&&t.design.redo();break;case 83:i.preventDefault(),i.ctrlKey&&t.saveDesign();break}}},t.design.on("mouse:wheel",(function(e){console.log(this);var i=e.e.deltaY;t.zoom=t.design.getZoom(),t.zoom*=.999**i,t.zoom>20&&(t.zoom=20),t.zoom<.01&&(t.zoom=.01),this.zoomToPoint(t.zoomPoint,t.zoom),e.e.preventDefault(),e.e.stopPropagation(),t.viewportTransform=this.viewportTransform})),t.design.on("mouse:down",(function(e){var i=e.e;!0===i.altKey&&(this.isDragging=!0,this.selection=!1,this.lastPosX=i.clientX,this.lastPosY=i.clientY);var n=e.pointer||t.transformMouse(i.offsetX,i.offsetY);if(t.mouseFrom.x=n.x,t.mouseFrom.y=n.y,t.doDrawing=!0,"polygon"==t.drawType||"segments"==t.drawType){t.design.skipTargetFind=!1;try{t.pointArray.length>1&&("polygon"==t.drawType&&e.target&&e.target.id==t.pointArray[0].id&&t.generatePolygon(),"segments"==t.drawType&&e.target&&e.target.id==t.pointArray[t.pointArray.length-1].id&&t.generateSegements()),t.polygonMode&&t.addPoint(e)}catch(o){console.log(o)}}})),t.design.on("mouse:move",(function(e){var i=e.e;if(this.isDragging){var n=this.viewportTransform;n[4]+=i.clientX-this.lastPosX,n[5]+=i.clientY-this.lastPosY,this.requestRenderAll(),this.lastPosX=i.clientX,this.lastPosY=i.clientY,t.viewportTransform=this.viewportTransform}if(!(t.moveCount%3)||t.doDrawing){t.moveCount++;var o=e.pointer||t.transformMouse(i.offsetX,i.offsetY);if(t.mouseTo.x=o.x,t.mouseTo.y=o.y,"polygon"==t.drawType||"segments"==t.drawType){if(t.activeLine&&"line"==t.activeLine.class){var s=t.design.getPointer(i);if(t.activeLine.set({x2:s.x,y2:s.y}),"polygon"==t.drawType){var a=t.activeShape.get("points");a[t.pointArray.length]={x:s.x,y:s.y,zIndex:1},t.activeShape.set({points:a})}}t.design.renderAll()}}})),t.design.on("mouse:up",(function(e){var i=e.e;if(this.isDragging=!1,this.selection=!0,"polygon"==t.drawType||"segments"==t.drawType){var n=e.pointer||t.transformMouse(i.offsetX,i.offsetY);t.mouseTo.x=n.x,t.mouseTo.y=n.y,t.drawingObject=null,t.moveCount=1}})),t.design.on("object:moving",(function(e){console.log(e);let i=e.target,n=e.target;if(i.startLine&&i.startLine.set({x2:i.left,y2:i.top}),i.endLine&&i.endLine.set({x1:i.left,y1:i.top}),n._objects)for(let t=0;t<n._objects.length;t++){i=n._objects[t];let e=n.left+i.left,o=n.top+i.top;i.startLine&&i.startLine.set({x2:e,y2:o}),i.endLine&&i.endLine.set({x1:e,y1:o})}t.design.renderAll()})),t.design.on("mouse:over",(function(e){e.target&&(console.log(e),t.contextMenuObjHover=!0,e.target._objects?t.ActiveGroup=e.target._objects:t.ActiveObject=e.target)})),t.design.on("mouse:out",(function(){t.contextMenuObjHover=!1}))},transformMouse(t,e){return{x:t/1,y:e/1}},drag:function(t,e){t.dataTransfer.setData("item",JSON.stringify(e))},allowDrop:function(t){t.preventDefault()},drop:function(t){var e="";this.design.zoomToPoint(this.zoomPoint,this.zoom);var i=JSON.parse(t.dataTransfer.getData("item")),n=t.offsetX,o=t.offsetY;switch(this.viewportTransform&&(n=(n-this.viewportTransform[4])/this.zoom,o=(o-this.viewportTransform[5])/this.zoom),i.left=n,i.top=o,i.data["uuid"]=uuid_random__WEBPACK_IMPORTED_MODULE_5___default()(),i.data.type){case"Line":e=new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Line([n,i.width,n,o],i);break;case"IText":e=new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.IText("文字信息",i);break;case"Echart":e=this.getCanvas(i);break;case"Svg":this.getSvg(i);break;default:e=new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric[i.data.type](i);break}""!=e&&this.addObject(e)},addObject:function(t){t.toObject=function(t){return function(e){return fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.util.object.extend(t.call(this,e),{data:this.data})}}(t.toObject),this.design.add(t)},getCanvas:function(json){var canvas=document.createElement("canvas");canvas.width=json.width?json.width*this.zoom:100,canvas.height=json.height?json.height*this.zoom:100,console.log(canvas);var myChart=echarts__WEBPACK_IMPORTED_MODULE_4___default().init(canvas),data=json.data||{};if(data.hasOwnProperty("handle"))for(let i=0;i<json.data.handle.length;i++)eval(data.handle[i]);myChart.setOption(data.options,!0);var CanvasRect=fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.util.createClass(fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Rect,{type:"canvasRect",initialize:function(t){t||(t={}),this.callSuper("initialize",t)},toObject:function(){return fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.util.object.extend(this.callSuper("toObject"),{})},_render:function(t){this.callSuper("_render",t);var e=myChart.getRenderedCanvas({pixelRatio:2,backgroundColor:""});t.drawImage(e,-json.width/2,-json.height/2,json.width,json.height)}});return console.log(new CanvasRect(json)),new CanvasRect(json)},getSvg:function(t){let e=this;fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Image.fromURL(t.data.imgsrc,(function(i){console.log(i),i["data"]=t.data,i.set({left:t.left,top:t.top}),i.scaleToWidth(t.width),i.scaleToHeight(t.height),e.addObject(i)}))},changeImg:function(){let _this=this;if(this.design.getActiveObject()){let objects=this.design.getObjects(),uuid=this.design.getActiveObject().data.uuid;for(let i=0;i<objects.length;i++){if(objects[i].data.uuid==uuid&&"Svg"==objects[i].data.type){console.log(objects[i]);let t="images/runstatus.svg",e=objects[i];e.data.imgsrc=t,fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Image.fromURL(t,(function(t){console.log(t),t["data"]=e.data,t.set({left:e.left,top:e.top}),t.scaleToWidth(objects[i].width*objects[i].scaleX),t.scaleToHeight(objects[i].height*objects[i].scaleY),_this.design.remove(e),_this.addObject(t)}))}if(objects[i].data.uuid==uuid&&"Echart"==objects[i].data.type){console.log(objects[i]),console.log(this.zoom);let json={width:objects[i].width,height:objects[i].height,data:objects[i].data};json.data.value=5.2;var canvas=document.createElement("canvas");canvas.width=json.width,canvas.height=json.height,console.log(canvas);var myChart=echarts__WEBPACK_IMPORTED_MODULE_4___default().init(canvas),data=json.data||{};if(data.hasOwnProperty("handle"))for(let i=0;i<json.data.handle.length;i++)eval(data.handle[i]);myChart.setOption(data.options,!0);var offcanvas=myChart.getRenderedCanvas({pixelRatio:2,backgroundColor:""});objects[i]._cacheContext.clearRect(-json.width/2,-json.height/2,json.width,json.height),objects[i]._cacheContext.drawImage(offcanvas,-json.width/2,-json.height/2,json.width,json.height),this.design.renderAll()}}}},removeObject:function(){this.design.getActiveObject()?(console.log(this.design.getActiveObject()),this.$confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.design.remove(this.design.getActiveObject())}))):this.$notify.warning("请选择需要删除的对象")},saveDesign:function(){sessionStorage.setItem("canvasDesign",JSON.stringify(this.design.toDatalessJSON())),console.log(JSON.stringify(this.design.toJSON())),this.$notify.success("保存成功！")},showDesign:function(){this.$router.push({path:"/show"})},test:function(){fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.backgroundImage="https://source.unsplash.com/random"},drawPolyLine:function(t){this.drawType=t,this.polygonMode=!0,this.pointArray=[],this.lineArray=[],this.design.isDrawingMode=!1},finishPolyLine:function(){this.activeLine=null,this.activeShape=null,this.polygonMode=!1,this.doDrawing=!1,this.drawType=null},generatePolygon(){var t=[];this.pointArray.map((e=>{t.push({x:e.left,y:e.top}),this.design.remove(e)})),this.lineArray.map((t=>{this.design.remove(t)})),this.design.remove(this.activeShape).remove(this.activeLine);var e=new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Polygon(t,{stroke:this.color,strokeWidth:this.drawWidth,fill:"rgba(255, 255, 255, 0)",opacity:1,hasBorders:!0,hasControls:!1});this.design.add(e),this.finishPolyLine()},generateSegements(){this.design.remove(this.lineArray[this.lineArray.length-1]),this.lineArray.splice(this.lineArray.length-1,1);for(let t=0;t<this.pointArray.length;t++)0==t?(this.pointArray[t].startLine=null,this.pointArray[t].endLine=this.lineArray[0]):t==this.lineArray.length?(this.pointArray[t].startLine=this.lineArray[t-1],this.pointArray[t].endLine=null):(this.pointArray[t].startLine=this.lineArray[t-1],this.pointArray[t].endLine=this.lineArray[t]);this.finishPolyLine()},makeCircle:function(t,e,i,n){var o=new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Circle({left:t,top:e,radius:5,fill:"#ffffff",stroke:"#333333",strokeWidth:.5});return o.hasControls=o.hasBorders=!1,o.startLine=i,o.endLine=n,o},addPoint(t){var e=uuid_random__WEBPACK_IMPORTED_MODULE_5___default()(),i=new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Circle({radius:5,fill:"#ffffff",stroke:"#333333",strokeWidth:.5,left:(t.pointer.x||t.e.layerX)/this.design.getZoom(),top:(t.pointer.y||t.e.layerY)/this.design.getZoom(),hasBorders:!1,hasControls:!1,originX:"center",originY:"center",id:e,objectCaching:!1}),n=[(t.pointer.x||t.e.layerX)/this.design.getZoom(),(t.pointer.y||t.e.layerY)/this.design.getZoom(),(t.pointer.x||t.e.layerX)/this.design.getZoom(),(t.pointer.y||t.e.layerY)/this.design.getZoom()];if(this.line=new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Line(n,{strokeWidth:2,fill:"#999999",stroke:"#999999",class:"line",originX:"center",originY:"center",selectable:!1,evented:!1,objectCaching:!1}),"polygon"==this.drawType)if(this.activeShape){var o=this.design.getPointer(t.e),s=this.activeShape.get("points");s.push({x:o.x,y:o.y});let e=new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Polygon(n,{stroke:"#333333",strokeWidth:1,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1});this.design.remove(this.activeShape),this.design.add(e),this.activeShape=e,this.design.renderAll()}else{var a=[{x:(t.pointer.x||t.e.layerX)/this.design.getZoom(),y:(t.pointer.y||t.e.layerY)/this.design.getZoom()}];let e=new fabric__WEBPACK_IMPORTED_MODULE_1__.fabric.Polygon(a,{stroke:"#333333",strokeWidth:1,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1});this.activeShape=e,this.design.add(e)}this.activeLine=this.line,this.pointArray.push(i),this.lineArray.push(this.line),this.design.add(this.line),this.design.add(i)},handleLayer:function(t){switch(console.log(t),t){case"upLayer":this.ActiveObject&&this.ActiveObject.bringForward();break;case"downLayer":this.ActiveObject&&this.ActiveObject.sendBackwards();break;case"topLayer":this.ActiveObject&&this.ActiveObject.bringToFront();break;case"footLayer":this.ActiveObject&&this.ActiveObject.sendToBack();break;case"removeLayer":this.ActiveObject&&this.$confirm("确定删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{console.log(this.ActiveObject),this.design.remove(this.ActiveObject),this.ActiveObject=null}));break;default:}this.contextMenuVisible=!1}},watch:{drawType(){this.design.selection=!this.drawType}}}},84939:function(t,e,i){i(57658),fabric.Canvas.prototype.initialize=function(t){return function(...e){return t.call(this,...e),this._historyInit(),this}}(fabric.Canvas.prototype.initialize),fabric.Canvas.prototype.dispose=function(t){return function(...e){return t.call(this,...e),this._historyDispose(),this}}(fabric.Canvas.prototype.dispose),fabric.Canvas.prototype._historyNext=function(){return JSON.stringify(this.toDatalessJSON(this.extraProps))},fabric.Canvas.prototype._historyEvents=function(){return{"object:added":this._historySaveAction,"object:removed":this._historySaveAction,"object:modified":this._historySaveAction,"object:skewing":this._historySaveAction}},fabric.Canvas.prototype._historyInit=function(){this.historyUndo=[],this.historyRedo=[],this.extraProps=["selectable","editable"],this.historyNextState=this._historyNext(),this.on(this._historyEvents())},fabric.Canvas.prototype._historyDispose=function(){this.off(this._historyEvents())},fabric.Canvas.prototype._historySaveAction=function(){if(this.historyProcessing)return;const t=this.historyNextState;this.historyUndo.push(t),this.historyNextState=this._historyNext(),this.fire("history:append",{json:t})},fabric.Canvas.prototype.undo=function(t){this.historyProcessing=!0;const e=this.historyUndo.pop();e?(this.historyRedo.push(this._historyNext()),this.historyNextState=e,this._loadHistory(e,"history:undo",t)):this.historyProcessing=!1},fabric.Canvas.prototype.redo=function(t){this.historyProcessing=!0;const e=this.historyRedo.pop();e?(this.historyUndo.push(this._historyNext()),this.historyNextState=e,this._loadHistory(e,"history:redo",t)):this.historyProcessing=!1},fabric.Canvas.prototype._loadHistory=function(t,e,i){var n=this;this.loadFromJSON(t,(function(){n.renderAll(),n.fire(e),n.historyProcessing=!1,i&&"function"==typeof i&&i()}))},fabric.Canvas.prototype.clearHistory=function(){this.historyUndo=[],this.historyRedo=[],this.fire("history:clear")},fabric.Canvas.prototype.onHistory=function(){this.historyProcessing=!1,this._historySaveAction()},fabric.Canvas.prototype.offHistory=function(){this.historyProcessing=!0}},46378:function(t,e,i){"use strict";i(63408),i(14590),i(57658),function(){var e,n,o,s=0,a=[];for(n=0;n<256;n++)a[n]=(n+256).toString(16).substr(1);function r(t){return(!e||s+t>l.BUFFER_SIZE)&&(s=0,e=l.randomBytes(l.BUFFER_SIZE)),e.slice(s,s+=t)}function c(){var t=r(16);return t[6]=15&t[6]|64,t[8]=63&t[8]|128,t}function l(){var t=c();return a[t[0]]+a[t[1]]+a[t[2]]+a[t[3]]+"-"+a[t[4]]+a[t[5]]+"-"+a[t[6]]+a[t[7]]+"-"+a[t[8]]+a[t[9]]+"-"+a[t[10]]+a[t[11]]+a[t[12]]+a[t[13]]+a[t[14]]+a[t[15]]}l.BUFFER_SIZE=4096,l.bin=c,l.clearBuffer=function(){e=null,s=0},l.test=function(t){return"string"===typeof t&&/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t)},"undefined"!==typeof crypto?o=crypto:"undefined"!==typeof window&&"undefined"!==typeof window.msCrypto&&(o=window.msCrypto),o=o||i(39061),t.exports=l,l.randomBytes=function(){if(o){if(o.randomBytes)return o.randomBytes;if(o.getRandomValues)return"function"!==typeof Uint8Array.prototype.slice?function(t){var e=new Uint8Array(t);return o.getRandomValues(e),Array.from(e)}:function(t){var e=new Uint8Array(t);return o.getRandomValues(e),e}}return function(t){var e,i=[];for(e=0;e<t;e++)i.push(Math.floor(256*Math.random()));return i}}()}()},9099:function(t,e,i){"use strict";i(57658);function n(t){var e,i=t.getSelectionContext(),n=5,o=4,s=1,a="rgb(0,255,0)",r=1;function c(t){h(t.x+.5,t.y1>t.y2?t.y2:t.y1,t.x+.5,t.y2>t.y1?t.y2:t.y1)}function l(t){h(t.x1>t.x2?t.x2:t.x1,t.y+.5,t.x2>t.x1?t.x2:t.x1,t.y+.5)}function h(t,n,o,c){i.save(),i.lineWidth=s,i.strokeStyle=a,i.beginPath(),i.moveTo((t+e[4])*r,(n+e[5])*r),i.lineTo((o+e[4])*r,(c+e[5])*r),i.stroke(),i.restore()}function _(t,e){t=Math.round(t),e=Math.round(e);for(var i=t-o,n=t+o;i<=n;i++)if(i===e)return!0;return!1}var d=[],u=[];t.on("mouse:down",(function(){e=t.viewportTransform,r=t.getZoom()})),t.on("object:moving",(function(i){var o=i.target,s=t.getObjects(),a=o.getCenterPoint(),r=a.x,c=a.y,l=o.getBoundingRect(),h=l.height/e[3],f=l.width/e[0],g=!1,p=!1,y=t._currentTransform;if(y){for(var v=s.length;v--;)if(s[v]!==o){var m=s[v].getCenterPoint(),b=m.x,E=m.y,w=s[v].getBoundingRect(),O=w.height/e[3],P=w.width/e[0];_(b,r)&&(p=!0,d.push({x:b,y1:E<c?E-O/2-n:E+O/2+n,y2:c>E?c+h/2+n:c-h/2-n}),o.setPositionByOrigin(new fabric.Point(b,c),"center","center")),_(b-P/2,r-f/2)&&(p=!0,d.push({x:b-P/2,y1:E<c?E-O/2-n:E+O/2+n,y2:c>E?c+h/2+n:c-h/2-n}),o.setPositionByOrigin(new fabric.Point(b-P/2+f/2,c),"center","center")),_(b+P/2,r+f/2)&&(p=!0,d.push({x:b+P/2,y1:E<c?E-O/2-n:E+O/2+n,y2:c>E?c+h/2+n:c-h/2-n}),o.setPositionByOrigin(new fabric.Point(b+P/2-f/2,c),"center","center")),_(E,c)&&(g=!0,u.push({y:E,x1:b<r?b-P/2-n:b+P/2+n,x2:r>b?r+f/2+n:r-f/2-n}),o.setPositionByOrigin(new fabric.Point(r,E),"center","center")),_(E-O/2,c-h/2)&&(g=!0,u.push({y:E-O/2,x1:b<r?b-P/2-n:b+P/2+n,x2:r>b?r+f/2+n:r-f/2-n}),o.setPositionByOrigin(new fabric.Point(r,E-O/2+h/2),"center","center")),_(E+O/2,c+h/2)&&(g=!0,u.push({y:E+O/2,x1:b<r?b-P/2-n:b+P/2+n,x2:r>b?r+f/2+n:r-f/2-n}),o.setPositionByOrigin(new fabric.Point(r,E+O/2-h/2),"center","center"))}g||(u.length=0),p||(d.length=0)}})),t.on("before:render",(function(){t.clearContext(t.contextTop)})),t.on("after:render",(function(){for(var t=d.length;t--;)c(d[t]);for(t=u.length;t--;)l(u[t]);d.length=u.length=0})),t.on("mouse:up",(function(){d.length=u.length=0,t.renderAll()}))}e["Z"]=n},71062:function(t,e){"use strict";function i(t){for(var e,i=t.getWidth(),n=t.getHeight(),o=i/2,s=n/2,a={},r={},c=4,l="rgba(255,0,241,0.5)",h=1,_=t.getSelectionContext(),d=o-c,u=o+c;d<=u;d++)a[Math.round(d)]=!0;for(d=s-c,u=s+c;d<=u;d++)r[Math.round(d)]=!0;function f(){p(o+.5,0,o+.5,n)}function g(){p(0,s+.5,i,s+.5)}function p(t,i,n,o){_.save(),_.strokeStyle=l,_.lineWidth=h,_.beginPath(),_.moveTo(t*e[0],i*e[3]),_.lineTo(n*e[0],o*e[3]),_.stroke(),_.restore()}var y,v;t.on("mouse:down",(function(){e=t.viewportTransform})),t.on("object:moving",(function(e){var i=e.target,n=i.getCenterPoint(),c=t._currentTransform;c&&(y=Math.round(n.x)in a,v=Math.round(n.y)in r,(v||y)&&i.setPositionByOrigin(new fabric.Point(y?o:n.x,v?s:n.y),"center","center"))})),t.on("before:render",(function(){t.clearContext(t.contextTop)})),t.on("after:render",(function(){y&&f(),v&&g()})),t.on("mouse:up",(function(){y=v=null,t.renderAll()}))}e["Z"]=i},39061:function(){}}]);
//# sourceMappingURL=178.0d1fc309.js.map