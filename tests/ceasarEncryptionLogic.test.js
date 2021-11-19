const  LetterChecker = require("../Cipers/ceasarEncryptionLogic")

const letterchecker=new LetterChecker("C1","encrypt")
const a=letterchecker.encrypt("Gellz.1",1)
test("check correct encryption",()=>{
expect(a).toBe("Hfmma.1")
})

test("check correct Decryption",()=>{
    const decrypt=letterchecker.decrypt("Aasm..3",1)
    expect(decrypt).toBe("Zzrl..3")
    })


   