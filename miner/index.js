const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction)
}

function mine() {
    // TODO: mine a block
    let transactions = []
    while(transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        transactions.push(mempool.pop())
    }
    const block = {id: blocks.length, transactions}
    block.nonce = 0
    let hashBlock;
    while(true) {
        hashBlock = SHA256(JSON.stringify(block)).toString()
        console.log(hashBlock);
        if(BigInt(`0x${hashBlock}`) < TARGET_DIFFICULTY){
            console.log('FOUND LESS HASH    ', block.nonce);
            break;
        }
        block.nonce++
    }
    blocks.push({...block, hashBlock})
}

addTransaction({name: 'SAMET'})
mine()
console.log();