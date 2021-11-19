
const ArgumentsErrors = require("../Errors/ArumentsError.js")

const Mainjs = {

    checkParameters(conf, inp, outp) {

        if (!conf) {throw new ArgumentsErrors("-Not provided  -c  or  --config") }
        if (!inp) { console.log("INPUT will be console ,App  in working condition") }
        if (!outp) { console.log("Output will be console,  App  in working condition") }

    }


    ,




    checkConfigParameters(element) {

        if (element.length > 2) { throw new ArgumentsErrors("To many characters in parameter----   " + element); }
        if (element[0] == "C" || element[0] == "R") { if (element[1] != 1 && element[1] != 0) { throw new ArgumentsErrors("Accepted options only 1 and 0  ----   " + element) } }
        if (element[0] == "A" && element.length > 1) { throw new ArgumentsErrors("A must be without options but received ---  " + element) }

        if (element !== "C1" && element !== "C0" && element !== "A" && element !== "R1" && element !== "R0") { throw new ArgumentsErrors("unexpected parameter in config----" + element) }
    },
    PushFunctionsToArray(data,callback) {
        let stackOfFnctions = []



        const splited = data.split("-")


        for (let i = 0; i < splited.length; i++) {
            const element = splited[i]

            try {
               callback(element)
                if (element == "C0" || element == "C1") { stackOfFnctions = [...stackOfFnctions, ceasar(element, null, 1)] }

                if (element == "R1" || element == "R0") { stackOfFnctions = [...stackOfFnctions, rot8(element, null, 8)] }
                if (element == "A") {
                    stackOfFnctions = [...stackOfFnctions, abbash()]
                    
                }
                return stackOfFnctions
            }
            catch (e) {
                if (e) { process.stderr.write(e.message); process.exit(1) }
            }

        }

    }


}

module.exports=Mainjs