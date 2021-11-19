const { Transform } = require("stream")
const LetterChecker =require("./ceasarEncryptionLogic")

const rot8Handler=(action,data,shift=8)=>{
const rot8=new LetterChecker()

return new Transform({

transform(chunk,encoding,callback){
let modifiedchunk
if(action==="R1"){modifiedchunk= rot8.encrypt(chunk.toString(), shift)}
if ( action === "R0") { modifiedchunk = rot8.decrypt(chunk.toString(), shift) }
   
 

callback(null,modifiedchunk)
}

})





}
module.exports=rot8Handler