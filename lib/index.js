var hexMap = require('./hexMap.js');

module.exports = {
  bytesToAscii: function(bytes) {
    var asciiStr = '';

    bytes.forEach(function(byte) {
      asciiStr += hexMap[byte].ascii;
    });

    return asciiStr;
  },
  bytesToEbdic: function(bytes) {
    var ebcdicStr = '';

    bytes.forEach(function(byte) {
      ebcdicStr += hexMap[byte].ebcdic;
    });

    return ebcdicStr;
  },
  asciiStrToEbcdicStr: function(input) {
    input = input.split('');

    var bytes = [];

    input.forEach(function(character) {
      var matchingByte = Object.keys(hexMap).find(function(key) {
        return hexMap[key].ebcdic === character;
      });

      bytes.push(matchingByte);
    });

    return bytes;
  }
};
