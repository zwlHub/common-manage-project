<template>
    <div class="common-layout">
        <el-container>
            <Aside/>
            <el-container>
                <Header></Header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { defineComponent,ref } from 'vue'
import Header from '../components/Header.vue'
import Aside from '../components/Aside.vue'
export default defineComponent({
    components:{
        Header,
        Aside
    },
    setup(){

    }
})
</script>

<style lang="less" scoped>
.el-container {
    flex-wrap: wrap;
    align-items: flex-start;
    height: 100%;
}
.common-layout {
    height: 100%;
    & > .el-container {
        height: 100%;
        & > .el-aside {
            height: 100%;
            background: #545c64;
        }
    }

    .el-main {
        height: calc(100% - 124px) !important;
    }
}
</style>