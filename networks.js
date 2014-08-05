var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('a6f12642'),
  addressVersion: 0x49,
  privKeyVersion: 201,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('BE7D2B81B3FFF640D5F6B35AFFD2A5041AAEC83C6F398A5B1F358D3937C62142'),
    merkle_root: hex('83190C311B8AD72BB411C795227E4C3CC40DA6EE0C0C708D6D9C39F827097905'),
    height: 0,
    nonce: 3358327919,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(14), 0),
    timestamp: 1407244000,
    bits: 520355839,
  },
  dnsSeeds: [
    'dnsseed1.wampum.org',
    'dnsseed2.wampum.org',
    'dnsseed3.wampum.org'
  ],
  defaultClientPort: 9112
};

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 19112
};
