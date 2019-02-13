import {greet} from '.greet.ts'

describe('check', () => {
    it('to contain the name being passed', () => {
        let result = greet(satheesh);
        expect(result).toContain('satheesh');
    })
})
