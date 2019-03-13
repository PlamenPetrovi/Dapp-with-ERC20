// var loadtest = require('loadtest');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));

// function optionsObject() {
//   return {
//   url: 'http://localhost:7000/eth/checkEthBalance',
//   maxRequests: 1,
//   concurrency: 1,
//   method: 'POST',
//   contentType: 'application/json',
//   body: {
//      		body: {
//      			accountAddress:"0x739BDbBd0f792395B031b3572ceE6e73D5E94b5E"
//      		}
//         }
//    }
// }
//
// loadtest.loadTest(optionsObject(), function (error, result) {
// 	if (error) {
// 	 	console.log('Got an error: %s', error);
// 	} else {
// 	 	console.log(result);
// 	}
// });
