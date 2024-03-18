<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/user1.jpg" alt="" />
          <div role-info>
            <p>Admin</p>
            <p>超級管理員</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间 <span>2022-7-2</span></p>
          <p>上次登录地点 <span>北京</span></p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px" height="450px">
        <el-table :data="tableData" >
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px"></el-col>
  </el-row>
</template>

<script>
import { ref,onMounted, getCurrentInstance } from 'vue'

export default {
  setup() {
    const tableData = ref()
    const tableLabel = {
      name: '课程',
      todayBuy: '今日购买',
      monthBuy: '本月购买',
      totalBuy: '总购买'
    }
    const { proxy } = getCurrentInstance()
    const getTableList = async () => {
      let res = await proxy.$api.getTableData()
      tableData.value = res.tableData
    }
    // 挂载之前
    onMounted(() => {
      getTableList()
    })
    return {
      tableData,
      tableLabel
    }
  }
}
</script>

<style lang="less">
.home {
  .user {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding-bottom: 20px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }
  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
    }
    span {
      color: #666;
      margin-left: 60px;
    }
  }
}
</style>
