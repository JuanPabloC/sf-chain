const Block = require('./block');

// -------------------- TEST 1 --------------------

// const block = new Block('foo', 'bar', 'zoo', 'baz');
// console.log(block.toString());
// console.log(Block.genesis().toString());


// -------------------- TEST 2 --------------------

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());

