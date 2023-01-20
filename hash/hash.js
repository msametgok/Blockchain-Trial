const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    return COLORS.find((x)=> 
    
    {
        return toHex(sha256(utf8ToBytes(x))) === toHex(hash)
    }
    )
}

 console.log(findColor(sha256(utf8ToBytes(COLORS[3]))));


