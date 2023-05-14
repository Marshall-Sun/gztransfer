import type { Station } from '.'

export default [
  {
    name: '公园前',
    abbr: 'gyq',
    lines: [1, 2],
    transfers: [
      { from: 1, to: 2, doorIndex: 14 },
      { from: 2, to: 1, doorIndex: 14 },
    ],
  },
  {
    name: '广州东站',
    abbr: 'gzdz',
    lines: [1, 3],
    transfers: [
      { from: 1, to: 3, doorIndex: 2 },
      { from: 3, to: 1, doorIndex: 5 },
    ],
  },
  {
    name: '体育西路',
    abbr: 'tyxl',
    lines: [1, 3],
    transfers: [
      { from: 1, to: 3, doorIndex: 2 },
      { from: 3, to: 1, doorIndex: 21 },
    ],
  },
  {
    name: '杨箕',
    abbr: 'yj',
    lines: [1, 5],
    transfers: [
      { from: 1, to: 5, doorIndex: 7 },
      { from: 5, to: 1, doorIndex: 8 },
    ],
  },
  {
    name: '东山口',
    abbr: 'dsk',
    lines: [1, 6],
    transfers: [
      { from: 1, to: 6, doorIndex: 5 },
      { from: 6, to: 1, doorIndex: 7 },
    ],
  },
  {
    name: '黄沙',
    abbr: 'hs',
    lines: [1, 6],
    transfers: [
      { from: 1, to: 6, doorIndex: 5 },
      { from: 6, to: 1, doorIndex: 3 },
    ],
  },
  {
    name: '陈家祠',
    abbr: 'cjc',
    lines: [1, 8],
    transfers: [
      { from: 1, to: 8, doorIndex: 24 },
      { from: 8, to: 1, doorIndex: 21 },
    ],
  },
  {
    name: '西塱',
    abbr: 'xl',
    lines: [1, 'GF'],
    transfers: [
      { from: 1, to: 'GF', doorIndex: 18 },
      { from: 'GF', to: 1, doorIndex: 2 },
    ],
  },
  {
    name: '嘉禾望岗',
    abbr: 'jhwg',
    lines: [2, 3, 14],
    transfers: [
      { from: 2, to: 3, doorIndex: ['any', 19] },
      { from: 2, to: 14, doorIndex: [7, 24] },
      { from: 3, to: 2, doorIndex: ['any', 15] },
      { from: 3, to: 14, doorIndex: [4, 21] },
      { from: 14, to: 2, doorIndex: [4, 21] },
      { from: 14, to: 3, doorIndex: [4, 21] },
    ],
    note: [
      '2号线换乘3号线机场北方向：同台换乘',
      '2号线换乘3号线番禺广场方向：19号门',
      '3号线番禺广场方向换乘2号线：同台换乘',
      '3号线机场北方向换乘2号线：15号门',
    ],
  },
  {
    name: '广州火车站',
    abbr: 'gzhcz',
    lines: [2, 5],
    transfers: [
      { from: 2, to: 5, doorIndex: 8 },
      { from: 5, to: 2, doorIndex: 9 },
    ],
  },
  {
    name: '海珠广场',
    abbr: 'hzgc',
    lines: [2, 6],
    transfers: [
      { from: 2, to: 6, doorIndex: 19 },
      { from: 6, to: 2, doorIndex: 3 },
    ],
  },
  {
    name: '石壁',
    abbr: 'sb',
    lines: [2, 7],
    transfers: [
      { from: 2, to: 7, doorIndex: 23 },
      { from: 7, to: 2, doorIndex: 6 },
    ],
  },
  {
    name: '广州南站',
    abbr: 'gznz',
    lines: [2, 7, 22, 'F2'],
    transfers: [
      { from: 2, to: 7, doorIndex: 8 },
      { from: 2, to: 22, doorIndex: 8 },
      { from: 2, to: 'F2', doorIndex: 8 },
      { from: 7, to: 2, doorIndex: 'any' },
      { from: 7, to: 22, doorIndex: 8 },
      { from: 7, to: 'F2', doorIndex: 8 },
      { from: 22, to: 2, doorIndex: 25 },
      { from: 22, to: 7, doorIndex: 25 },
      { from: 22, to: 'F2', doorIndex: 25 },
      { from: 'F2', to: 2, doorIndex: 15 },
      { from: 'F2', to: 7, doorIndex: 15 },
      { from: 'F2', to: 22, doorIndex: 15 },
    ],
  },
  {
    name: '昌岗',
    abbr: 'cg',
    lines: [2, 8],
    transfers: [
      { from: 2, to: 8, doorIndex: 26 },
      { from: 8, to: 2, doorIndex: [28, 26] },
    ],
    note: ['8号线换乘2号线：28号门（高峰时26号门）'],
  },
  {
    name: '南洲',
    abbr: 'nz',
    lines: [2, 'GF'],
    transfers: [
      { from: 2, to: 'GF', doorIndex: 23 },
      { from: 'GF', to: 2, doorIndex: 13 },
    ],
  },
  {
    name: '珠江新城',
    abbr: 'zjxc',
    lines: [3, 5],
    transfers: [
      { from: 3, to: 5, doorIndex: [4, 21] },
      { from: 5, to: 3, doorIndex: 8 },
    ],
    note: ['3号线换乘5号线文冲方向：4号门', '3号线换乘5号线滘口方向：21号门'],
  },
  {
    name: '燕塘',
    abbr: 'yt',
    lines: [3, 6],
    transfers: [
      { from: 3, to: 6, doorIndex: 21 },
      { from: 6, to: 3, doorIndex: 10 },
    ],
  },
  {
    name: '天河客运站',
    abbr: 'thkyz',
    lines: [3, 6],
    transfers: [
      { from: 3, to: 6, doorIndex: 19 },
      { from: 6, to: 3, doorIndex: 4 },
    ],
  },
  {
    name: '汉溪长隆',
    abbr: 'hxcl',
    lines: [3, 7],
    transfers: [
      { from: 3, to: 7, doorIndex: 20 },
      { from: 7, to: 3, doorIndex: 9 },
    ],
  },
  {
    name: '客村',
    abbr: 'kc',
    lines: [3, 8],
    transfers: [
      { from: 3, to: 8, doorIndex: [6, 7, 18, 19] },
      { from: 8, to: 3, doorIndex: [4, 5, 27] },
    ],
  },
  {
    name: '高增',
    abbr: 'gz',
    lines: [3, 9],
    transfers: [
      { from: 3, to: 9, doorIndex: 6 },
      { from: 9, to: 3, doorIndex: 19 },
    ],
  },
  {
    name: '番禺广场',
    abbr: 'pygc',
    lines: [3, 18, 22],
    transfers: [
      { from: 3, to: 18, doorIndex: 22 },
      { from: 3, to: 22, doorIndex: 22 },
      { from: 18, to: 3, doorIndex: 30 },
      { from: 18, to: 22, doorIndex: ['any', 27] },
      { from: 22, to: 3, doorIndex: 30 },
      { from: 22, to: 18, doorIndex: ['any', 27] },
    ],
    note: [
      '18号线冼村方向换乘22号线：同台换乘',
      '18号线万顷沙方向换乘22号线：27号门',
      '22号线换乘18号线冼村方向：27号门',
      '22号线换乘18号线万顷沙方向：同台换乘',
    ],
  },
  {
    name: '沥滘',
    abbr: 'lj',
    lines: [3, 'GF'],
    transfers: [
      { from: 3, to: 'GF', doorIndex: 24 },
      { from: 'GF', to: 3, doorIndex: 8 },
    ],
  },
  {
    name: '广州塔',
    abbr: 'gzt',
    lines: [3, 'APM'],
    transfers: [
      { from: 3, to: 'APM', doorIndex: 5 },
      { from: 'APM', to: 3, doorIndex: 1 },
    ],
  },
  {
    name: '林和西',
    abbr: 'lhx',
    lines: [3, 'APM'],
    transfers: [
      { from: 3, to: 'APM', doorIndex: 9 },
      { from: 'APM', to: 3, doorIndex: 1 },
    ],
  },
  {
    name: '车陂南',
    abbr: 'cbn',
    lines: [4, 5],
    transfers: [
      { from: 4, to: 5, doorIndex: 1 },
      { from: 5, to: 4, doorIndex: [6, 13] },
    ],
  },
  {
    name: '大学城南',
    abbr: 'dxcn',
    lines: [4, 7],
    transfers: [
      { from: 4, to: 7, doorIndex: 6 },
      { from: 7, to: 4, doorIndex: [6, 21] },
    ],
    note: [
      '7号线换乘4号线南沙客运港方向：6号门',
      '7号线换乘4号线黄村方向：21号门',
    ],
  },
  {
    name: '万胜围',
    abbr: 'wsw',
    lines: [4, 8],
    transfers: [
      { from: 4, to: 8, doorIndex: 9 },
      { from: 8, to: 4, doorIndex: [16, 17] },
    ],
  },
  {
    name: '黄村',
    abbr: 'hc',
    lines: [4, 21],
    transfers: [
      { from: 4, to: 21, doorIndex: 11 },
      { from: 21, to: 4, doorIndex: 11 },
    ],
  },
  {
    name: '坦尾',
    abbr: 'tw',
    lines: [5, 6],
    transfers: [
      { from: 5, to: 6, doorIndex: 17 },
      { from: 6, to: 5, doorIndex: 10 },
    ],
  },
  {
    name: '区庄',
    abbr: 'oz',
    lines: [5, 6],
    transfers: [
      { from: 5, to: 6, doorIndex: 7 },
      { from: 6, to: 5, doorIndex: 12 },
    ],
  },
  {
    name: '鱼珠',
    abbr: 'yz',
    lines: [5, 13],
    transfers: [
      { from: 5, to: 13, doorIndex: 3 },
      { from: 13, to: 5, doorIndex: [12, 17] },
    ],
    note: ['13号线换乘5号线：12号门（高峰时17号门）'],
  },
  {
    name: '员村',
    abbr: 'yc',
    lines: [5, 21],
    transfers: [
      { from: 5, to: 21, doorIndex: 4 },
      { from: 21, to: 5, doorIndex: 20 },
    ],
  },
  {
    name: '文化公园',
    abbr: 'whgy',
    lines: [6, 8],
    transfers: [
      { from: 6, to: 8, doorIndex: [11, 12] },
      { from: 8, to: 6, doorIndex: [17, 18, 20] },
    ],
  },
  {
    name: '苏元',
    abbr: 'sy',
    lines: [6, 21],
    transfers: [
      { from: 6, to: 21, doorIndex: [2, 12] },
      { from: 21, to: 6, doorIndex: [8, 17] },
    ],
    note: [
      '6号线浔峰岗方向换乘21号线：2号门',
      '6号线香雪方向换乘21号线：12号门',
      '21号线换乘6号线：8号门（手扶梯），17号门（楼梯）',
    ],
  },
  {
    name: '南村万博',
    abbr: 'ncwb',
    lines: [7, 18],
    transfers: [
      { from: 7, to: 18, doorIndex: 1 },
      { from: 18, to: 7, doorIndex: 2 },
    ],
  },
  {
    name: '磨碟沙',
    abbr: 'mds',
    lines: [8, 18],
    transfers: [
      { from: 8, to: 18, doorIndex: [17, 18] },
      { from: 18, to: 8, doorIndex: 1 },
    ],
  },
  {
    name: '沙园',
    abbr: 'sy',
    lines: [8, 'GF'],
    transfers: [
      { from: 8, to: 'GF', doorIndex: ['any', 16, 22] },
      { from: 'GF', to: 8, doorIndex: ['any', 9, 14] },
    ],
    note: [
      '8号线滘心方向换乘广佛线沥滘方向：同台换乘',
      '8号线万胜围方向换乘广佛线新城东方向：同台换乘',
      '8号线滘心方向换乘广佛线新城东方向：16号门',
      '8号线万胜围方向换乘广佛线沥滘方向：22号门',
      '广佛线沥滘方向换乘8号线滘心方向：同台换乘',
      '广佛线新城东方向换乘8号线万胜围方向：同台换乘',
      '广佛线沥滘方向换乘8号线万胜围方向：9号门',
      '广佛线新城东方向换乘8号线滘心方向：14号门',
    ],
  },
  {
    name: '新和',
    abbr: 'xh',
    lines: [14],
    transfers: [{ from: 14, to: 14, doorIndex: ['any', 4, 21] }],
    note: [
      '14号线嘉禾望岗方向换乘14号线支线：4号门或21号门',
      '14号线东风方向换乘14号线支线：同台换乘',
      '14号线支线换乘14号线嘉禾望岗方向：同台换乘',
      '14号线支线换乘14号线东风方向：4号门或21号门',
    ],
  },
  {
    name: '镇龙',
    abbr: 'zl',
    lines: [14, 21],
    transfers: [
      { from: 14, to: 21, doorIndex: ['any', 5, 20] },
      { from: 21, to: 14, doorIndex: ['any', 5, 20] },
    ],
    note: [
      '14号线支线换乘21号线增城广场方向：同台换乘',
      '14号线支线换乘21号线员村方向：5号门或20号门',
      '21号线增城广场方向换乘14号线支线：同台换乘',
      '21号线员村方向换乘14号线支线：5号门或20号门',
    ],
  },
  {
    name: '魁奇路',
    abbr: 'kql',
    lines: ['GF', 'F2'],
    transfers: [
      { from: 'GF', to: 'F2', doorIndex: [4, 11] },
      { from: 'F2', to: 'GF', doorIndex: 17 },
    ],
    note: [
      '广佛线换乘佛山2号线广州南站方向：4号门',
      '广佛线换乘佛山2号线南庄站方向：11号门',
    ],
  },
] as Station[]
