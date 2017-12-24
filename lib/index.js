var hexMap = {
  "10": {
    "ascii": "DLE",
    "ebcdic": "DLE"
  },
  "11": {
    "ascii": "DC1",
    "ebcdic": "DC1"
  },
  "12": {
    "ascii": "DC2",
    "ebcdic": "DC2"
  },
  "13": {
    "ascii": "DC3",
    "ebcdic": "DC3"
  },
  "14": {
    "ascii": "DC4",
    "ebcdic": "RES/ENP"
  },
  "15": {
    "ascii": "NAK",
    "ebcdic": "New Line"
  },
  "16": {
    "ascii": "SYN",
    "ebcdic": "Backspace"
  },
  "17": {
    "ascii": "ETB",
    "ebcdic": "POC"
  },
  "18": {
    "ascii": "CAN",
    "ebcdic": "CAN"
  },
  "19": {
    "ascii": "EM",
    "ebcdic": "EM"
  },
  "20": {
    "ascii": " ",
    "ebcdic": "DS"
  },
  "21": {
    "ascii": "!",
    "ebcdic": "SOS"
  },
  "22": {
    "ascii": "\"",
    "ebcdic": "FS"
  },
  "23": {
    "ascii": "#",
    "ebcdic": "Word Underscore"
  },
  "24": {
    "ascii": "$",
    "ebcdic": "BYP/INP"
  },
  "25": {
    "ascii": "%",
    "ebcdic": "Line Feed"
  },
  "26": {
    "ascii": "&",
    "ebcdic": "ETB"
  },
  "27": {
    "ascii": "'",
    "ebcdic": "Escape"
  },
  "28": {
    "ascii": "(",
    "ebcdic": "SA"
  },
  "29": {
    "ascii": ")",
    "ebcdic": "SFE"
  },
  "30": {
    "ascii": "0",
    "ebcdic": ""
  },
  "31": {
    "ascii": "1",
    "ebcdic": ""
  },
  "32": {
    "ascii": "2",
    "ebcdic": "SYN"
  },
  "33": {
    "ascii": "3",
    "ebcdic": "IR"
  },
  "34": {
    "ascii": "4",
    "ebcdic": "PP"
  },
  "35": {
    "ascii": "5",
    "ebcdic": "TRN"
  },
  "36": {
    "ascii": "6",
    "ebcdic": "NBS"
  },
  "37": {
    "ascii": "7",
    "ebcdic": "EOT"
  },
  "38": {
    "ascii": "8",
    "ebcdic": "SBS"
  },
  "39": {
    "ascii": "9",
    "ebcdic": "IT"
  },
  "40": {
    "ascii": "@",
    "ebcdic": " "
  },
  "41": {
    "ascii": "A",
    "ebcdic": "RSP"
  },
  "42": {
    "ascii": "B",
    "ebcdic": "â"
  },
  "43": {
    "ascii": "C",
    "ebcdic": "ä"
  },
  "44": {
    "ascii": "D",
    "ebcdic": "à"
  },
  "45": {
    "ascii": "E",
    "ebcdic": "á"
  },
  "46": {
    "ascii": "F",
    "ebcdic": "ã"
  },
  "47": {
    "ascii": "G",
    "ebcdic": "å"
  },
  "48": {
    "ascii": "H",
    "ebcdic": "ç"
  },
  "49": {
    "ascii": "I",
    "ebcdic": "ñ"
  },
  "50": {
    "ascii": "P",
    "ebcdic": "&"
  },
  "51": {
    "ascii": "Q",
    "ebcdic": "é"
  },
  "52": {
    "ascii": "R",
    "ebcdic": "ê"
  },
  "53": {
    "ascii": "S",
    "ebcdic": "ë"
  },
  "54": {
    "ascii": "T",
    "ebcdic": "è"
  },
  "55": {
    "ascii": "U",
    "ebcdic": "í"
  },
  "56": {
    "ascii": "V",
    "ebcdic": "î"
  },
  "57": {
    "ascii": "W",
    "ebcdic": "ï"
  },
  "58": {
    "ascii": "X",
    "ebcdic": "ì"
  },
  "59": {
    "ascii": "Y",
    "ebcdic": "ß"
  },
  "60": {
    "ascii": "`",
    "ebcdic": "-"
  },
  "61": {
    "ascii": "a",
    "ebcdic": "/"
  },
  "62": {
    "ascii": "b",
    "ebcdic": "Â"
  },
  "63": {
    "ascii": "c",
    "ebcdic": "Ä"
  },
  "64": {
    "ascii": "d",
    "ebcdic": "À"
  },
  "65": {
    "ascii": "e",
    "ebcdic": "Á"
  },
  "66": {
    "ascii": "f",
    "ebcdic": "Ã"
  },
  "67": {
    "ascii": "g",
    "ebcdic": "Å"
  },
  "68": {
    "ascii": "h",
    "ebcdic": "Ç"
  },
  "69": {
    "ascii": "i",
    "ebcdic": "Ñ"
  },
  "70": {
    "ascii": "p",
    "ebcdic": "ø"
  },
  "71": {
    "ascii": "q",
    "ebcdic": "É"
  },
  "72": {
    "ascii": "r",
    "ebcdic": "Ê"
  },
  "73": {
    "ascii": "s",
    "ebcdic": "Ë"
  },
  "74": {
    "ascii": "t",
    "ebcdic": "È"
  },
  "75": {
    "ascii": "u",
    "ebcdic": "Í"
  },
  "76": {
    "ascii": "v",
    "ebcdic": "Î"
  },
  "77": {
    "ascii": "w",
    "ebcdic": "Ï"
  },
  "78": {
    "ascii": "x",
    "ebcdic": "Ì"
  },
  "79": {
    "ascii": "y",
    "ebcdic": "`"
  },
  "80": {
    "ascii": "",
    "ebcdic": "Ø"
  },
  "81": {
    "ascii": "",
    "ebcdic": "a"
  },
  "82": {
    "ascii": "BPH",
    "ebcdic": "b"
  },
  "83": {
    "ascii": "NBH",
    "ebcdic": "c"
  },
  "84": {
    "ascii": "IND",
    "ebcdic": "d"
  },
  "85": {
    "ascii": "Next Line",
    "ebcdic": "e"
  },
  "86": {
    "ascii": "SSA",
    "ebcdic": "f"
  },
  "87": {
    "ascii": "ESA",
    "ebcdic": "g"
  },
  "88": {
    "ascii": "HTS",
    "ebcdic": "h"
  },
  "89": {
    "ascii": "HTJ",
    "ebcdic": "i"
  },
  "90": {
    "ascii": "DCS",
    "ebcdic": "°"
  },
  "91": {
    "ascii": "PU1",
    "ebcdic": "j"
  },
  "92": {
    "ascii": "PU2",
    "ebcdic": "k"
  },
  "93": {
    "ascii": "STS",
    "ebcdic": "l"
  },
  "94": {
    "ascii": "CCH",
    "ebcdic": "m"
  },
  "95": {
    "ascii": "MW",
    "ebcdic": "n"
  },
  "96": {
    "ascii": "SPA",
    "ebcdic": "o"
  },
  "97": {
    "ascii": "EPA",
    "ebcdic": "p"
  },
  "98": {
    "ascii": "SOS",
    "ebcdic": "q"
  },
  "99": {
    "ascii": "",
    "ebcdic": "r"
  },
  "00": {
    "ascii": "Null",
    "ebcdic": "Null"
  },
  "01": {
    "ascii": "SOH",
    "ebcdic": "SOH"
  },
  "02": {
    "ascii": "STX",
    "ebcdic": "STX"
  },
  "03": {
    "ascii": "ETX",
    "ebcdic": "ETX"
  },
  "04": {
    "ascii": "EOT",
    "ebcdic": "SEL"
  },
  "05": {
    "ascii": "ENQ",
    "ebcdic": "HT"
  },
  "06": {
    "ascii": "ACK",
    "ebcdic": "RNL"
  },
  "07": {
    "ascii": "Bell",
    "ebcdic": "Delete"
  },
  "08": {
    "ascii": "Backspace",
    "ebcdic": "GE"
  },
  "09": {
    "ascii": "HT",
    "ebcdic": "SPS"
  },
  "0A": {
    "ascii": "Line Feed",
    "ebcdic": "RPT"
  },
  "0B": {
    "ascii": "VT",
    "ebcdic": "VT"
  },
  "0C": {
    "ascii": "Form Feed",
    "ebcdic": "Form Feed"
  },
  "0D": {
    "ascii": "Carriage Return",
    "ebcdic": "Carriage Return"
  },
  "0E": {
    "ascii": "SO",
    "ebcdic": "SO"
  },
  "0F": {
    "ascii": "SI",
    "ebcdic": "SI"
  },
  "1A": {
    "ascii": "SUB",
    "ebcdic": "UBS"
  },
  "1B": {
    "ascii": "ESC",
    "ebcdic": "CU1"
  },
  "1C": {
    "ascii": "IFS",
    "ebcdic": "IFS"
  },
  "1D": {
    "ascii": "IGS",
    "ebcdic": "IGS"
  },
  "1E": {
    "ascii": "IRS",
    "ebcdic": "IRS"
  },
  "1F": {
    "ascii": "IUS",
    "ebcdic": "ITB/IUS"
  },
  "2A": {
    "ascii": "*",
    "ebcdic": "SM/SW"
  },
  "2B": {
    "ascii": "+",
    "ebcdic": "CSP"
  },
  "2C": {
    "ascii": ",",
    "ebcdic": "MFA"
  },
  "2D": {
    "ascii": "-",
    "ebcdic": "ENQ"
  },
  "2E": {
    "ascii": ".",
    "ebcdic": "ACK"
  },
  "2F": {
    "ascii": "/",
    "ebcdic": "Bell"
  },
  "3A": {
    "ascii": ":",
    "ebcdic": "RFF"
  },
  "3B": {
    "ascii": ";",
    "ebcdic": "CU3"
  },
  "3C": {
    "ascii": "<",
    "ebcdic": "DC4"
  },
  "3D": {
    "ascii": "=",
    "ebcdic": "NAK"
  },
  "3E": {
    "ascii": ">",
    "ebcdic": ""
  },
  "3F": {
    "ascii": "?",
    "ebcdic": "SUB"
  },
  "4A": {
    "ascii": "J",
    "ebcdic": "¢"
  },
  "4B": {
    "ascii": "K",
    "ebcdic": "."
  },
  "4C": {
    "ascii": "L",
    "ebcdic": "<"
  },
  "4D": {
    "ascii": "M",
    "ebcdic": "("
  },
  "4E": {
    "ascii": "N",
    "ebcdic": "+"
  },
  "4F": {
    "ascii": "O",
    "ebcdic": "|"
  },
  "5A": {
    "ascii": "Z",
    "ebcdic": "!"
  },
  "5B": {
    "ascii": "[",
    "ebcdic": "$"
  },
  "5C": {
    "ascii": "\\",
    "ebcdic": "*"
  },
  "5D": {
    "ascii": "]",
    "ebcdic": ")"
  },
  "5E": {
    "ascii": "^",
    "ebcdic": ";"
  },
  "5F": {
    "ascii": "_",
    "ebcdic": "¬"
  },
  "6A": {
    "ascii": "j",
    "ebcdic": "¦"
  },
  "6B": {
    "ascii": "k",
    "ebcdic": ","
  },
  "6C": {
    "ascii": "l",
    "ebcdic": "%"
  },
  "6D": {
    "ascii": "m",
    "ebcdic": "_"
  },
  "6E": {
    "ascii": "n",
    "ebcdic": ">"
  },
  "6F": {
    "ascii": "o",
    "ebcdic": "?"
  },
  "7A": {
    "ascii": "z",
    "ebcdic": ":"
  },
  "7B": {
    "ascii": "{",
    "ebcdic": "#"
  },
  "7C": {
    "ascii": "|",
    "ebcdic": "@"
  },
  "7D": {
    "ascii": "}",
    "ebcdic": "'"
  },
  "7E": {
    "ascii": "~",
    "ebcdic": "="
  },
  "7F": {
    "ascii": "",
    "ebcdic": "\""
  },
  "8A": {
    "ascii": "VTS",
    "ebcdic": "«"
  },
  "8B": {
    "ascii": "PLD",
    "ebcdic": "»"
  },
  "8C": {
    "ascii": "PLU",
    "ebcdic": "ð"
  },
  "8D": {
    "ascii": "RI",
    "ebcdic": "ý"
  },
  "8E": {
    "ascii": "SS2",
    "ebcdic": "Þ"
  },
  "8F": {
    "ascii": "SS3",
    "ebcdic": "±"
  },
  "9A": {
    "ascii": "SCI",
    "ebcdic": "ª"
  },
  "9B": {
    "ascii": "CSI",
    "ebcdic": "º"
  },
  "9C": {
    "ascii": "ST",
    "ebcdic": "æ"
  },
  "9D": {
    "ascii": "OSC",
    "ebcdic": "¸"
  },
  "9E": {
    "ascii": "PM",
    "ebcdic": "Æ"
  },
  "9F": {
    "ascii": "APC",
    "ebcdic": "¤"
  },
  "A0": {
    "ascii": "RSP",
    "ebcdic": "µ"
  },
  "A1": {
    "ascii": "¡",
    "ebcdic": "~"
  },
  "A2": {
    "ascii": "¢",
    "ebcdic": "s"
  },
  "A3": {
    "ascii": "£",
    "ebcdic": "t"
  },
  "A4": {
    "ascii": "¤",
    "ebcdic": "u"
  },
  "A5": {
    "ascii": "¥",
    "ebcdic": "v"
  },
  "A6": {
    "ascii": "¦",
    "ebcdic": "w"
  },
  "A7": {
    "ascii": "§",
    "ebcdic": "x"
  },
  "A8": {
    "ascii": "¨",
    "ebcdic": "y"
  },
  "A9": {
    "ascii": "©",
    "ebcdic": "z"
  },
  "AA": {
    "ascii": "ª",
    "ebcdic": "¡"
  },
  "AB": {
    "ascii": "«",
    "ebcdic": "¿"
  },
  "AC": {
    "ascii": "¬",
    "ebcdic": "Ð"
  },
  "AD": {
    "ascii": "Syllable Hyphen",
    "ebcdic": "Ý"
  },
  "AE": {
    "ascii": "®",
    "ebcdic": "þ"
  },
  "AF": {
    "ascii": "¯",
    "ebcdic": "®"
  },
  "B0": {
    "ascii": "°",
    "ebcdic": "^"
  },
  "B1": {
    "ascii": "±",
    "ebcdic": "£"
  },
  "B2": {
    "ascii": "²",
    "ebcdic": "¥"
  },
  "B3": {
    "ascii": "³",
    "ebcdic": "·"
  },
  "B4": {
    "ascii": "´",
    "ebcdic": "©"
  },
  "B5": {
    "ascii": "µ",
    "ebcdic": "§"
  },
  "B6": {
    "ascii": "¶",
    "ebcdic": "¶"
  },
  "B7": {
    "ascii": "·",
    "ebcdic": "¼"
  },
  "B8": {
    "ascii": "¸",
    "ebcdic": "½"
  },
  "B9": {
    "ascii": "¹",
    "ebcdic": "¾"
  },
  "BA": {
    "ascii": "º",
    "ebcdic": "["
  },
  "BB": {
    "ascii": "»",
    "ebcdic": "]"
  },
  "BC": {
    "ascii": "¼",
    "ebcdic": "ä"
  },
  "BD": {
    "ascii": "½",
    "ebcdic": "\""
  },
  "BE": {
    "ascii": "¾",
    "ebcdic": "´"
  },
  "BF": {
    "ascii": "¿",
    "ebcdic": "×"
  },
  "C0": {
    "ascii": "À",
    "ebcdic": "{"
  },
  "C1": {
    "ascii": "Á",
    "ebcdic": "A"
  },
  "C2": {
    "ascii": "Â",
    "ebcdic": "B"
  },
  "C3": {
    "ascii": "Ã",
    "ebcdic": "C"
  },
  "C4": {
    "ascii": "Ä",
    "ebcdic": "D"
  },
  "C5": {
    "ascii": "Å",
    "ebcdic": "E"
  },
  "C6": {
    "ascii": "Æ",
    "ebcdic": "F"
  },
  "C7": {
    "ascii": "Ç",
    "ebcdic": "G"
  },
  "C8": {
    "ascii": "È",
    "ebcdic": "H"
  },
  "C9": {
    "ascii": "É",
    "ebcdic": "I"
  },
  "CA": {
    "ascii": "Ê",
    "ebcdic": "Syllable Hyphen"
  },
  "CB": {
    "ascii": "Ë",
    "ebcdic": "ô"
  },
  "CC": {
    "ascii": "Ì",
    "ebcdic": "ö"
  },
  "CD": {
    "ascii": "Í",
    "ebcdic": "ò"
  },
  "CE": {
    "ascii": "Î",
    "ebcdic": "ó"
  },
  "CF": {
    "ascii": "Ï",
    "ebcdic": "õ"
  },
  "D0": {
    "ascii": "Ð",
    "ebcdic": "}"
  },
  "D1": {
    "ascii": "Ñ",
    "ebcdic": "J"
  },
  "D2": {
    "ascii": "Ò",
    "ebcdic": "K"
  },
  "D3": {
    "ascii": "Ó",
    "ebcdic": "L"
  },
  "D4": {
    "ascii": "Ô",
    "ebcdic": "M"
  },
  "D5": {
    "ascii": "Õ",
    "ebcdic": "N"
  },
  "D6": {
    "ascii": "Ö",
    "ebcdic": "O"
  },
  "D7": {
    "ascii": "×",
    "ebcdic": "P"
  },
  "D8": {
    "ascii": "Ø",
    "ebcdic": "Q"
  },
  "D9": {
    "ascii": "Ù",
    "ebcdic": "R"
  },
  "DA": {
    "ascii": "Ú",
    "ebcdic": "¹"
  },
  "DB": {
    "ascii": "Û",
    "ebcdic": "û"
  },
  "DC": {
    "ascii": "Ü",
    "ebcdic": "ü"
  },
  "DD": {
    "ascii": "Ý",
    "ebcdic": "ù"
  },
  "DE": {
    "ascii": "Þ",
    "ebcdic": "ú"
  },
  "DF": {
    "ascii": "ß",
    "ebcdic": "ÿ"
  },
  "E0": {
    "ascii": "à",
    "ebcdic": "\\"
  },
  "E1": {
    "ascii": "á",
    "ebcdic": "÷"
  },
  "E2": {
    "ascii": "â",
    "ebcdic": "S"
  },
  "E3": {
    "ascii": "ã",
    "ebcdic": "T"
  },
  "E4": {
    "ascii": "ä",
    "ebcdic": "U"
  },
  "E5": {
    "ascii": "å",
    "ebcdic": "V"
  },
  "E6": {
    "ascii": "æ",
    "ebcdic": "W"
  },
  "E7": {
    "ascii": "ç",
    "ebcdic": "X"
  },
  "E8": {
    "ascii": "è",
    "ebcdic": "Y"
  },
  "E9": {
    "ascii": "é",
    "ebcdic": "Z"
  },
  "EA": {
    "ascii": "ê",
    "ebcdic": "²"
  },
  "EB": {
    "ascii": "ë",
    "ebcdic": "Ô"
  },
  "EC": {
    "ascii": "ì",
    "ebcdic": "Ö"
  },
  "ED": {
    "ascii": "í",
    "ebcdic": "Ò"
  },
  "EE": {
    "ascii": "î",
    "ebcdic": "Ó"
  },
  "EF": {
    "ascii": "ï",
    "ebcdic": "Õ"
  },
  "F0": {
    "ascii": "ð",
    "ebcdic": "0"
  },
  "F1": {
    "ascii": "ñ",
    "ebcdic": "1"
  },
  "F2": {
    "ascii": "ò",
    "ebcdic": "2"
  },
  "F3": {
    "ascii": "ó",
    "ebcdic": "3"
  },
  "F4": {
    "ascii": "ô",
    "ebcdic": "4"
  },
  "F5": {
    "ascii": "õ",
    "ebcdic": "5"
  },
  "F6": {
    "ascii": "ö",
    "ebcdic": "6"
  },
  "F7": {
    "ascii": "÷",
    "ebcdic": "7"
  },
  "F8": {
    "ascii": "ø",
    "ebcdic": "8"
  },
  "F9": {
    "ascii": "ù",
    "ebcdic": "9"
  },
  "FA": {
    "ascii": "ú",
    "ebcdic": "³"
  },
  "FB": {
    "ascii": "û",
    "ebcdic": "Û"
  },
  "FC": {
    "ascii": "ü",
    "ebcdic": "Ü"
  },
  "FD": {
    "ascii": "ý",
    "ebcdic": "Ù"
  },
  "FE": {
    "ascii": "þ",
    "ebcdic": "Ú"
  },
  "FF": {
    "ascii": "ÿ",
    "ebcdic": "*"
  }
};

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
