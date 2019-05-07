const assert = require('assert')
const Room =  require('../room.js')
const Paint =  require('../paint.js')
const Decorator =  require('../decorator.js')

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
        const room = new Room(10)
        room.paint()
        const actual = room.painted;
        assert.strictEqual(actual, true)
    });

    describe('Paint', function(){
        let paint;

        beforeEach(function(){
            paint = new Paint(100)
        })
    it('have a number of litres of paint', function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 100)
    })
    it('be able to check if it is empty', function(){
        const actual = paint.empty;
        assert.strictEqual(actual, false)
    })
    it('be able to empty itself of paint', function(){
        paint.emptyCan()
        const actual = paint.empty;
        assert.strictEqual(actual, true)

    })
    describe('Decorator', function(){
        let paint;
        let decorator;

        beforeEach(function(){
            paint = new Paint(100)
            decorator = new Decorator()
        })

        it('start with an empty paint stock',function(){
            const actual = decorator.stock;
            assert.deepStrictEqual(actual, [])
        })
        it('be able to add a can of paint to paint stock',function(){
            decorator.addToStock(paint)
            assert.deepStrictEqual(actual, [paint])
        })
        it('be able to calculate total litres paint it has in stock',function(){})
        it('be able to calculate whether it has enough paint to paint a room',function(){})
        it('be able to paint room if has enough paint in stock',function(){})
    })
})

})

