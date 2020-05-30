
/*
* value:档次 (万元)
** percent:百分比
* */

// 审计档次公式
const auditFormula = [{
  value: 100,
  percent: 0.015
}]
// 验资档次公式
const capitalFormula = [{
  value: 100,
  base: 0,
  percent: 0.015 // 千分之15
}, {
  value: 1000,
  base: 0,
  percent: 0.00625
}, {
  value: 5000,
  base: 0,
  percent: 0.00625
}, {
  value: 10000,
  base: 0,
  percent: 0.00625
}, {
  value: 100000,
  base: 0,
  percent: 0.00625
}]
// 评估档次公式
const assessmentFormula = [{
  value: 100,
  base: 0,
  percent: 0.015
}]
export default {
  assessmentFormula,
  auditFormula,
  capitalFormula
}
