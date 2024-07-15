
import { describe, it, expect } from 'vitest';
import { arrSum } from './array.js'

describe('arrSum', () => {
    it('suma todos los elementos de [1, 2, 3] y [4, 5, 6]', () => {
        expect(arrSum([1, 2, 3], [4, 5, 6])).toBe(21);
    });

    it('suma todos los elementos de [-1, -2, -3] y [-4, -5, -6]', () => {
        expect(arrSum([-1, -2, -3], [-4, -5, -6])).toBe(-21);
    });

    it('suma todos los elementos de [0, 0, 0] y [4, 5, 6]', () => {
        expect(arrSum([0, 0, 0], [4, 5, 6])).toBe(15);
    });

    it('suma todos los elementos de [100, 200, 300] y [400, 500, 600]', () => {
        expect(arrSum([100, 200, 300], [400, 500, 600])).toBe(2100);
    });
});
