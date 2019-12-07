const add = require('../add');



describe('Add', () => [
    
    it('Should Add x + y = z', () => {
        let result = add(1, 2);
        expect(result).toEqual(3);
    })
]);