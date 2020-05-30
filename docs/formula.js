
/*
* level:档次 (万元)
** percent:百分比
* */

// 审计档次公式
const auditFormula = [{
  level: 100,
  percent: 0.015
}]
// 验资档次公式
const capitalFormula = [{
  level: 100,
  base: 0,
  percent: 0.015 // 千分之15
}, {
  level: 1000,
  base: 0,
  percent: 0.00625
}, {
  level: 5000,
  base: 0,
  percent: 0.00625
}, {
  level: 10000,
  base: 0,
  percent: 0.00625
}, {
  level: 100000,
  base: 0,
  percent: 0.00625
}]
// 评估档次公式
const assessmentFormula = [{
  level: 100,
  base: 0,
  percent: 0.015
},
{
  level: 1000,
  base: 0,
  percent: 0.015
}]
export default {
  assessmentFormula,
  auditFormula,
  capitalFormula
}
