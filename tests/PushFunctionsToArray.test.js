const PushFunctionsToArray = require("../functions/configValidating/PushFunctionsToArray")

const LetterChecker = require("../Cipers/ceasarEncryptionLogic")


const ceasar = jest.fn(() => { })
const rot8 = jest.fn(() => { })
const abbash = jest.fn(() => { })

test("Calback Config parameters been Called", () => {
  const somedata = "C1-A-C0-R1-R0"
  const checkConfigParameters = jest.fn()
  const run = PushFunctionsToArray(somedata, checkConfigParameters, ceasar, rot8, abbash)
  expect(checkConfigParameters).toHaveBeenCalledTimes(1)

})

test("function returns array of functions", () => {
  const somedata = "C1-A-C0-R-R1"
  const checkConfigParameters = jest.fn()
  const run = PushFunctionsToArray(somedata, checkConfigParameters, ceasar, rot8, abbash)
  expect(run).toBeInstanceOf(Array)
})

test("Returns empty array ", () => {
  const somedata = "W-v-D"
  const checkConfigParameters = jest.fn()
  const run = PushFunctionsToArray(somedata, checkConfigParameters, ceasar, rot8, abbash)
  expect(run).toEqual([])
})


test("throws errors", () => {

  jest.spyOn(console, 'error')
    .mockImplementation();


  const checkConfigParameters = () => { throw new Error("some error") }
  const somedata = "C1-A-C0-R-R1"
  const run = PushFunctionsToArray(somedata, checkConfigParameters, ceasar, rot8, abbash)

  expect(console.error.mock.calls[0][0]).toBe("some error")
})