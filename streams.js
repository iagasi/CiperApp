
const CustomReadStream = require("./CustomStreams/CustomReadStream")
const CustomWriteStream = require("./CustomStreams/CustomWriteStream")
const PathError = require("./Errors/PathError")


const fs = require("fs")
const { pipeline } = require("stream")

function pathErrorHandler(str) {
    throw new PathError(str)
}

const mainStreamHandler = (readpath, writepath, args) => {

    readpath
    writepath
    let inputStream
    let outputStream

    try {
        if (!readpath) { inputStream = process.stdin }
        else {
            const readStream = new CustomReadStream(readpath)
            inputStream = readStream
            inputStream.on("error", err => pathErrorHandler("Wrong  Input Path "))
        }
        if (!writepath) { outputStream = process.stdout }
        else if (fs.existsSync(writepath)) {
            const writeStream = new CustomWriteStream(writepath)
            outputStream = writeStream
            //outputStream = fs.createWriteStream(writepath, { flags: "a+" })
        }

        else { pathErrorHandler("Wrong Output Path") }

    }
   
    catch (error) { process.stderr.write(error.message); process.exit(1) }
    pipeline
        (
            inputStream,
            ...args,
            outputStream,
            (err) => { console.log(err) }

        )







}
//mainStreamHandler("./gell.txt")





module.exports = { mainStreamHandler }
























