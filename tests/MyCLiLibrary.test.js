const MyCliLibrary = require("../MyCliLibrary")


afterEach(() => {
   jest.clearAllMocks();
   process.argv = process.argv.slice(0, 2);
});

jest.spyOn(console, 'error')
   .mockImplementation((a) => { });
test("Check for config parameter not provided", () => {
   process.argv.push("-c")
   const run = MyCliLibrary.requiredOptionsHandler("-c", "--config")

   expect(console.error.mock.calls[0][0]).toBe("for  " + "-c" + "  parameters not provided")

})
test("Check invalid first parameter must be without >>  - <<", () => {
   process.argv.push("-c")

   const firstParameter = "- C1"
   process.argv.push(firstParameter)
   const config1 = "-c"
   const run = MyCliLibrary.requiredOptionsHandler(config1, "--config")

   expect(console.error.mock.calls[0][0]).toBe(config1 + "   -----   has  unvalid paramters")

})

test("User passes the same cli argument twice; Result: Error message is shown ", () => {
   const config1 = "-c"
   process.argv.push(config1)
   process.argv.push(config1)
   const dublicated="-c,-c"
   const firstParameter = "- C1"
   process.argv.push(firstParameter)

   const run = MyCliLibrary.requiredOptionsHandler(config1, "--config")

   expect(console.error.mock.calls[0][0]).toBe("Dublicated argument found=   " + dublicated)

})

test("User passes correct sequence of symbols as argument for --config that matches regular expression", () => {
   process.argv.push("-c")
   process.argv.push("C1-C0-A-R1")
   const run = MyCliLibrary.requiredOptionsHandler("-c", "--config")

   console.log(process.argv);


   expect(run).toBe("C1-C0-A-R1")
})


// })