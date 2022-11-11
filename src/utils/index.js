let digitsRE = /(\d{3})(?=\d)/g;
/**
 * 对象数组根据某一个键值排序
 * @param property string 比较键值
 * @returns function
 * use: Array.sort(compare(property)
 */
export function compare(property) {
  return (firstEl, secondEl) => {
    console.log(firstEl);
    const value1 = firstEl[property];
    const value2 = secondEl[property];
    return value2 - value1;
  };
}
/**
 * 货币单位的转化
 * @param value
 * @param currency
 * @param decimals
 * @returns string
 */
export function currency(value, currency, decimals) {
  value = parseFloat(value);
  if (!isFinite(value) || (!value && value !== 0)) return "";
  currency = currency != null ? currency : "$";
  decimals = decimals != null ? decimals : 2;
  var stringified = Math.abs(value).toFixed(decimals);
  var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
  var i = _int.length % 3;
  var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? "," : "") : "";
  var _float = decimals ? stringified.slice(-1 - decimals) : "";
  var sign = value < 0 ? "-" : "";
  return (
    sign + currency + head + _int.slice(i).replace(digitsRE, "$1,") + _float
  );
}
