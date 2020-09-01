import classes, {scopedClassMaker} from '../classes'

describe('classes', () => {
  it('接受一个 className', () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it('接受两个 className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  it('不接受 undefined', () => {
    const result = classes('a', undefined)
    expect(result).toEqual('a')
  })
  it('接受各种奇怪值', () => {
    const result = classes('a', '中文', false, null)
    expect(result).toEqual('a 中文')
  })
  it('接受零个参数', () => {
    const result = classes()
    expect(result).toEqual('')
  })
})

describe('scopedClassMaker', () => {
  it('接受字符串或对象', () => {
    const sc = scopedClassMaker('bui-layout')
    expect(sc('')).toEqual('bui-layout')
    expect(sc('x')).toEqual('bui-layout-x')
    expect(sc({y: true, z: false})).toEqual('bui-layout-y')
    expect(sc({y: true, z: true})).toEqual('bui-layout-y bui-layout-z')
    expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('bui-layout-y bui-layout-z red')
  })
})
