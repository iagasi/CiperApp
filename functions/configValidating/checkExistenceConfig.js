//const ArgumentsErrors=require("../../Errors/ArumentsError")

const checkExistenceConfig=(conf, inp, outp,ArgumentsErrors) =>{

    if (!conf) { throw new ArgumentsErrors("-Not provided  -c  or  --config") }
    if (!inp) { console.log("INPUT will be console ,App  in working condition") }
    if (!outp) { console.log("Output will be console,  App  in working condition") }

}
module.exports=checkExistenceConfig