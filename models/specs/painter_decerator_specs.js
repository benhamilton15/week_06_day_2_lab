const assert = require('assert')
const Room =  require('../room.js')

describe('Room', function(){



    it('should have an area in square meters', function(){
        const room = new Room(10)
        const actual = room.area;
        assert.strictEqual(actual, 10)
    });
    it('should start not painted', function(){
        const room = new Room(10)
        const actual = room.painted;
        assert.strictEqual(actual, false)
    });
    it('should be able to be painted', function(){

    });

})