const ArgumentsErrors=require("../../Errors/ArumentsError")
const checkConfigParameters=(element)=> {


    if (element.length > 2) { throw new ArgumentsErrors("To many characters in parameter----   " + element); }
    if (element[0] == "C" || element[0] == "R") { if (element[1] != 1 && element[1] != 0) { throw new ArgumentsErrors("Accepted options only 1 and 0  ----   " + element) } }
    if (element[0] == "A" && element.length > 1) { throw new ArgumentsErrors("A must be without options but received ---  " + element) }

    if (element !== "C1" && element !== "C0" && element !== "A" && element !== "R1" && element !== "R0") { throw new ArgumentsErrors("unexpected parameter in config----" + element) }
}

module.exports=checkConfigParameters