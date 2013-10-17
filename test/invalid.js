var address = require('..');
var assert = require('assert');

test('invalid', function() {
    function invalid(addr, type) {
        assert.ok(!address.validate(addr, type));
    };

    // bitcoin addresses
    invalid('');
    invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhe');
    invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'prod');

    invalid('bd839e4f6fadb293ba580df5dea7814399989983');
    invalid('miCVC7QcY917Cz427qTBEUrvBzRapHrupc');
    invalid('rrRmhfXzGBKbV4YHtbpxfA1ftEcry8AJaX');
    
    // bitcoin addresses
    invalid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP');
    invalid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y');
    invalid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs');
    invalid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez');
    invalid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd');

    // reject production litecoin addresses in testnet
    invalid('LSxNsEQekEpXMS4B7tUYstMEdMyH321ZQ1', 'testnet');

    // testnet
    invalid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'testnet');

    // invalid base58 string
    invalid('%%@');
});

