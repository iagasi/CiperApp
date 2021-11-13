const MyCliLibrary = require("./MyCliLibrary.js")
const MainStreamHandler = require("./streams.js")
const ceasar = require("./Cipers/ceasar").handler
const abbash = require("./Cipers/abbashciper.js")
const rot8 = require("./Cipers/rot8")
const ArgumentsErrors = require("./Errors/ArumentsError.js")

const config = MyCliLibrary.requiredOptionsHandler("-c", "--config")
if (!config) { throw new ArgumentsErrors("-Not provided  -c  or  --config     ") }

const input = MyCliLibrary.requiredOptionsHandler("-i", "--input")
if (!input) { console.log("INPUT will be console ,App  in working condition" ) }

const output = MyCliLibrary.requiredOptionsHandler("-o", "--output")
if (!output) { console.log("Output will be console,  App  in working condition") }


//return console.log(config);


let stackOfFnctions = []

function checkConfigParameters(element) {
    console.log(element[0]);
    if(element.length>2){throw new ArgumentsErrors("To many characters in parameter----   " + element);}
    if(element[0]=="C"||element[0]=="R"){if(element[1]!=1 &&element[1]!=0 ){throw new ArgumentsErrors("Accepted options only 1 and 0  ----   " + element)}}
    if(element[0]=="A"&&element.length>1){throw new ArgumentsErrors("A must be without options but received ---  " + element)}

  if (element !== "C1" && element !== "C0" && element !== "A" && element !== "R1" && element !== "R0") { throw new ArgumentsErrors("unexpected parameter in config----" + element) }
}


const splited = config.split("-")

console.log(splited);
for (let i = 0; i < splited.length; i++) {
    const element = splited[i]

    try {
        checkConfigParameters(element)
        if (element == "C0" || element == "C1") { stackOfFnctions = [...stackOfFnctions, ceasar(element, null, 1)] }

        if (element == "R1" || element == "R0") { stackOfFnctions = [...stackOfFnctions, rot8(element, null, 8)] }
        if (element == "A") { stackOfFnctions = [...stackOfFnctions, abbash()] }
    }
    catch (e) {
        if (e) { process.stderr.write(e.message); process.exit(1) }
    }

}

MainStreamHandler.mainStreamHandler(input, output, stackOfFnctions)

