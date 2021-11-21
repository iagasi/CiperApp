const ArgumentsErrors=require("../Errors/ArumentsError")

const checkConfigParameters=require("../functions/configValidating/checkConfigParameters")


test("it should throw argument error if not 1 or 0 after parameters is present",()=>{
    const parameter="C8"
    const r=()=>{checkConfigParameters(parameter)}
expect(r).toThrow("Accepted options only 1 and 0  ----   "+parameter)
})

test("it should throw argument error if to many characters in parameter ",()=>{
    const parameter="Ccd"
    const r=()=>{checkConfigParameters(parameter)}
expect(r).toThrow("To many characters in parameter----   "+parameter)
})


test("A must have length 1",()=>{
    const parameter="A1"
    const r=()=>{checkConfigParameters(parameter)}
expect(r).toThrow("A must be without options but received ---  "+parameter)
})
 
test("User passes incorrent symbols in argument for --config; Result: Error message is shown;",()=>{
    const parameter="D1"
    const r=()=>{checkConfigParameters(parameter)}
expect(r).toThrow("unexpected parameter in config----"+parameter)
})