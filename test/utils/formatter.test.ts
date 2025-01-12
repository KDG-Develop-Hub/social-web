import { describe, expect, it } from 'vitest'

describe('formatDistanceFromNow', async () => {
  it('exists', async () => {
    expect(formatDistanceFromNow).toBeDefined()
  })
  it('returns formatted string', async () => {
    const dateTime = new Date()
    const result = formatDistanceFromNow(dateTime)
    expect(result).toBeTypeOf('string')
  })
  it('handles exceptional case', async () => {
    const now = new Date()
    const result = formatDistanceFromNow(now)
    expect(result).toBe('たった今')
  })
  it('rounds it down if it is a decimal', async () => {
    //ex. 1.5分前 -> 1分前
    const int = 1
    const dateTime = new Date()
    dateTime.setMinutes(dateTime.getMinutes() - int)
    dateTime.setSeconds(dateTime.getSeconds() - 30)
    const result = formatDistanceFromNow(dateTime)
    expect(result).toBe(`${int}分前`)
  })
  it('returns n分前 if it is less than 1 hour', async () => {
    for (let i = 1; i < 59; i++) {
      const randInt = Math.trunc(Math.random() * 59) + 1
      const dateTime = new Date()
      dateTime.setMinutes(dateTime.getMinutes() - randInt)
      const result = formatDistanceFromNow(dateTime)
      expect(result).toBe(`${randInt}分前`)
    }
  })
  it('returns n時間前 if it is less than 2 day', async () => {
    for (let i = 1; i < 23; i++) {
      const randInt = Math.trunc(Math.random() * 23) + 1
      const dateTime = new Date()
      dateTime.setHours(dateTime.getHours() - randInt)
      const result = formatDistanceFromNow(dateTime)
      expect(result).toBe(`${randInt}時間前`)
    }
  })
  it('returns n日前 if it is less than 2 weeks', async () => {
    for (let i = 1; i < 13; i++) {
      const randInt = Math.trunc(Math.random() * 13) + 1
      const dateTime = new Date()
      dateTime.setDate(dateTime.getDate() - randInt)
      const result = formatDistanceFromNow(dateTime)
      expect(result).toBe(`${randInt}日前`)
    }
  })
  it('returns formatted date if it is more than 2 weeks', async () => {
    const dateTime = new Date('2021-01-01')
    dateTime.setDate(dateTime.getDate() - 15)
    const result = formatDistanceFromNow(dateTime)
    expect(result).toBe('2020年12月17日')
  })
})
