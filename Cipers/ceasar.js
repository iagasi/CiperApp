const { Transform } = require("stream")




class LetterChecker {
  constructor(action, shift) {

    this.start
    this.end
  }


  stringFeature(checkLetter) {


    if (checkLetter == checkLetter.toUpperCase()) {
      this.start = 65
      this.end = 90

    }

    else {
      this.start = 97
      this.end = 122
    }

  }

  isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char)
  }





  encrypt(str, receivedNumber) {
    let coded = ""



    let number = receivedNumber % 25



    for (let i = 0; i < str.length; i++) {

      if (!this.isCharacterALetter(str[i])) {
        coded += str[i]
        continue

      }
      this.stringFeature(str[i])


      const ascinum = str[i].charCodeAt()


      //  if number is positive 
      if (number > 0) {

        if (ascinum + number > this.end) {
          coded += (String.fromCharCode(this.start - (this.end - ascinum - number + 1)))

        }
        if (ascinum + number <= this.end) {
          coded += (String.fromCharCode(str[i].charCodeAt() + number))

        }

      }


      //if number is negaive

      if (number < 0) {

        if (ascinum + number >= this.start) {
          coded += String.fromCharCode(ascinum + number)

        }


        if (ascinum + number < this.start) {
          coded += String.fromCharCode(1 + this.end + (str[i].charCodeAt() - this.start) + number)

        }

      }

    }
    return coded


  }


  decrypt(str, receivedNumber) {
    let number = - receivedNumber

    return this.encrypt(str, number)
  }




}




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

module.exports={ LetterChecker,handler}