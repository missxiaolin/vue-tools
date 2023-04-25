/**
 * base 转 file
 * @param {*} data base64图片格式字符串
 * @param {*} fileName
 */
function base64toFile(data, fileName) {
  const dataArr = data.split(",");
  const byteString = atob(dataArr[1]);
  const options = {
    type: "image/jpeg",
    endings: "native"
  };
  const u8Arr = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    u8Arr[i] = byteString.charCodeAt(i);
  }
  return new File([u8Arr], fileName + ".jpg", options); //返回文件流
}

