
//const CustomReadStream = require("./CustomStreams/CustomReadStream")
//const CustomWriteStream = require("./CustomStreams/CustomWriteStream")
const PathError = require("./Errors/PathError")

// const writeStream = new CustomWriteStream(writepath)
// const readStream = new CustomReadStream(readpath)
const fs = require("fs")
const { pipeline } = require("stream")



const mainStreamHandler = (readpath, writepath, args,readStream,writeStream) => {

    readpath
    writepath
    let inputStream
    let outputStream

    try {
        if (!readpath) { inputStream = process.stdin }
        
            else if (fs.existsSync(readpath)) {
            readStream (readpath)
            inputStream = readStream(readpath)}
            else{throw new PathError("Wrong Input Path")}
           
        //  inputStream.on("error", err => { throw new PathError("Wrong  Input Path ")})
        
        if (!writepath) { outputStream = process.stdout }
        else if (fs.existsSync(writepath)) {
     
            outputStream =     writeStream(writepath)
           
        }

        else { 
         throw new PathError("Wrong Output Path") 
         
            }

    }
   
    catch (error) {console.error(error.message);
        return 
         }
    pipeline
        (
            inputStream,
            ...args,
            outputStream,
            (err) => { console.log("err from pipeline",err) }

        )







}
//mainStreamHandler("./gell.txt")





module.exports = { mainStreamHandler ,pipeline}























