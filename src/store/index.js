import { createStore } from 'vuex'

export default createStore({
    state:{
        isCollapse: false,
    },
    mutations: {
        updateIsCollapse(state,params){
            state.isCollapse = !state.isCollapse
        }
    }
})