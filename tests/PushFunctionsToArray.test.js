const PushFunctionsToArray=require("../functions/configValidating/PushFunctionsToArray")
const ceasar=require("../Cipers/ceasar").handler
const rot8=require("../Cipers/rot8")
const abbash=require("../Cipers/rot8")
afterEach(() => {
    jest.clearAllMocks();
  });

test("does something",()=>{
    const somedata="C1-A-C0-R1-R0"
    const dummufunction=jest.fn()
   const run= PushFunctionsToArray(somedata,dummufunction,ceasar,rot8,abbash)
 expect(dummufunction).toHaveBeenCalledTimes(1)
 
})

test("function returns array of functions",()=>{
    const somedata="C1-A-C0-R-R1"
    const dummufunction=jest.fn()
   const run= PushFunctionsToArray(somedata,dummufunction,ceasar,rot8,abbash)
expect(run).toBeInstanceOf(Array)
})

test("Returns empty array ",()=>{
  const somedata="W-v-D"
  const dummufunction=jest.fn()
   const run= PushFunctionsToArray(somedata,dummufunction,ceasar,rot8,abbash)
   expect(run).toEqual([])
})


test("throws errors",()=>{

  jest.spyOn(console, 'error')
  .mockImplementation((a) => {});
  
 
  const dummufunction=()=>{throw new Error("some error")}
  const somedata="C1-A-C0-R-R1"
  const run= PushFunctionsToArray(somedata,dummufunction,ceasar,rot8,abbash)

  expect(console.error.mock.calls[0][0]).toBe("some error")
})