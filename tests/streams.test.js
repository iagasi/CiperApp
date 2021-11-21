const MainStreamHandler=require("../streams")


const{pipeline}=require("../streams")
jest.mock("../CustomStreams/CustomReadStream")
   jest.mock("../CustomStreams/CustomWriteStream")
afterEach(() => {
    jest.clearAllMocks();
  });
test("It throws error if Ouptput path not exists",()=>{
      jest.spyOn(console, 'error').mockImplementation();
   
    const run=MainStreamHandler.mainStreamHandler(undefined,"undefined",[])
    expect(console.error.mock.calls[0][0]).toBe("Wrong Output Path" )
  }) 

  
  test("It throws error if Inptput path not exists",()=>{
    jest.spyOn(console, 'error').mockImplementation();
   
const run2=MainStreamHandler.mainStreamHandler("undefined",undefined,[])
    expect(console.error.mock.calls[0][0]).toBe("Wrong Input Path" )
}) 


