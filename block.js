const SHA256 = require('crypto-js/sha256');

class Block {

	constructor(timestamp, lastHash, hash, data) {
		this.timestamp = timestamp;
		this.lastHash = lastHash;
		this.hash = hash;
		this.data = data;
	}

	toString() {
		return `Block -
			Timestamp: ${this.timestamp}
			Last Hash: ${this.lastHash.substring(0,10)}
			Hash     : ${this.hash.substring(0,10)}
			Data     : ${this.data}`;
	}

	static genesis() {
		return new this('Genesis time', '----', 'f1r57-h45h', []);
	}

	static mineBlock(lastBlock, data){
		const ts = Date.now();
		const lastHash = lastBlock.hash;
		const hash = this.hash(ts, lastHash, data);

		return new this(ts, lastHash, hash, data);
	}

	static hash(timestamp, lastHash, data){
		return SHA256(`${timestamp}${lastHash}${data}`).toString();
	}

	static blockHash(block){
		const {timestamp, lastHash, data} = block;

		return this.hash(timestamp, lastHash, data);
	}
}

module.exports = Block;