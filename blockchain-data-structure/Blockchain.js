const Block = require('./Block')

class Blockchain {
    constructor() {
        this.chain = [new Block()];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length-1].toHash();
        this.chain.push(block);
    }

    isValid() {
        for (let i = this.chain.length - 1; i > 0; i--) {
            const block = this.chain[i];
            const previousBlockHash = this.chain[i-1].toHash();
            if (block.previousHash.toString() !== previousBlockHash.toString()) {
                return false;
            }
        }
        return true
    }
}

module.exports = Blockchain