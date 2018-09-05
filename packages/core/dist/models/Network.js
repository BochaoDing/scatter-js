'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _stringify=require('babel-runtime/core-js/json/stringify'),_stringify2=_interopRequireDefault(_stringify),_assign=require('babel-runtime/core-js/object/assign'),_assign2=_interopRequireDefault(_assign),_Blockchains=require('./Blockchains');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}class Network{constructor(a='',b='https',c='',d=0,e=_Blockchains.Blockchains.EOS,f=''){this.name=a,this.protocol=b,this.host=c,this.port=d,this.blockchain=e,this.chainId=f.toString()}static placeholder(){return new Network}static fromJson(a){const b=(0,_assign2.default)(Network.placeholder(),a);return b.chainId=b.chainId?b.chainId.toString():'',b}static fromUnique(a){const b=a.split(':')[0];if(-1<a.indexOf(':chain:'))return new Network('','','','',b,a.replace(`${b}:chain:`,''));const c=a.replace(`${b}:`,'').split(':');return new Network('','',c[0],parseInt(c[1]||80),b)}unique(){return(`${this.blockchain}:`+(this.chainId.length?`chain:${this.chainId}`:`${this.host}:${this.port}`)).toLowerCase()}hostport(){return`${this.host}${this.port?':':''}${this.port}`}fullhost(){return`${this.protocol}://${this.host}${this.port?':':''}${this.port}`}clone(){return Network.fromJson(JSON.parse((0,_stringify2.default)(this)))}isEmpty(){return!this.host.length}isValid(){return this.protocol.length&&this.host.length&&this.port||this.chainId.length}}exports.default=Network;