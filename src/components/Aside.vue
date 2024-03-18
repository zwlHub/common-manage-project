<template>
  <el-aside :width="$store.state.isCollapse ? '64px' : '180px'">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#FFF"
      :collapse="$store.state.isCollapse"
      :collapse-transition="false"
    >
      <h3 v-show="!$store.state.isCollapse">后台管理</h3>
      <h3 v-show="$store.state.isCollapse">后台</h3>
      <el-menu-item
        :index="item.path"
        v-for="item in noCildren()"
        :key="item.path"
        @click="clickMenu(item)"
      >
        <component
          :class="!$store.state.isCollapse ? 'svg-r' : 'svg-icon'"
          :is="item.icon"
        ></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu
        :index="item.label"
        v-for="item in hasCildren()"
        :key="item.path"
      >
        <template #title>
          <component
            :class="!$store.state.isCollapse ? 'svg-r' : 'svg-icon'"
            :is="item.icon"
          ></component>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.path"
            :index="subItem.path"
            @click="clickMenu(subItem)"
            >{{ subItem.label }}</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { menuData } from '../mock/menu.js'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    console.log({store})
    const noCildren = () => {
      return menuData.filter((item) => !item.children)
    }
    const hasCildren = () => {
      return menuData.filter((item) => item.children)
    }
    const clickMenu = (item) => {
      console.log({item});
      router.push({
        name: item.name
      })
    }

    return {
      noCildren,
      hasCildren,
      clickMenu
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu {
  border-radius: none;
  border-right: none;

  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}
</style>
