const process = require('process')
const MyCliLibraryError = require("./Errors/MyCliError")





function requiredOptionsHandler(optionShortName, optionLargeName) {
  try {
    const receivedOptions = process.argv.filter((el) => { return el == optionShortName || el == optionLargeName })
console.log(typeof receivedOptions);

    if (receivedOptions.length > 1) { throw new MyCliLibraryError("Dublicated argument found=   " + receivedOptions) }
    if (receivedOptions.length == 0) { console.log(" -Not provided  " + optionShortName + "   or  " + optionLargeName); return false; }

    const optionPositionInArray = process.argv.indexOf(receivedOptions[0])


    if (process.argv[optionPositionInArray + 1]) {
      if (process.argv[optionPositionInArray + 1].charAt(0) == "-") { throw new MyCliLibraryError(process.argv[optionPositionInArray] + "   -----   has  unvalid paramters")}
    }

    if (process.argv[optionPositionInArray + 1] == undefined) { throw new MyCliLibraryError("for  " + process.argv[optionPositionInArray] + "  parameters not provided"); return false }
    return process.argv[optionPositionInArray + 1]
  }

  catch (err) {
    console.error(err.message);
  // process.exit(1)
  }





}



module.exports = { requiredOptionsHandler }