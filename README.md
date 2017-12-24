# ascii-ebcdic-utils
ASCII/EBDIC utility functions

## Usage

`var asciiEbcdicUtils = require('ascii-ebcdic-utils');`

## Examples

```
> console.log(asciiEbcdicUtils.asciiStrToEbcdicStr('db2jcc'));
[ '84', '82', 'F2', '91', '83', '83' ]
```

```
> console.log(asciiEbcdicUtils.bytesToAscii(['84', 'F2', '91', '83', '83']));
INDòPU1NBHNBH
```

```
> console.log(asciiEbcdicUtils.bytesToEbdic(['84', 'F2', '91', '83', '83']));
db2jcc
```
