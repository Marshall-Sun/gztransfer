export type Line = 1
| 2
| 3
| 4
| 5
| 6
| 7
| 8
| 9
| 13
| 14
| 18
| 21
| 22
| 'APM'
| 'GF'
| 'F2'

export const LineNameMap: Record<Line, string> = {
  1: '1号线',
  2: '2号线',
  3: '3号线',
  4: '4号线',
  5: '5号线',
  6: '6号线',
  7: '7号线',
  8: '8号线',
  9: '9号线',
  13: '13号线',
  14: '14号线',
  18: '18号线',
  21: '21号线',
  22: '22号线',
  APM: 'APM线',
  GF: '广佛线',
  F2: '佛山2号线',
}

export const LineColorMap: Record<Line, string> = {
  1: '#f3d03e',
  2: '#00629b',
  3: '#eca154',
  4: '#00843d',
  5: '#c5003e',
  6: '#80225f',
  7: '#97d700',
  8: '#008c95',
  9: '#71cc98',
  13: '#8e8c13',
  14: '#81312f',
  18: '#0047ba',
  21: '#201747',
  22: '#cd5228',
  APM: '#00b5e2',
  GF: '#c4d600',
  F2: '#f5333f',
}

export const LineFontColorMap: Record<Line, string> = {
  1: '#000',
  2: '#fff',
  3: '#000',
  4: '#fff',
  5: '#fff',
  6: '#fff',
  7: '#000',
  8: '#fff',
  9: '#000',
  13: '#fff',
  14: '#fff',
  18: '#fff',
  21: '#fff',
  22: '#fff',
  APM: '#fff',
  GF: '#000',
  F2: '#fff',
}

export const LineList = Object.keys(LineNameMap) as Line[]

export interface Station {
  name: string
  abbr: string
  lines: Line[]
  transfers: Transfer[]
  note?: string | string[]
}

export interface Transfer {
  from: Line
  to: Line
  doorIndex: number | 'any' | (number | 'any')[]
}
