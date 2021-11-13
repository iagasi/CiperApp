const { Writable, pipeline } = require('stream');
const fs = require('fs');

class WriteStream extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
    
  }
  _construct(callback) {
    fs.open(this.filename, (err, fd) => {
      if (err) {
        callback(err);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }
  _write(chunk, encoding, callback) {
    fs.appendFile(this.filename,chunk,callback)
  }
  _destroy(err, callback) {
    if (this.fd) {
      fs.close(this.fd, (er) => callback(er || err));
    } else {
      callback(err);
    }
  }
}


module.exports=WriteStream