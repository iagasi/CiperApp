const checkExistenceConfig=require("../functions/configValidating/checkExistenceConfig")
const ArgumentsErrors=require("../Errors/ArumentsError")

afterEach(() => {
    jest.clearAllMocks();
  });


it("if not config return ArgumentError",()=>{
    const run=()=>{checkExistenceConfig(undefined,"","",ArgumentsErrors)}
    expect(run).toThrow(ArgumentsErrors)
})

jest.spyOn(console, 'log')
it("should do console.log if not input",()=>{
const run=checkExistenceConfig("-c",undefined,"output")
expect(console.log.mock.calls[0][0]).toBe("INPUT will be console ,App  in working condition")
})

it("should do console.log if not output",()=>{
    const run=checkExistenceConfig("-c","input",null)
    expect(console.log.mock.calls[0][0]).toBe("Output will be console,  App  in working condition")
    })