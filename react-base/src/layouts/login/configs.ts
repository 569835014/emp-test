/*
 * @Author: wdy
 * @Date: 2021-01-07 15:15:22
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:11:30
 */
import {TypeMenu, TypeOs} from './index'

import {MENU, INTERNAL_PAGE, ASEIT_INSPECTION_PAGE, ASEIT_SETTING_PAGE, FRIEND_INNER_IFREAM, FRIEND_INNER_PAGE, FRIEND_BLANK_PAGE} from '../../configs/index'

const defaultOses: TypeOs[] = [
  {name: '架空', code: 'AERIAL_OS', disabled: true},
  {name: '变电', code: 'SUBSTATION_OS'},
  {name: '输电', code: 'TRANSMISSION_OS', disabled: true},
]

const baseMenuConfigs: TypeMenu[] = [
  {type: INTERNAL_PAGE, name: '首页', owner: 'self', path: 'home'},
  {
    type: MENU,
    name: '智能巡检',
    path: 'inspectionsMenu',
    children: [
      {type: ASEIT_INSPECTION_PAGE, name: '智能巡检面板', owner: 'asInspection', path: 'inspectionDashboard'},
      {type: ASEIT_INSPECTION_PAGE, name: '巡检点概况', owner: 'asInspection', path: 'inspections'},
      {type: ASEIT_INSPECTION_PAGE, name: '机器人巡检', owner: 'asInspection', path: 'robotInspection'},
    ],
  },
  {
    type: MENU,
    name: '万物互联',
    path: 'internetOfEverything',
    children: [
      {type: ASEIT_INSPECTION_PAGE, name: '蓄电池', owner: 'asInspection', path: 'battery'},
      {type: ASEIT_INSPECTION_PAGE, name: '压板监测', owner: 'asInspection', path: 'pressingPlate'},
      {type: ASEIT_INSPECTION_PAGE, name: '万物互联', owner: 'asInspection', path: 'internetOfEverything'},
    ],
  },
  {type: ASEIT_INSPECTION_PAGE, name: '智能监护', owner: 'asInspection', path: 'monitoring'},
  {type: ASEIT_INSPECTION_PAGE, name: '联动复核', owner: 'asInspection', path: 'review'},
  {
    type: MENU,
    name: '数据分析',
    path: 'dataAnalysis',
    children: [
      {type: ASEIT_SETTING_PAGE, name: '数据统计', owner: 'asInspection', path: 'dataStatistics'},
      {type: ASEIT_SETTING_PAGE, name: '数据预测', owner: 'asInspection', path: 'dataForecasting'},
    ],
  },
  {
    type: MENU,
    name: '历史记录',
    path: 'history',
    children: [
      {type: ASEIT_SETTING_PAGE, name: '任务记录', owner: 'asInspection', path: 'taskRecords'},
      {type: ASEIT_SETTING_PAGE, name: '异常记录', owner: 'asInspection', path: 'abnormalRecords'},
      {type: ASEIT_SETTING_PAGE, name: '巡检记录', owner: 'asInspection', path: 'inspectionRecords'},
      {type: ASEIT_SETTING_PAGE, name: '传感记录', owner: 'asInspection', path: 'sensorRecords'},
      {type: ASEIT_SETTING_PAGE, name: '局放记录', owner: 'asInspection', path: 'partialDischargeRecords'},
      {type: ASEIT_SETTING_PAGE, name: '机器人巡检记录', owner: 'asInspection', path: 'robotInspectionRecords'},
      {type: ASEIT_SETTING_PAGE, name: '避雷器异常记录', owner: 'asInspection', path: 'arresterRecords'},
      {type: ASEIT_SETTING_PAGE, name: '油色谱异常记录', owner: 'asInspection', path: 'oilChromatogramRecords'},
      {
        type: ASEIT_SETTING_PAGE,
        name: '局放全站报文',
        owner: 'asInspection',
        path: 'partialTotalStationMessageRecords',
      },
    ],
  },
  {
    type: MENU,
    name: '系统设置',
    path: 'systemSetting',
    children: [
      {type: ASEIT_SETTING_PAGE, name: '采集设备台账', owner: 'asSetting', path: 'collectionEquipment'},
      {type: ASEIT_SETTING_PAGE, name: '站线设备台账配置', owner: 'asSetting', path: 'employeeManage'},
      {type: ASEIT_SETTING_PAGE, name: '站线区域划分', owner: 'asSetting', path: 'areaRegionalism'},
      {type: ASEIT_SETTING_PAGE, name: '站线设备台账', owner: 'asSetting', path: 'equipments'},
      {type: ASEIT_SETTING_PAGE, name: '采集设备注册', owner: 'asSetting', path: 'equipmentRegist'},
      {type: ASEIT_SETTING_PAGE, name: '巡检点注册', owner: 'asSetting', path: 'inspectionPointRegist'},
      {type: ASEIT_SETTING_PAGE, name: '作业卡配置', owner: 'asSetting', path: 'jobCardsSettings'},
      {type: ASEIT_SETTING_PAGE, name: '无人巡检配置', owner: 'asSetting', path: 'inspectionConfig'},
      {type: ASEIT_SETTING_PAGE, name: '事件编制', owner: 'asSetting', path: 'linkageRule'},
      {type: ASEIT_SETTING_PAGE, name: '误报标注', owner: 'asSetting', path: 'misinformationLabel'},
      {type: ASEIT_SETTING_PAGE, name: '万物互联配置', owner: 'asSetting', path: 'internetOfEverythingSetting'},
    ],
  },
]

/**
 * 菜单定义
 */
const menuConfigs: TypeMenu[] = baseMenuConfigs.map(menu => {
  const {children = [], ...other} = menu
  const _children = children.map(child => ({...child, id: (Math.random() * 10000000000).toFixed(0)}))
  return {...other, children: _children, id: (Math.random() * 10000000000).toFixed(0)}
})

export {defaultOses, menuConfigs}
