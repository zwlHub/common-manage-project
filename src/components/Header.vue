<template>
  <el-header>
    <div class="l-content">
      <!-- 图标 -->
      <el-button size="small" @click="updateAside">
        <el-icon>
          <Menu />
        </el-icon>
      </el-button>
      <h3>首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user-img" :src="getImgUrl('user1')" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出 2</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    // import.meta.url 返回当前组件的相对路径
    // 以当前组件路径为基准，找到imgsrc的相对/绝对路径
    // https://developer.mozilla.org/zh-CN/docs/Web/API/URL
    const getImgUrl = (imgName) => {
      // console.log(new URL(`../assets/${imgName}.jpg`,import.meta.url));
      return new URL(`../assets/${imgName}.jpg`, import.meta.url).href
    }
    const store = useStore()
    const updateAside = () => {
      store.commit('updateIsCollapse')
    }
    return {
      getImgUrl,
      updateAside
    }
  }
}
</script>

<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #333;
}
.r-content {
  .user-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  h3 {
    color: #fff;
  }
}
</style>
