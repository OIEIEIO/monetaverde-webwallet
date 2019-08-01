let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://www.masariwallet.com/api/',
	trustedDaemonsAddresses:[
		'http://mcnwallet.oieieio.xyz:26080/'
	],
	phpRelay:typeof window !== 'undefined' ? true : false,
	mainnetExplorerUrl: "https://explorer.mcn.green/",
	mainnetExplorerUrlHash: "https://explorer.mcn.green/?hash={id}#blockchain_transaction",
	mainnetExplorerUrlBlock: "https://explorer.mcn.green/?hash={id}#blockchain_block",
	testnetExplorerUrl: "http://testnet.msrchain.net/",
	testnetExplorerUrlHash: "http://testnet.msrchain.net/tx/{ID}",
	testnetExplorerUrlBlock: "http://testnet.msrchain.net/block/{ID}",
	testnet: false,
	coinUnitPlaces: 12,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 6969,
	integratedAddressPrefix: 29,
	addressPrefixTestnet: 33,
	integratedAddressPrefixTestnet: 34,
	subAddressPrefix: 52,
	subAddressPrefixTestnet: 73,
	feePerKB: new JSBigInt('400000000'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 4, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'MCN',
	openAliasPrefix: "Vd",
	coinName: 'MonetaVerde',
	coinUriPrefix: 'moneta:',
	avgBlockTime: 60,
	maxBlockNumber: 500000000,

	donationAddresses : [
		'VdtbdazVaXVDFLiaeidKb8Lp9M7f9xgj4YpqLFCkbUUZUrGQ2U29k5FdTEwSuQuZDMi3BSqhskQy6WzDVyDGJHxx3AZhXNTbN',
		'Vdu5eFAgm1xLpmNVxCQTGJTdP4WeTbhQrMHAXbkdDnsLFJ2D7F2GH2V4Fs3p5LnqhVgdBDdSQ6YQSamrcyot6pF51MRsY8Z7L',
		'VdtsvU8dBCDERLgYNkK9C5VyGdHt6cRB5Kr7Ag8faAEGE1nCs5cYjGCWfvWY377eU9doCRL3yxGAJ8XM1jEtv7Ke1Kzb2gYEc'
	]
};
