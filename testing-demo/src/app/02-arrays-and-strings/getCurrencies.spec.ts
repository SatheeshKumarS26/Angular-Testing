import {getCurrencies} from '.getCurrencies.ts'

describe('check', () => {
    it('to contain the name being passed', () => {
        let result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
})
