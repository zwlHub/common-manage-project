import request from "./request";

export default {
    getTableData(prams){
        return request({
            url:'/home/getTableData',
            methods:'get',
            data: prams,
            mock: true
        })
    },
    getCountData(prams){
        return request({
            url:'/home/getCountData',
            methods:'get',
            data: prams,
            mock: true
        })
    }
}
