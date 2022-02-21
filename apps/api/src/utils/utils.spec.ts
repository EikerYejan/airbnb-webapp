import { removeUndefinedEntries } from '.'

describe('Utils', () => {
  it('Should remove undefined entries', () => {
    const obj = { name: 'NAME', lastName: undefined }

    expect(removeUndefinedEntries(obj)).toEqual({ name: 'NAME' })
  })
})
