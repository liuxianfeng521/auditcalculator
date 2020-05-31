
/*
* grade:档次
* min: 计费额度最小值（万元）
*  max: 计费额度最大值（万元）
** percent:百分比
* */

// 审计档次公式
var auditFormula = []
// 验资档次公式
var capitalFormula = []
// 评估档次公式
var assessmentFormula = [
  {
    grade: 1,
    base: 0,
    min: 0,
    max: 100,
    percent: 15, // 千分之15
    edit: false
  },
  {
    grade: 2,
    min: 100,
    max: 1000,
    base: 0,
    percent: 6.25,
    edit: false
  },
  {
    grade: 3,
    min: 1000,
    max: 5000,
    base: 0,
    percent: 2,
    edit: false
  },
  {
    grade: 4,
    min: 5000,
    max: 10000,
    base: 0,
    percent: 1.2,
    edit: false
  },
  {
    grade: 5,
    base: 0,
    min: 10000,
    max: 100000,
    percent: 0.25,
    edit: false
  },
  {
    grade: 6,
    base: 0,
    min: 100000,
    max: null,
    percent: 0.15,
    edit: false
  }]
export default {
  assessmentFormula,
  auditFormula,
  capitalFormula
}
