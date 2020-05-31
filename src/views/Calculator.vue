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
        formula.assessmentFormula.forEach((item) => {
          if (this.sizeForm.basePrices === 0) {
            this.sizeForm.assessmentPrices = 0
          }
          if (item.max && this.sizeForm.basePrices <= item.max * 10000 && this.sizeForm.basePrices > item.min * 10000) {
            this.sizeForm.assessmentPrices = this.sizeForm.basePrices * item.percent / 1000
          }
          if (!item.max && this.sizeForm.basePrices > item.min * 10000) {
            this.sizeForm.assessmentPrices = this.sizeForm.basePrices * item.percent / 1000
          }
        })
      } else {
        this.$message({
          title: '错误',
          message: '请输入一个数字',
          type: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
