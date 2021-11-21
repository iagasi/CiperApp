const MainStreamHandler=require("../streams")



// jest.mock("../CustomStreams/CustomReadStream")
//    jest.mock("../CustomStreams/CustomWriteStream")


afterEach(() => {
    jest.clearAllMocks();
  });
test("It throws error if Ouptput path not exists",()=>{
      jest.spyOn(console, 'error').mockImplementation();
const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const run=MainStreamHandler.mainStreamHandler(undefined,"undefined",[])
    expect(console.error.mock.calls[0][0]).toBe("Wrong Output Path" )

          
    expect(mockExit).toHaveBeenCalledWith(1);
  }) 

  
  test("It throws error if Inptput path not exists",()=>{
    jest.spyOn(console, 'error').mockImplementation();
   
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
   
const run2=MainStreamHandler.mainStreamHandler("undefined",undefined,[])
    expect(console.error.mock.calls[0][0]).toBe("Wrong Input Path" )
     expect(mockExit).toHaveBeenCalledWith(1);
}) 


