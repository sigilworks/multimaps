const { expect } = require('chai');
const { ListMultimap } = require('../lib');

describe('ListMultimap', function() {
    let map;

    beforeEach(function() {
        map = new ListMultimap;
        map.set('test', 2)
            .set('abc', 1)
            .set('abc', 2)
            .set('abc', 2)
            .set('abc', 3);
    });

    it('should set a value for a key', function() {
        expect(map.get('test')).to.not.be.null;
    });

    it('should always return an array of values for any key', function() {
        expect(map.get('test')).to.be.an.instanceOf(Array);
    });

    it('should aggregate individual value assignments in a single array', function() {
        expect(map.get('abc')).to.have.lengthOf(4);
    });

    it('should permit each key to have duplicate values', function() {
        expect(map.get('abc')).to.have.members([1,2,2,3]);
    });

    it('`count` property should return the sum of the sizes of the values of the map', function() {
        expect(map.count).to.equal(5);
    });

    it('#toJSON should return map contents serialized as JSON', function() {
        expect(JSON.stringify(map)).to.equal('{"test":[2],"abc":[1,2,2,3]}');
    });

    it('#toString() should return `[object ListMultimap]`', function() {
        expect(map.toString()).to.equal('[object ListMultimap]');
    });
});
