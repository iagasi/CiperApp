const MyCliLibrary = require("./MyCliLibrary.js")
const MainStreamHandler = require("./streams.js")
const ceasar = require("./Cipers/ceasar")
const abbash = require("./Cipers/abbashciper.js")
const rot8 = require("./Cipers/rot8")
const ArgumentsErrors = require("./Errors/ArumentsError.js")

const config = MyCliLibrary.requiredOptionsHandler("-c", "--config")
const input = MyCliLibrary.requiredOptionsHandler("-i", "--input")
const output = MyCliLibrary.requiredOptionsHandler("-o", "--output")

const checkExistenceConfig=require("./functions/configValidating/checkExistenceConfig")
const PushFunctionsToArray=require("./functions/configValidating/PushFunctionsToArray")
const checkConfigParameters=require("./functions/configValidating/checkConfigParameters")

const check=checkConfigParameters
checkExistenceConfig(config,input,output,ArgumentsErrors)

const stackOfFnctions= PushFunctionsToArray(config,check, ceasar,rot8,abbash)


MainStreamHandler.mainStreamHandler(input, output, stackOfFnctions)





