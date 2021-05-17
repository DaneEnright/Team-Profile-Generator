const fs = require("fs");
const FileIO = require("../fileIO");

//test the fs module and this constructor functions methods

//Mocks - way to test other peoples code without running continuously

jest.mock("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      //Arrange
      const fileIO = new FileIO(); //creates new object that will have access to 
the read and write methods
      const file = "log.txt";
      let result;
      
      //Act
      fs.readFileSync.mockReturnValue("go nuggets!");
      result = fileIO.read(file)
      
      //Assert
      expect(result).toEqual("go nuggets!");
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' 
arguments", () => {
      // TODO: Your code here
      const fileIO = new FileIO();
      const path = "log.txt";
      const data = "go nuggets!";

      fileIO.write(path,data)

      expect(fs.writeFileSync).lastCalledWith(path,data);
    });
  });
});
