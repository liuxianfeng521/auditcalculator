<template>
  <div>
    <el-form ref="form" :model="sizeForm" size="mini"
             @submit.native.prevent>
      <el-form-item label="请输入收费计费基础（单位：元）">
        <el-input
          type="nubmer"
          v-model="sizeForm.basePrices"
          placeholder="请输入内容"
          @keyup.enter.native="cal">
          <el-button slot="append" icon="el-icon-search"
                     @click.native="cal"></el-button>
        </el-input>
      </el-form-item>
      <div>
        <el-form-item label="审计收费为：" key="auditPrices">
          <span>{{sizeForm.auditPrices}} 元</span>
        </el-form-item>
        <el-form-item label="验资收费为：" key="capitalPrices">
          <span>{{sizeForm.capitalPrices}} 元</span>
        </el-form-item>
        <el-form-item label="评估收费为：" key="assessmentPrices">
          <span >{{sizeForm.assessmentPrices}} 元</span>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import formula from '../../public/formula.js'
export default {
  name: 'Calculator',
  data () {
    return {
      detailVisible: false,
      sizeForm: {
        basePrices: 0,
        auditPrices: 0, // 审计收费
        capitalPrices: 0, // 验资收费
        assessmentPrices: 0 // 评估收费
      }
    }
  },
  methods: {
    cal () {
      console.log('formula', formula, this.sizeForm)
      const reg = /^\d+(\.\d+)?$/
      if (reg.test(this.sizeForm.basePrices)) {
        this.sizeForm.assessmentPrices = this.stepAlgorithm(Number(this.sizeForm.basePrices), formula.assessmentFormula)
      } else {
        this.$message({
          title: '错误',
          message: '请输入一个数字',
          type: 'error'
        })
      }
    },
    stepAlgorithm (value, arr) {
      let result = null
      arr.forEach((item, index) => {
        if (value === 0) {
          result = 0
        }
        if (index === 0 && value <= item.max * 10000 && value > item.min * 10000) {
          result = value * item.percent / 1000
        }
        if (index === 1 && value <= item.max * 10000 && value > item.min * 10000) {
          result = arr[0].max * 10000 * arr[0].percent / 1000 + (value - arr[0].max * 10000) * item.percent / 1000
        }
        if (index === 2 && value <= item.max * 10000 && value > item.min * 10000) {
          result = (arr[0].max * 10000 * arr[0].percent / 1000) +
              (arr[1].max * 10000 * arr[1].percent / 1000) +
              (value - (arr[0].max - arr[1].max) * 10000) * item.percent / 1000
        }
        if (index === 3 && value <= item.max * 10000 && value > item.min * 10000) {
          result = (arr[0].max * 10000 * arr[0].percent / 1000) +
              (arr[1].max * 10000 * arr[1].percent / 1000) +
              (arr[2].max * 10000 * arr[2].percent / 1000) +
              (value - (arr[0].max - arr[1].max - arr[2].max) * 10000) * item.percent / 1000
        }
        if (index === 4 && value <= item.max * 10000 && value > item.min * 10000) {
          result = (arr[0].max * 10000 * arr[0].percent / 1000) +
              (arr[1].max * 10000 * arr[1].percent / 1000) +
              (arr[2].max * 10000 * arr[2].percent / 1000) +
              (arr[3].max * 10000 * arr[3].percent / 1000) +
              (value - (arr[0].max - arr[1].max - arr[2].max - arr[3].max) * 10000) * item.percent / 1000
        }
        if (index === 5 && value <= item.max * 10000 && value > item.min * 10000) {
          result = (arr[0].max * 10000 * arr[0].percent / 1000) +
              (arr[1].max * 10000 * arr[1].percent / 1000) +
              (arr[2].max * 10000 * arr[2].percent / 1000) +
              (arr[3].max * 10000 * arr[3].percent / 1000) +
              (arr[4].max * 10000 * arr[4].percent / 1000) +
              (value - (arr[0].max - arr[1].max - arr[2].max - arr[3].max - arr[4].max) * 10000) * item.percent / 1000
        }
      })
      console.log('result', result)
      return result
    },
    percentAlgorithm (value, arr) {
      var result = null
      arr.forEach((item) => {
        if (value === 0) {
          result = 0
        }
        if (item.max && value <= item.max * 10000 && value > item.min * 10000) {
          result = value * item.percent / 1000
        }
        if (!item.max && value > item.min * 10000) {
          result = value * item.percent / 1000
        }
      })
      return result
    }
  }
}
</script>

<style scoped>

</style>
