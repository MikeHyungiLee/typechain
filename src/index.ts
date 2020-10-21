class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "12314124", "", "Hello", 123456);

// blockchain변수는 Block type의 list변수이고, genesisBlock을 갖는 list로 초기화시켜준다.
let blockchain: [Block] = [genesisBlock];

blockchain.push(genesisBlock);

console.log(blockchain);

export {};
