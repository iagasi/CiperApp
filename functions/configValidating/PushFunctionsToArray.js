//const ceasar=require("../../Cipers/ceasar").handler

const PushFunctionsToArray = (data, callback,ceasar ,rot8,abbash ) => {
    let stackOfFnctions = []



    const splited = data.split("-")
    

    for (let i = 0; i < splited.length; i++) {
        const element = splited[i]

       try {
          callback(element)
            if (element == "C0" || element == "C1") { stackOfFnctions = [...stackOfFnctions, ceasar(element, null, 1)] }

            if (element == "R1" || element == "R0") { stackOfFnctions = [...stackOfFnctions, rot8(element, null, 8)] }
            if (element == "A") { stackOfFnctions = [...stackOfFnctions, abbash()] }
               

           
          
            return stackOfFnctions
       }
        catch (e) {
            if (e) { console.error(e.message)  
                //;process.exit(1)
              
             }
        }

    }

}

module.exports = PushFunctionsToArray