const baseUrl = import.meta.env.VITE_APP_BASE_API

const EnvConfig = {
    development:{
        baseApi: baseUrl,
        mockApi: '/devMock'
    },
    staging:{
        baseApi: baseUrl,
        mockApi: '/staingMock'
    },
    production:{
        baseApi: baseUrl,
        mockApi: '/prodMock'
    }
}

export default {
    // mock的总开关
    mock: true,
    ...EnvConfig[import.meta.env.VITE_APP_ENV]
}