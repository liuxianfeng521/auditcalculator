<template>
    <div style="width: 100%">
      <el-radio-group v-model="type"
                      size="medium"
                      @change="typeChange"
                      style="margin-bottom:20px ">
        <el-radio-button label="审计" ></el-radio-button>
        <el-radio-button label="验资"></el-radio-button>
        <el-radio-button label="评估"></el-radio-button>
      </el-radio-group>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="grade"
            label="档次">
          </el-table-column>
          <el-table-column
            prop="grade"
            label="计费额度（万元）">
            <template slot-scope="scope">
              <span v-if="!scope.row.max">{{scope.row.min}}以上</span>
              <span v-else>{{scope.row.min}}以上{{scope.row.max}}以下（包含{{scope.row.max}}）</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="percent"
            label="差额计费率（‰）">
            <template slot-scope="scope">
              <span v-if="!scope.row.edit">{{scope.row.percent}}</span>
              <el-input v-model="scope.row.percent" v-else></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.edit"
              type="success"
              size="small"
              icon="el-icon-circle-check-outline"
              @click="confirmEdit(scope.$index, scope.row)">OK</el-button>
            <el-button
              v-if="!scope.row.edit"
              type="primary"
              size="small"
              @click="edit(scope.$index, scope.row)">
              编辑
            </el-button>
            <el-tooltip
              v-if="!scope.row.edit"
              effect="light"
              placement="top">
              <div slot="content">临时修改，不能刷新页面，<br/>永久修改请联系管理员。</div>
              <i class="el-icon-warning icon-help"></i>
            </el-tooltip>
          </template>
          </el-table-column>
      </el-table>
    </div>
</template>

<script>
import formula from '../../public/formula.js'
export default {
  name: 'formula',
  data () {
    return {
      tableData: formula.auditFormula,
      type: '审计',
      auditFormula: formula.auditFormula, // 审计
      capitalFormula: formula.capitalFormula, // 验资
      assessmentFormula: formula.assessmentFormula // 评估
    }
  },
  methods: {
    edit (index, row) {
      row.edit = !row.edit
    },
    confirmEdit (index, row) {
      row.edit = false
      const reg = /^\d+(\.\d+)?$/
      if (reg.test(row.percent)) {
        formula.assessmentFormula[index].percent = row.percent
        console.log('formula', formula)
        // row.originalTitle = row.title
        this.$message({
          message: '修改成功',
          type: 'success'
        })
      } else {
        this.$message({
          title: '错误',
          message: '请输入一个数字',
          type: 'error'
        })
      }
    },
    typeChange (val) {
      if (val === '审计') {
        this.tableData = formula.auditFormula
      } else if (val === '验资') {
        this.tableData = formula.capitalFormula
      } else if (val === '评估') {
        this.tableData = formula.assessmentFormula
      }
    }
  }
}
</script>

<style scoped>
.icon-help{
  margin-left: 10px;
  color: #67C23A;
  font-size: 16px;
}
.el-tooltip__popper.is-light {
  background: #FFF;
  border: 1px solid #67C23A;
}
</style>
