import { describe, expect, test, beforeAll } from 'bun:test'
beforeAll(() => {
    //Setup test
})

describe ('math', () => {
    test('addition', () => {
        expect(2+2).toBe(4)
    });
});