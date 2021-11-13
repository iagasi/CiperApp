const { Transform } = require("stream")



const abbash = (str) => {


    //97-122
    let coded = ""
    let startvalue
    let endValue

    function isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char)
    }

    for (let i = 0; i < str.length; i++) {
        if (!isCharacterALetter(str[i])) {
            coded += str[i]
            continue

        }
        if (str[i] == str[i].toLocaleLowerCase()) { startvalue = 97, endValue = 122 }
        else { startvalue = 65, endValue = 90 }

        const position = str[i].charCodeAt()
        //console.log(position)


        const r = endValue - (position - startvalue)
        coded += String.fromCharCode(r)



    }
    return coded
}






const handler = () => {
    return new Transform({
        transform(data, etc, callback) {
            const modified = abbash(data.toString())
            callback(null, modified)
        }
    })
}

module.exports = handler