var expect = require('expect');

// is Real string

const {isRealString} = require('./validation');

describe('isRealString', ()=> {
    it('should reject non-string values', ()=> {
    var res = isRealString(98);
        expect(res).toBe(false);

    });
    
it('should reject a strong with only spaces', () => {
    var res = isRealString('    ');
expect(res).toBe(false);
});

it('should allow strings with non space characters', ()=> {
    var res = isRealString(' Grayson  ');
    expect(res).toBe(true);
})
});