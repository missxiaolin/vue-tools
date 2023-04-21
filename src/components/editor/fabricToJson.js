/**
 * 转换json数据
 * @param {*} value
 */
export function renderingJson(dom, fabric, value) {
  value.objects.forEach(item => {
    console.log(item);
    if (item.type == "img") {
      fabric.Image.fromURL(item.src, img => {
        img.set({
          angle: item.angle,
          cacheHeight: item.cacheHeight,
          cacheKey: item.cacheKey,
          cacheWidth: item.cacheWidth,
          dirty: item.dirty,
          fill: item.fill,
          height: item.height,
          isMoving: item.isMoving,
          left: item.left,
          stroke: item.stroke,
          top: item.top,
          width: item.width
        });
        dom.add(img).renderAll();
      })
    } else if (item.type == "editText") {
      let textBox = new fabric.Textbox(item);
      dom.add(textBox).setActiveObject(textBox);
    }
  });
}
