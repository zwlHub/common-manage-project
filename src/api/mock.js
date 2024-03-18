import Mock from 'mockjs'
import homeApi from './mockData/home'

Mock.mock('/devMock/home/getTableData',homeApi.getHomeData)