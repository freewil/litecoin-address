var address = require('..');
var assert = require('assert');

test('valid', function() {
    function validate(addr, type) {
        assert.ok(address.validate(addr, type));
    };

    validate('LiL8HvSJRDgnS5BXATWe5MzWYicCbRvisr');
    validate('LiL8HvSJRDgnS5BXATWe5MzWYicCbRvisr', 'prod');
    validate('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'testnet');

    validate('LX8B2K8eHSxWjfS55sdMoQj2PCPmvRRyLv');
    validate('LNiFbDQqKifz4jFT4jDrKDzGAucCErmxm4');
    validate('LToXZPFNxF5TiQ2caYXQqbSxdV9h8ZF23s');
    validate('LSDeYTScvhrWGgz1Hri2H67nDH9sUBGc47');
    validate('LW5xQHusFWajGJceNc9RvtzywKoE6uavnV');

    // p2sh addresses
    validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt');
    validate('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'prod');
    validate('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'testnet');
});

