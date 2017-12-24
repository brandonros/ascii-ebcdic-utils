var asciiEbcdicUtils = require('../lib/index.js');

console.log(asciiEbcdicUtils.asciiStrToEbcdicStr('db2jcc'));
console.log(asciiEbcdicUtils.bytesToAscii(['84', 'F2', '91', '83', '83']));
console.log(asciiEbcdicUtils.bytesToEbdic(['84', 'F2', '91', '83', '83']));
