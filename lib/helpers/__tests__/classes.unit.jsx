import classes from '../classes'

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
  it('接受零个参数',()=>{
    const result = classes()
    expect(result).toEqual('')
  })
})
