// 第二种方式备份

// ------------------------ 解决丢失精度问题 （只能到11位）------------------------------
/**
 * 两个数相加
 */
function floatAdd(a, b) {
  var c, d, e
  if (!a) {
    a = 0
  }
  if (!b) {
    b = 0
  }
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  e = Math.pow(10, Math.max(c, d))
  return (this.floatMul(a, e) + this.floatMul(b, e)) / e
}
/**
 * 两个数相减
 */
function floatMinus(a, b) {
  var c, d, e

  if (!a) {
    a = 0
  }
  if (!b) {
    b = 0
  }
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  e = Math.pow(10, Math.max(c, d))
  return (this.floatMul(a, e) - this.floatMul(b, e)) / e
}
/**
 * 两个数相乘
 */
function floatMul(a, b) {
  var c, d, e
  c = 0
  d = a.toString()
  e = b.toString()

  c += d.split('.')[1].length
  c += e.split('.')[1].length
  return (
    (Number(d.replace('.', '')) * Number(e.replace('.', ''))) / Math.pow(10, c)
  )
}
/**
 * 两个数相除
 */
function floatDiv(a, b) {
  var c, d, e, f
  e = 0
  f = 0

  e = a.toString().split('.')[1].length
  f = b.toString().split('.')[1].length
  // return c = Number(a.toString().replace('.', '')), d = Number(b.toString().replace('.', '')), floatMul(c / d, Math.pow(10, f - e))
  c = Number(a.toString().replace('.', ''))
  d = Number(b.toString().replace('.', ''))
  return this.floatMul(c / d, Math.pow(10, f - e))
}
