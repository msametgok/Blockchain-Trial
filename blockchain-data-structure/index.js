const Blockchain = require('./Blockchain')
const Block = require('./Block')

const chain = new Blockchain();
const block = new Block("Mehmet's first Block")
const block2 = new Block('Second block')
chain.addBlock(block)
chain.addBlock(block2)
console.log(chain.chain[2].previousHash.toString() === chain.chain[1].toHash().toString());
//chain.chain[2].previousHash.toString() === 
//chain.chain[1].toHash().toString()