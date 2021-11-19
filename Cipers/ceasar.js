const { Transform } = require("stream")

const {LetterChecker}=require("./ceasarEncryptionLogic")






const handler = (action, dataa, shift) => {
  const ciper = new LetterChecker()

  return new Transform({

    transform(data, enc, cb) {


      let ceasar

      if (action === "C1" || action === "R1") {

        ceasar = ciper.encrypt(data.toString(), shift)

      }

      if (action === "C0" || action === "R0") {
        ceasar = ciper.decrypt(data.toString(), shift)
      }

      cb(null, ceasar)
    }

  })

}

module.exports = { LetterChecker, handler }