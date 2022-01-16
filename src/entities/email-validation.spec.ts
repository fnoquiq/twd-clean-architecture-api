import { Email } from './email'

describe('Email Validator', () => {
  test('Should not accept null strings', () => {
    const email = null
    expect(Email.validate(email)).toBeFalsy()
  })

  test('Should not accept empty strings', () => {
    const email = ""
    expect(Email.validate(email)).toBeFalsy()
  })

  test('Should accept valid email', () => {
    const email = 'any@email.com'
    expect(Email.validate(email)).toBeTruthy()
  })
})