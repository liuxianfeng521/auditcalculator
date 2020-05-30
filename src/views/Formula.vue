<template>
    <div style="width: 100%">
      <el-radio-group v-model="type" size="medium" @change="typeChange">
        <el-radio-button label="审计" ></el-radio-button>
        <el-radio-button label="验资"></el-radio-button>
        <el-radio-button label="评估"></el-radio-button>
      </el-radio-group>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="level"
            label="档次(万元)">
          </el-table-column>
          <el-table-column
            prop="percent"
            label="百分比（‰）">
            <template slot-scope="scope">
              <span>{{scope.row.percent*1000}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      tableData: formula.assessmentFormula,
      type: '审计',
      assessmentFormula: formula.assessmentFormula,
      capitalFormula: formula.capitalFormula,
      auditFormula: formula.auditFormula
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    typeChange (val) {
      if (val === '审计') {
        this.tableData = formula.assessmentFormula
      } else if (val === '验资') {
        this.tableData = formula.capitalFormula
      } else if (val === '评估') {
        this.tableData = formula.auditFormula
      }
    }
  }
}
</script>

<style scoped>

</style>
